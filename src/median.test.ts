import { median } from "./median";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const medianResult = 544;

describe("Median tests", () => {
  test(`Median of "dummyArray" should be "${medianResult}"`, () => {
    expect(median(dummyArray)).toBe(medianResult);
  });

  test(`Median of an string should throw`, () => {
    expect(
      // @ts-ignore
      median("Hello World"),
    ).toBe(NaN);
  });
});
