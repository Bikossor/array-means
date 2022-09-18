import { arithmetic } from "./arithmetic";

const dummyArray = [
  140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710,
  549, 879,
];

const arithmeticResult = 511.7;

describe("Arithmetic tests", () => {
  test(`Arithmetic mean of "dummyArray" should be "${arithmeticResult}"`, () => {
    expect(arithmetic(dummyArray)).toBe(arithmeticResult);
  });

  test(`Arithmetic mean of an string should throw`, () => {
    expect(
      // @ts-ignore
      arithmetic("Hello World"),
    ).toBe(NaN);
  });
});
