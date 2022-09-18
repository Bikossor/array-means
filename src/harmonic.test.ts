import { harmonic } from "./harmonic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const harmonicResult = 200.6986989307875;

describe("Harmonic tests", () => {
  test(`Harmonic mean of "dummyArray" should be "${harmonicResult}"`, () => {
    expect(harmonic(dummyArray)).toBe(harmonicResult);
  });

  test(`Harmonic mean of an string should throw`, () => {
    expect(
      // @ts-ignore
      harmonic("Hello World"),
    ).toBe(NaN);
  });
});
