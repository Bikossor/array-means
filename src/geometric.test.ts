import { geometric } from "./geometric";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const geometricResult = 375.52610369612273;

describe("Geometric tests", () => {
  test(`Geometric mean of "dummyArray" should be "${geometricResult}"`, () => {
    expect(geometric(dummyArray)).toBe(geometricResult);
  });

  test(`Geometric mean of an string should throw`, () => {
    expect(
      // @ts-ignore
      geometric("Hello World"),
    ).toBe(NaN);
  });
});
