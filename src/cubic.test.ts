import { cubic } from "./cubic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const cubicResult = 638.3780301575599;

describe("Cubic tests", () => {
  test(`Cubic mean of "dummyArray" should be "${cubicResult}"`, () => {
    expect(cubic(dummyArray)).toBe(cubicResult);
  });

  test(`Cubic mean of an string should throw`, () => {
    expect(
      // @ts-ignore
      cubic("Hello World"),
    ).toBe(NaN);
  });
});
