#!/usr/bin/env node
// Content integrity checks for the Driven by STEM skillmap.
// Node builtins only - no package.json, no dependencies.
// Usage: node tools/check-content.mjs

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const errors = []
const warnings = []
const fail = (f, m) => errors.push(`${f}: ${m}`)
const warn = (f, m) => warnings.push(`${f}: ${m}`)

const read = p => readFileSync(join(ROOT, p), 'utf8')

// ---- collect tutorials -------------------------------------------------
function walk(dir, out = []) {
    for (const e of readdirSync(join(ROOT, dir))) {
        const rel = `${dir}/${e}`
        if (statSync(join(ROOT, rel)).isDirectory()) walk(rel, out)
        else if (e.endsWith('.md')) out.push(rel)
    }
    return out
}
const tutorials = walk('tutorials').sort()
const stageTutorials = tutorials.filter(t => t.startsWith('tutorials/stages/'))
const skillmaps = readdirSync(ROOT).filter(f => /^skillmap.*\.md$/.test(f))

// ---- 1. skillmap node urls resolve ------------------------------------
for (const sm of skillmaps) {
    const src = read(sm)
    const urls = [...src.matchAll(/^\* url:\s*github:([^\s]+)/gm)].map(m => m[1])
    for (const u of urls) {
        const parts = u.split('/')
        const path = parts.slice(2).join('/') + '.md'
        if (!existsSync(join(ROOT, path))) fail(sm, `node url does not resolve to a file: ${path}`)
    }
    // next: chain integrity
    const ids = [...src.matchAll(/^### (.+)$/gm)].map(m => m[1].trim())
    const nexts = [...src.matchAll(/^\* next:\s*(.+)$/gm)].map(m => m[1].trim())
    for (const n of nexts) if (!ids.includes(n)) fail(sm, `next: "${n}" names no node in this map`)
}

// ---- 2. pxt.json files[] matches disk ---------------------------------
const pxt = JSON.parse(read('pxt.json'))
for (const f of pxt.files) if (!existsSync(join(ROOT, f))) fail('pxt.json', `files[] lists a missing file: ${f}`)
for (const t of tutorials) if (!pxt.files.includes(t)) fail('pxt.json', `tutorial not listed in files[]: ${t}`)
for (const sm of skillmaps) if (!pxt.files.includes(sm)) fail('pxt.json', `skillmap not listed in files[]: ${sm}`)

// ---- per-tutorial checks ----------------------------------------------
const assetHashes = new Map()
const customTs = read('custom.ts')
const exported = new Set([...customTs.matchAll(/export (?:function|enum) (\w+)/g)].map(m => m[1]))
const assetNames = new Set([...read('images.g.jres').matchAll(/"displayName":\s*"([^"]+)"/g)].map(m => m[1]))

for (const t of tutorials) {
    const src = read(t)
    const isStub = src.includes('<!-- PREVIEW-STUB')
    const isStage = stageTutorials.includes(t) && !isStub
    const bytes = Buffer.byteLength(src)

    // 3. size
    if (bytes > 512000) fail(t, `${bytes} bytes exceeds the hard 512K ceiling`)
    else if (bytes > 128000) warn(t, `${bytes} bytes is over MakeCode's documented 128K limit (known, accepted - embedded assetjson)`)

    // 4. numbered steps contiguous, and within budget for revised stages
    const steps = [...src.matchAll(/^## \{(\d+)\. /gm)].map(m => Number(m[1]))
    steps.forEach((n, i) => { if (n !== i + 1) fail(t, `step numbering breaks at "${n}" (expected ${i + 1})`) })
    if (isStub && /controller\.A\.onEvent/.test(src)) fail(t, 'binds controller.A, reserved by the library')
    if (isStage) {
        if (steps.length < 6 || steps.length > 10) fail(t, `${steps.length} numbered steps is outside the 6-10 budget`)
        const dialogs = (src.match(/^## .*@showdialog/gm) || []).length
        if (dialogs !== 1) fail(t, `expected exactly 1 @showdialog card, found ${dialogs}`)
        for (const flag of ['### @diffs true', '### @explicitHints true', '```validation.global'])
            if (!src.includes(flag)) fail(t, `missing required directive: ${flag}`)
        // 5. never bind controller.A - the library owns it (test-track.ts ensureHooksInstalled)
        if (/controller\.A\.onEvent/.test(src)) fail(t, `binds controller.A, which the library reserves for start-line staging`)
    }

    // 5b. cache-busting: MakeCode caches tutorial markdown by URL and a new
    //     release tag does not clear it. Only a new filename does, so every
    //     stage tutorial must carry a -v<N> suffix (see tools/bump-tutorial.mjs).
    if (stageTutorials.includes(t) && !/-v\d+\.md$/.test(t))
        fail(t, 'missing the -v<N> version suffix; MakeCode will serve a cached copy after edits (run tools/bump-tutorial.mjs)')

    // 6. validate markers must sit inside a blocks fence
    const fences = [...src.matchAll(/^```(\w[\w.]*)\n([\s\S]*?)^```$/gm)]
    const inBlocks = fences.filter(f => f[1] === 'blocks').map(f => f[2]).join('\n')
    const totalMarkers = (src.match(/^\/\/@(validate-exists|highlight)$/gm) || []).length
    const blockMarkers = (inBlocks.match(/^\/\/@(validate-exists|highlight)$/gm) || []).length
    if (totalMarkers !== blockMarkers) fail(t, `${totalMarkers - blockMarkers} @validate/@highlight marker(s) sit outside a \`\`\`blocks fence`)

    // 7. hint balance
    const openH = (src.match(/^~hint /gm) || []).length
    const closeH = (src.match(/^hint~$/gm) || []).length
    if (openH !== closeH) fail(t, `~hint/hint~ unbalanced (${openH} open, ${closeH} close)`)

    // 8. library calls exist
    for (const m of src.matchAll(/drivenByStem\.(\w+)\(/g))
        if (!exported.has(m[1])) fail(t, `calls drivenByStem.${m[1]}(), which is not exported from custom.ts`)

    // 9. asset names exist
    for (const m of src.matchAll(/assets\.image`([^`]+)`/g))
        if (!assetNames.has(m[1])) fail(t, `references asset \`${m[1]}\`, which is not in the asset set`)

    // 10. assetjson payload identical across tutorials
    const idx = src.indexOf('```assetjson')
    if (idx === -1) {
        if (!isStub) fail(t, 'missing the ```assetjson payload - sprites will not appear in My Assets')
    } else assetHashes.set(t, createHash('md5').update(src.slice(idx)).digest('hex'))
}

// 11. one canonical asset payload
const distinct = [...new Set(assetHashes.values())]
if (distinct.length > 1) {
    fail('assetjson', `payload diverges across tutorials (${distinct.length} distinct hashes)`)
    for (const [t, h] of assetHashes) errors.push(`    ${h}  ${t}`)
}

// 12. every raw.githubusercontent URL resolves to a repo path
for (const f of [...tutorials, ...skillmaps]) {
    for (const m of read(f).matchAll(/raw\.githubusercontent\.com\/asmeets\/driven-by-stem\/main\/([^\s")']+)/g))
        if (!existsSync(join(ROOT, m[1]))) fail(f, `asset URL does not resolve: ${m[1]}`)
}

// ---- report ------------------------------------------------------------
for (const w of warnings) console.log(`  warn  ${w}`)
if (errors.length) {
    console.error(`\n${errors.length} problem(s):\n`)
    for (const e of errors) console.error(`  FAIL  ${e}`)
    process.exit(1)
}
const stubs = tutorials.filter(t => read(t).includes('<!-- PREVIEW-STUB'))
console.log(`\nOK - ${tutorials.length} tutorial files (${stageTutorials.length - stubs.length} built stages, ${stubs.length} preview stubs, ${tutorials.length - stageTutorials.length} legacy), ${skillmaps.length} skillmaps, ${distinct.length} asset payload hash, ${warnings.length} warning(s).`)
if (stubs.length) console.log(`      stubs awaiting build: ${stubs.map(s => s.split('/').pop()).join(', ')}`)
