# Sensible-Web3

[![npm version](https://img.shields.io/npm/v/@sensible-contract/sensible-web3.svg)](https://www.npmjs.com/package/@sensible-contract/sensible-web3)

This is the Sensible Contract Javascript SDK.

You need to connect a wallet to use this library.

Please read the [documentation][docs] for more and try the [demo][demo].

## Installation

### Node

```bash
npm install @sensible-contract/sensible-web3
```

### Yarn

```bash
yarn add @sensible-contract/sensible-web3
```

### In the Browser

Use the prebuilt `umd/sensible-web3.min.js` , or
build using the repository:

```bash
npm run build
```

Then include `umd/sensible-web3.min.js` in your html file.
This will expose `Web3` on the window object.

Or via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@sensible-contract/sensible-web3@latest/umd/sensible-web3.min.js"></script>
```

UNPKG:

```html
<script src="https://unpkg.com/@sensible-contract/sensible-web3@latest/umd/sensible-web3.min.js"></script>
```

## Usage

```js
// In Node.js
const Web3 = require('@sensible-contract/sensible-web3');

let web3 = new Web3(window.sensilet);
console.log(web3); > {
  sensible: ...,
  utils: ...,
  ...
}
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `web3.js` as follows:

```typescript
import Web3 from "@sensible-contract/sensible-web3";
const web3 = new Web3(window.sensilet);
```

## Documentation

Documentation can be found at [ReadTheDocs][docs].

## Demo 

Some usages can be found at [Demo][demo].

## Building

```bash
npm run build
```

## Testing (mocha)

```bash
npm run test
```

[docs]: https://sensible-web3.readthedocs.io
[demo]: https://demo.sensilet.com
