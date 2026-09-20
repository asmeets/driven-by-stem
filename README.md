## Quick Links

- 🎮 **Play the Game:** https://arcade.makecode.com/--skillmap#github:asmeets/driven-by-stem/skillmap
- 📖 **Project Documentation:** https://asmeets.github.io/driven-by-stem/

---

For complete project overview, learning goals, facilitator notes, and contribution guidelines, visit the [project website](https://asmeets.github.io/driven-by-stem/).

## Editing a tutorial

MakeCode serves a tutorial as a single bundle per URL, holding the markdown **and**
this repo's library files together. It builds that bundle from the repo's latest
release the first time a path is requested, then caches it. Two consequences, both
of which have bitten this project:

1. **Cutting a release does not refresh an existing path.** The only reliable way
   to make learners see an edit is to give the file a **new name**, which is why
   every tutorial carries a `-v<N>` suffix.
2. **The editor resolves the library separately** from that bundle, through its own
   cached lookup of "latest release". A project created minutes after a release can
   still be built against the previous one: new instructions, old behavior, and
   nothing on screen to say so. Every tutorial therefore pins the exact release in
   a ` ```package ` fence, and the library prints that version under the stage
   prompt so the running build can be read off the screen.

After changing a tutorial's content, bump it:

```
node tools/bump-tutorial.mjs 2-design      # one stage
node tools/bump-tutorial.mjs --all         # all six
```

That renames the file with `git mv` and updates the two other places the old
name appears: the `url:` line in every skillmap, and the `files` array in
`pxt.json`. Editing those by hand is where this goes wrong, because missing one
leaves a node pointing at a file that no longer exists.

Then check the repo before pushing:

```
node tools/check-content.mjs
```

It verifies that every skillmap node resolves to a real file, that `pxt.json`
agrees with what is on disk, that step numbering is contiguous and within the
6 to 10 budget, that no tutorial binds `controller.A` (the library reserves it
for start-line staging), that the embedded `assetjson` payload is identical
across tutorials, that every stage tutorial carries its version suffix, and that
all six stages pin the same library version as the library itself reports.

## Cutting a release

Order matters. The pin has to name the tag you are about to create.

```
node tools/bump-tutorial.mjs --all        # 1. new filenames for changed stages
node tools/pin-version.mjs v9.1.0         # 2. pin them, and custom.ts, to the tag
node tools/check-content.mjs              # 3. everything agrees
```

Commit, merge, then create the GitHub release tagged **exactly** `v9.1.0`. A
different tag leaves every tutorial pinned to a release that does not exist.

Then confirm what MakeCode is actually serving, before anyone opens the map:

```
node tools/check-release.mjs
```

It fetches each stage as the editor would and reports the release the bundle was
built from, the version the tutorial pins, and the version the library reports.
All three have to agree. If a stage comes back stale, rotate the filenames and
release again: a cached path cannot be cleared any other way.
