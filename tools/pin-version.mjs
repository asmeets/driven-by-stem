#!/usr/bin/env node
// Pin the library version every stage tutorial compiles against.
//
// A tutorial's markdown and the extension it runs on are fetched by MakeCode
// through two different paths, and they can disagree: the editor resolves
// "latest release" through a cached lookup, so a project created minutes after a
// release can still be built against the previous one. That is invisible in the
// tutorial text and shows up as behaviour that is one release behind.
//
// A ```package fence pins it. MakeCode's own docs recommend it: you can leave the
// version off, "but it's highly recommended that you include it" so later changes
// to the extension don't break the tutorial.
//
//   node tools/pin-version.mjs v9.0.3   set the pin in every stage tutorial
//   node tools/pin-version.mjs --check  print what each stage is pinned to
//   node tools/pin-version.mjs --keep   re-apply the pin the other stages carry,
//                                       for a stage that has just been regenerated
//
// The version must be a release tag that exists, or will exist, on the commit
// these tutorials ship in. The content validator fails on a missing or
// mismatched pin.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const STAGES = join(process.cwd(), 'tutorials', 'stages')
const DEP = 'driven-by-stem=github:asmeets/driven-by-stem'
const FENCE = /```package\n([^\n]*)\n```\n\n?/

const files = readdirSync(STAGES).filter(f => f.endsWith('.md')).sort()
const arg = process.argv[2]

if (!arg || arg === '--check') {
    for (const f of files) {
        const m = readFileSync(join(STAGES, f), 'utf8').match(FENCE)
        console.log(`  ${f.padEnd(28)} ${m ? m[1] : 'NO PIN'}`)
    }
    process.exit(0)
}

let version = arg
if (arg === '--keep') {
    const pins = files
        .map(f => (readFileSync(join(STAGES, f), 'utf8').match(FENCE) || [])[1])
        .map(line => (line && line.startsWith(DEP + '#') ? line.slice(DEP.length + 1) : null))
        .filter(v => v && /^v\d+\.\d+\.\d+$/.test(v))
    if (!pins.length) {
        console.error('No stage carries a usable pin to copy')
        process.exit(1)
    }
    version = pins.sort()[pins.length - 1]
}

if (!/^v\d+\.\d+\.\d+$/.test(version)) {
    console.error(`Expected a release tag like v9.0.3, got "${version}"`)
    process.exit(1)
}

for (const f of files) {
    const path = join(STAGES, f)
    let src = readFileSync(path, 'utf8')
    const line = `${DEP}#${version}`
    if (FENCE.test(src)) {
        src = src.replace(FENCE, `\`\`\`package\n${line}\n\`\`\`\n\n`)
    } else {
        // Sits with the other directives, above the template.
        const anchor = src.indexOf('```validation.global')
        if (anchor < 0) throw new Error(`${f}: no validation.global fence to anchor to`)
        src = src.slice(0, anchor) + `\`\`\`package\n${line}\n\`\`\`\n\n` + src.slice(anchor)
    }
    writeFileSync(path, src)
    console.log(`  ${f.padEnd(28)} pinned to ${version}`)
}

// The library prints this under the stage prompt, so the running build can be read
// off the screen. It has to say the same thing the tutorials pin.
const LIB = join(process.cwd(), 'custom.ts')
const lib = readFileSync(LIB, 'utf8')
const marker = /const LIBRARY_VERSION = "v\d+\.\d+\.\d+"/
if (!marker.test(lib)) {
    console.error('custom.ts has no LIBRARY_VERSION constant to update')
    process.exit(1)
}
writeFileSync(LIB, lib.replace(marker, `const LIBRARY_VERSION = "${version}"`))
console.log(`  custom.ts                    LIBRARY_VERSION = ${version}`)
