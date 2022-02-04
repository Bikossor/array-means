const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];
const {
  arithmetic,
  cubic,
  geometric,
  harmonic,
  quadratic,
  median,
} = require("../dist/index.js");
const benchmark = require("benchmark");
const suite = new benchmark.Suite();

suite
  .add("arithmetic", function () {
    arithmetic(dummyArray);
  })
  .add("quadratic", function () {
    quadratic(dummyArray);
  })
  .add("harmonic", function () {
    harmonic(dummyArray);
  })
  .add("geometric", function () {
    geometric(dummyArray);
  })
  .add("cubic", function () {
    cubic(dummyArray);
  })
  .add("median", function () {
    median(dummyArray);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .run({
    async: true,
  });
