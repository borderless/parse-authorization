# Parse Authorization

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Parse the HTTP authorization header.

## Installation

```sh
npm install @borderless/parse-authorization --save
```

## Usage

```js
import { basic, bearer } from "@borderless/parse-authorization";

expect(bearer("Bearer 123")).toEqual("123");
expect(basic("Basic dGVzdDoxMjPCow==")).toEqual(["test", "123£"]);
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@borderless/parse-authorization.svg?style=flat
[npm-url]: https://npmjs.org/package/@borderless/parse-authorization
[downloads-image]: https://img.shields.io/npm/dm/@borderless/parse-authorization.svg?style=flat
[downloads-url]: https://npmjs.org/package/@borderless/parse-authorization
[travis-image]: https://img.shields.io/travis/BorderlessLabs/parse-authorization.svg?style=flat
[travis-url]: https://travis-ci.org/BorderlessLabs/parse-authorization
[coveralls-image]: https://img.shields.io/coveralls/BorderlessLabs/parse-authorization.svg?style=flat
[coveralls-url]: https://coveralls.io/r/BorderlessLabs/parse-authorization?branch=master
