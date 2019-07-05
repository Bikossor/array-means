const dummyArray = [140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710, 549, 879];
const arrayMeans = require('../dist/array-means');
const benchmark = require('benchmark');
const suite = new benchmark.Suite;

suite
    .add('arithmetic', function () {
        arrayMeans.arithmetic(dummyArray);
    })
    .add('arithmetic shortcut', function () {
        arrayMeans.a(dummyArray);
    })
    .add('quadratic', function () {
        arrayMeans.quadratic(dummyArray);
    })
    .add('quadratic shortcut', function () {
        arrayMeans.q(dummyArray);
    })
    .add('harmonic', function () {
        arrayMeans.harmonic(dummyArray);
    })
    .add('harmonic', function () {
        arrayMeans.h(dummyArray);
    })
    .add('geometric', function () {
        arrayMeans.geometric(dummyArray);
    })
    .add('geometric', function () {
        arrayMeans.g(dummyArray);
    })
    .add('cubic', function () {
        arrayMeans.cubic(dummyArray);
    })
    .add('cubic', function () {
        arrayMeans.c(dummyArray);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .run({
        'async': true
    });