#!/usr/bin/env node
// Bump a tutorial's version suffix so MakeCode serves the new content.
//
// MakeCode caches tutorial markdown by URL, and a new release tag is not
// enough to clear it. The only reliable cache-bust is a NEW FILENAME, which
// is why every tutorial carries a -v<N> suffix. Renaming by hand means
// editing three places (the file, every skillmap that points at it, and
// pxt.json) and forgetting one leaves a broken node.
//
// Usage:  node tools/bump-tutorial.mjs 2-design
//         node tools/bump-tutorial.mjs tutorials/stages/2-design-v1.md
//         node tools/bump-tutorial.mjs --all

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const args = process.argv.slice(2)
if (!args.length) {
    console.error('usage: node tools/bump-tutorial.mjs <stage-name|path|--all>')
    process.exit(1)
}

const walk = (dir, out = []) => {
    for (const e of readdirSync(join(ROOT, dir))) {
        const rel = `${dir}/${e}`
        if (statSync(join(ROOT, rel)).isDirectory()) walk(rel, out)
        else if (e.endsWith('.md')) out.push(rel)
    }
    return out
}
const tutorials = walk('tutorials')
const skillmaps = readdirSync(ROOT).filter(f => /^skillmap.*\.md$/.test(f))

const targets = args.includes('--all')
    ? tutorials.filter(t => t.startsWith('tutorials/stages/'))
    : args.map(a => {
        const stem = a.replace(/^.*\//, '').replace(/\.md$/, '').replace(/-v\d+$/, '')
        const hit = tutorials.find(t => t.replace(/^.*\//, '').replace(/-v\d+\.md$/, '') === stem)
        if (!hit) { console.error(`no tutorial matches "${a}"`); process.exit(1) }
        return hit
    })

let pxt = readFileSync(join(ROOT, 'pxt.json'), 'utf8')
const maps = new Map(skillmaps.map(m => [m, readFileSync(join(ROOT, m), 'utf8')]))

for (const oldPath of targets) {
    const m = oldPath.match(/^(.*?)(?:-v(\d+))?\.md$/)
    const base = m[1]
    const next = (Number(m[2] || 0)) + 1
    const newPath = `${base}-v${next}.md`
    if (oldPath === newPath) continue

    execFileSync('git', ['mv', oldPath, newPath], { cwd: ROOT })

    // skillmap node urls carry no .md extension
    const oldRef = oldPath.replace(/\.md$/, '')
    const newRef = newPath.replace(/\.md$/, '')
    for (const [name, body] of maps) {
        if (body.includes(oldRef)) maps.set(name, body.split(oldRef).join(newRef))
    }
    pxt = pxt.split(`"${oldPath}"`).join(`"${newPath}"`)

    console.log(`  ${oldPath}\n    -> ${newPath}`)
}

for (const [name, body] of maps) writeFileSync(join(ROOT, name), body)
writeFileSync(join(ROOT, 'pxt.json'), pxt)

console.log('\nUpdated skillmaps and pxt.json. Run: node tools/check-content.mjs')
