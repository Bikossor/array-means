<div align="center">
  <h1>array-means</h1>
  <p>Calculates various averages of an array</p>
  <!-- Badges -->
  <a href="https://www.codacy.com/app/Bikossor/array-means?utm_source=github.com&utm_medium=referral&utm_content=Bikossor/array-means&utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/57813ca8a5d943ecabbe8decc36d04da" />
  </a>
  <a href="https://github.com/Bikossor/array-means/actions/workflows/node.js.yml">
    <img src="https://github.com/Bikossor/Rudus/actions/workflows/node.js.yml/badge.svg" />
  </a>
  <a href="https://codecov.io/gh/Bikossor/array-means">
    <img src="https://codecov.io/gh/Bikossor/array-means/branch/develop/graph/badge.svg" />
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/array-means.svg" />
  <img src="https://img.shields.io/npm/dm/array-means.svg" />
  <img src="https://img.shields.io/github/issues/bikossor/array-means.svg" />
  <img src="https://img.shields.io/github/issues-closed/bikossor/array-means.svg" />
  <img src="https://img.shields.io/github/license/bikossor/array-means.svg" />
</div>

## Installing

### Node.js environment

```
npm i array-means --save
```

### Browser environment

Download the latest version of array-means [here](https://github.com/Bikossor/array-means/releases/latest).

## Usage

### Node.js environment

```javascript
const {
  arithmetic,
  cubic,
  geometric,
  harmonic,
  quadratic,
  median,
} = require("array-means");
```

### Arithmetic mean
[Wikipedia article of Arithmetic mean](https://en.wikipedia.org/wiki/Arithmetic_mean)
```javascript
var amean = arithmetic([10, 25, 50]);
// amean => 28.333333333333332
```

### Quadratic mean
[Wikipedia article of Quadratic mean](https://en.wikipedia.org/wiki/Quadratic_mean)
```javascript
var qmean = quadratic([10, 25, 50]);
// qmean => 32.78719262151
```

### Harmonic mean
[Wikipedia article of Harmonic mean](https://en.wikipedia.org/wiki/Harmonic_mean)
```javascript
var hmean = harmonic([10, 25, 50]);
// hmean => 18.75
```

### Geometric mean
[Wikipedia article of Geometric mean](https://en.wikipedia.org/wiki/Geometric_mean)
```javascript
var gmean = geometric([10, 25, 50]);
// gmean => 23.20794417
```

### Cubic mean
[Wikipedia article of Cubic mean](https://en.wikipedia.org/wiki/Cubic_mean)
```javascript
var cmean = cubic([10, 25, 50]);
// cmean => 36.14150411
```

### Median
[Wikipedia article of Median](https://en.wikipedia.org/wiki/Median)
```javascript
var medianResult = median([10, 25, 50]);
// medianResult => 25
```

## Benchmark

| Algorithm  | Operations per second | Tolerance | Number of runs  |
| :--------- | :-------------------- | :-------- | :-------------- |
| arithmetic | 57,677,242 ops/sec    | ±0.09%    | 92 runs sampled |
| quadratic  | 31,527,477 ops/sec    | ±0.04%    | 96 runs sampled |
| harmonic   | 107,957,742 ops/sec   | ±0.39%    | 95 runs sampled |
| geometric  | 122,245,766 ops/sec   | ±0.22%    | 95 runs sampled |
| cubic      | 106,860,481 ops/sec   | ±0.44%    | 92 runs sampled |

Tested with the benchmark suite inside the package on a PC with an Intel Core i7-4790K @ 4.40 GHz using Node.js v10.13.0.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/array-means/tags) on this repository.

## Authors

- [Bikossor](https://github.com/Bikossor)
- [Dergeraetwirdniemuede](https://github.com/Dergeraetwirdniemuede)

See also the list of [contributors](https://github.com/bikossor/array-means/contributors) who participated in this project.

## License

This project is licensed under the GPL-3.0 License - see [here](LICENSE) for more details.
