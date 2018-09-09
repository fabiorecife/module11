## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @fabioalmeida/module11
```

## Usage

```js
var Module11 = require('@fabioalmeida/module11')
var module11 = new Module11(2,11)
var cpfDigit1 = module11.checkDigit([6,0,1,6,1,4,7,9,0])
var cpfDigit2 = module11.checkDigit([6,0,1,6,1,4,7,9,0, cpfDigit1])
```
