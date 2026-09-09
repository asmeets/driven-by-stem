## Quick Links

- 🎮 **Play the Game:** https://arcade.makecode.com/--skillmap#github:asmeets/driven-by-stem/skillmap
- 📖 **Project Documentation:** https://asmeets.github.io/driven-by-stem/

---

For complete project overview, learning goals, facilitator notes, and contribution guidelines, visit the [project website](https://asmeets.github.io/driven-by-stem/).

## Editing a tutorial

MakeCode caches tutorial markdown by URL. Cutting a new release tag does **not**
clear it. The only reliable way to make learners see an edit is to give the file
a **new name**, which is why every tutorial carries a `-v<N>` suffix.

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
across tutorials, and that every stage tutorial carries its version suffix.
