# array-means
Calculates various averages of an array

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/57813ca8a5d943ecabbe8decc36d04da)](https://www.codacy.com/app/Bikossor/array-means?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Bikossor/array-means&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/Bikossor/array-means.svg?branch=develop)](https://travis-ci.org/Bikossor/array-means)

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
const arrayMeans = require("array-means");

var amean = arrayMeans.arithmetic([10, 25, 50]);
// amean => 28.333333333333332

var qmean = arrayMeans.quadratic([10, 25, 50]);
// qmean => 32.78719262151

var hmean = arrayMeans.harmonic([10, 25, 50]);
// hmean => 18.75
```

## Benchmark
| Algorithm | Operations per second | Tolerance | Number of runs |
| :-- | :-- | :-- | :-- |
| arithmetic | 57,677,242 ops/sec | ±0.09% | 92 runs sampled |
| quadratic | 31,527,477 ops/sec | ±0.04% | 96 runs sampled |
| harmonic | 107,957,742 ops/sec | ±0.39% | 95 runs sampled |
| geometric | 122,245,766 ops/sec | ±0.22%| 95 runs sampled |

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