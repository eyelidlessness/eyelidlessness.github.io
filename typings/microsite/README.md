# `typings/microsite`

This directory and its subdirectories contain copypasta of the build-product typings in `node_modules/microsite` (current at time of writing). Where those typings include imports from relative paths, those paths have been modified to be absolute so they also reference the typings in this directory.

## Rationale

1. I upgraded Node.
2. TypeScript's module resolution behavior changed with no other local changes.
3. I went ahead and updated TypeScript configuration to reflect (I think) current recommended practices for the project.
4. TypeScript (correctly, I believe) determined that `microsite`'s `package.json` `exports` are defined incorrectly.
5. Rather than try to keep patching up `microsite` in hacky ways, I'm taking the current maintenance hit of manually copying the typings and ensuring that they are resolved correctly.
