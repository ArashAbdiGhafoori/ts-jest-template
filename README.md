<h1 align="center">
   <b>
        ts-jest template
    </b>
</h1>

<p align="center">A template for ts-jest that works on local unit test and github workflow test.</p>
<br />

<div align="center">


[![build][build-image]](build)
[![coverage:functions][coverage:functions-image]](coverage)
[![coverage:functions][coverage:statements-image]](coverage)
[![coverage:functions][coverage:lines-image]](coverage)
[![coverage:functions][coverage:branches-image]](coverage)
[![License][license-image]][license-url]

[build-image]: https://img.shields.io/github/actions/workflow/status/ArashAbdiGhafoori/ts-jest-template/jest.yml?label=build&branch=main

[coverage:functions-image]: ./coverage/badge-functions.svg
[coverage:statements-image]: ./coverage/badge-statements.svg
[coverage:lines-image]: ./coverage/badge-lines.svg
[coverage:branches-image]: ./coverage/badge-branches.svg

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

</div>

<br />
<br />

## Table of Contents

  - [Packages](#packages)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

<br />

## Packages

This template uses following:
- [typescript](https://www.npmjs.com/package/typescript)
- [jest](https://www.npmjs.com/package/jest)
- [types/jest](https://www.npmjs.com/package/@types/jest) : intellisense support for jest
- [ts-jest](https://www.npmjs.com/package/ts-jest): jest in typescript
- [jest-coverage-badges](https://www.npmjs.com/package/jest-coverage-badges) : generate badges from jest coverage reports

<br />

## Installation

To use it run:

```bash
$ git clone https://github.com/ArashAbdiGhafoori/ts-jest-template <your-directory-name>
```
Move to directory:
```bash
$ cd <your-directory-name>
```
Install requirements:
```bash
$ npm install
```
<br />

## Usage
Run tests by:
```bash
$ npm run test
```

Run coverage by:
```bash
$ npm run test:coverage
```

You can also generate badges by:
```bash
$ npm run test:badges
```
<br />

## License
[MIT](LICENSE)