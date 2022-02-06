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

## Installation

For `Node.js` run the following command:

```sh
npm i array-means
```

For `Yarn` run the following command:

```sh
yarn add array-means
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

## Benchmarks

| Algorithm  | Operations per second | Tolerance |
| :--------- | :-------------------- | :-------- |
| arithmetic | 90,273,949 ops/sec    | ±0.40%    |
| quadratic  | 45,955,194 ops/sec    | ±1.35%    |
| harmonic   | 142,704,156 ops/sec   | ±0.33%    |
| geometric  | 116,823,047 ops/sec   | ±0.20%    |
| cubic      | 786,168 ops/sec       | ±0.12%    |
| median     | 3,392,087 ops/sec     | ±0.21%    |

_Tested on an AMD Ryzen 7 5800X using Node.js v16.13.2 on Windows 10 (21H1)_

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/array-means/tags) on this repository.

## Authors

- [Bikossor](https://github.com/Bikossor)
- [Dergeraetwirdniemuede](https://github.com/Dergeraetwirdniemuede)

See also the list of [contributors](https://github.com/bikossor/array-means/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see [here](LICENSE) for more details.
