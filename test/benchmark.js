const dummyArray = [140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710, 549, 879];
const arrayMeans = require('../index.js');
const benchmark = require('benchmark');
const suite = new benchmark.Suite;

suite.add('arithmetic', function () {
        arrayMeans.arithmetic(dummyArray);
    })
    .add('quadratic', function () {
        arrayMeans.quadratic(dummyArray);
    })
    .add('harmonic', function () {
        arrayMeans.harmonic(dummyArray);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .run({
        'async': true
    });