import { arithmetic, cubic, geometric, harmonic, quadratic, median } from "../src";
import benchmark from "benchmark";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const suite = new benchmark.Suite();

suite
  .add("arithmetic", () => arithmetic(dummyArray))
  .add("quadratic", () => quadratic(dummyArray))
  .add("harmonic", () => harmonic(dummyArray))
  .add("geometric", () => geometric(dummyArray))
  .add("cubic", () => cubic(dummyArray))
  .add("median", () => median(dummyArray))
  .on("cycle", (event: { target: any }) => {
    console.log(String(event.target));
  })
  .run({
    async: true,
  });
