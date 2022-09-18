import { harmonic } from "./harmonic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const expectedResult = 200.6986989307875;

describe("Harmonic mean", () => {
  it("should return the expected result if the specified parameter is valid", () => {
    expect(harmonic(dummyArray)).toBe(expectedResult);
  });

  it("should return NaN when the specified parameter is invalid", () => {
    expect(
      // @ts-ignore
      harmonic("Hello World"),
    ).toBe(NaN);
  });
});
