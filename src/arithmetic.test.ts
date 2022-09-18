import { arithmetic } from "./arithmetic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const expectedResult = 511.7;

describe("Arithmetic mean", () => {
  it("should return the expected result if the specified parameter is valid", () => {
    expect(arithmetic(dummyArray)).toBe(expectedResult);
  });

  it("should return NaN when the specified parameter is invalid", () => {
    expect(
      // @ts-ignore
      arithmetic("Hello World"),
    ).toBe(NaN);
  });
});
