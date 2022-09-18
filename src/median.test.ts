import { median } from "./median";

describe("Median mean", () => {
  it("should return the expected result if the specified parameter is valid and has an even length", () => {
    // even amount of elements (20)
    const dummyArray = [
      140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380,
      710, 549, 879,
    ];

    const expectedResult = 544;

    expect(median(dummyArray)).toBe(expectedResult);
  });

  it("should return the expected result if the specified parameter is valid and has an odd length", () => {
    // odd amount of elements (21)
    const dummyArray = [
      140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380,
      710, 549, 879, 33
    ];

    const expectedResult = 539;

    expect(median(dummyArray)).toBe(expectedResult);
  });

  it("should return NaN when the specified parameter is invalid", () => {
    expect(
      // @ts-ignore
      median("Hello World"),
    ).toBe(NaN);
  });
});
