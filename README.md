# [POC] Typescript 5.2 metadata and decorators

## Cons
- It's not support by tsx (because esbuild doesn't support it)
- It's not support by ts-node
- It's not support by ts-node + swc (because swc doesn't support it)
- type: "module" is required in package.json
- types are not well implemented in typescript
- Symbol.metadata is read-only but we need to write it, so we need to use a workaround

## Pros
- It's a standard proposal
- We don't need to use a library to implement it
- We don't need to add `experimentalDecorators` and `emitDecoratorMetadata` in tsconfig.json