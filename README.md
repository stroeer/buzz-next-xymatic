# @xymatic/green-video-player + Next.js + TypeScript + Tailwind CSS

Testing the integration of the `@xymatic/green-video-player` package with Next.js, TypeScript, and Tailwind CSS.

Contact: team buzz

## Getting Started

```shell
# configure npm with get access to the private package. add the node auth token to the .npmrc file
mv .local.npmrc .npmrc
npm install
npm run dev
```

## Current Status

```shell
(node:86197) [DEP_WEBPACK_MODULE_ISSUER] DeprecationWarning: Module.issuer: Use new ModuleGraph API
(Use `node --trace-deprecation ...` to show where the warning was created)
 ⨯ ./node_modules/@xymatic/green-video-player/dist/esm/index.css
Global CSS cannot be imported from within node_modules.
Read more: https://nextjs.org/docs/messages/css-npm
Location: node_modules/@xymatic/green-video-player/dist/esm/index.js

Import trace for requested module:
./node_modules/@xymatic/green-video-player/dist/esm/index.css
./node_modules/@xymatic/green-video-player/dist/esm/index.js
./src/components/VideoPlayer.tsx
```
