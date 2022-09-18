import { quadratic } from "./quadratic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const quadraticResult = 589.5979138362007;

describe("Quadratic tests", () => {
  test(`Quadratic mean of "dummyArray" should be "${quadraticResult}"`, () => {
    expect(quadratic(dummyArray)).toBe(quadraticResult);
  });

  test(`Quadratic mean of an string should throw`, () => {
    expect(
      // @ts-ignore
      quadratic("Hello World"),
    ).toBe(NaN);
  });
});
