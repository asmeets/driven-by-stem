#!/usr/bin/env node
// Check what MakeCode is actually serving for each stage, after a release.
// Node builtins only - no package.json, no dependencies.
// Usage: node tools/check-release.mjs
//
// MakeCode serves a tutorial as one bundle per path, holding the markdown and the
// repo's library files together, built from the repo's latest release the first
// time that path is requested and then cached. Two things can go wrong, and both
// have: the bundle can be built before the release is visible, pairing new
// instructions with the previous library, and the editor can resolve the extension
// separately through its own cached "latest version" lookup.
//
// This fetches every stage the preview skillmap points at and reports the release
// each bundle was built from, the version the tutorial pins, and the version the
// library reports. All three have to agree.
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const REPO = 'asmeets/driven-by-stem'
const cdn = new Date().toISOString().slice(0, 10).replace(/-/g, '')

const map = readFileSync(join(ROOT, 'skillmap-preview.md'), 'utf8')
const paths = [...map.matchAll(/^\* url:\s*github:[^/]+\/[^/]+\/(\S+)/gm)].map(m => m[1])
if (!paths.length) {
    console.error('No tutorial urls found in skillmap-preview.md')
    process.exit(1)
}

let bad = 0
for (const path of paths) {
    const url = `https://cdn.makecode.com/api/ghtutorial/${REPO}/${path}?cdn=${cdn}`
    const name = path.split('/').pop()
    try {
        const res = await fetch(url)
        const cache = res.headers.get('x-cache') || '?'
        const body = await res.json()
        const repo = body.markdown.repo
        const md = repo.files[`${path}.md`] || ''
        const lib = (repo.files['custom.ts'] || '') + (repo.files['test-track.ts'] || '')
        const pin = (md.match(/```package\n([^\n]+)/) || [])[1] || 'NO PIN'
        const marker = (lib.match(/const LIBRARY_VERSION = "([^"]+)"/) || [])[1] || '?'
        const problems = []
        if (!pin.endsWith(`#${repo.version}`)) problems.push(`pin says ${pin.split('#').pop()}`)
        if (marker !== repo.version) problems.push(`library says ${marker}`)
        if (repo.version !== repo.latestVersion) problems.push(`latest release is ${repo.latestVersion}`)
        if (problems.length) bad++
        console.log(
            `${problems.length ? 'STALE' : 'ok   '} ${name.padEnd(24)} ${repo.version.padEnd(9)}` +
            ` x-cache ${cache}${problems.length ? '   ' + problems.join(', ') : ''}`)
    } catch (e) {
        bad++
        console.log(`ERR   ${name.padEnd(24)} ${e.message}`)
    }
}

if (bad) {
    console.error(`\n${bad} stage(s) are not serving this release.`)
    console.error('Rotate the filenames (tools/bump-tutorial.mjs --all), re-pin')
    console.error('(tools/pin-version.mjs vX.Y.Z), and cut the release again.')
    process.exit(1)
}
console.log(`\nOK - all ${paths.length} stages serving a matching release.`)
