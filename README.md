# Ready Player One Characters
[![travis build](https://img.shields.io/travis/ercpereda/rp1-characters.svg?style=flat-square)](https://travis-ci.org/ercpereda/rp1-characters/)
[![codecov coverage](https://img.shields.io/codecov/c/github/ercpereda/rp1-characters.svg?style=flat-square)](https://codecov.io/gh/ercpereda/rp1-characters)
[![version](https://img.shields.io/npm/v/rp1-characters.svg?style=flat-square)](http://npm.im/rp1-characters)
[![downloads](https://img.shields.io/npm/dt/rp1-characters.svg?style=flat-square)](http://npm-stat.com/charts.html?package=rp1-characters)
[![MIT license](https://img.shields.io/npm/l/rp1-characters.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Delivers the main characters from the Ernest Cline's book Ready Player One.

## Instalation

### Local

```bash
$ npm install rp1-characters
```
### CDN

```html
<html>
<head>
......
</head>
<body>
.......
<script src="https://npmcdn.com/rp1-characters/dist/index.umd.js"></script>
</body>
</html>
```

## Usage

### Local

```node
var rp1Characters = require('rp1-characters');
console.log(rp1Characters.all); // list all the characters
console.log(rp1Characters.random()); // get one random character
console.log(rp1Characters.random(3)); // get 3 random characters
```

### CDN
```html
<script>
  console.log(rp1Characters.all); // list all the characters
  console.log(rp1Characters.random()); // get one random character
  console.log(rp1Characters.random(3)); // get 3 random characters
</script>
```
