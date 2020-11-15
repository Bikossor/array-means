const arrayMeans = require('../dist/array-means.js');
const dummyArray = [140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710, 549, 879];

const arithmeticResult = 511.7;
const quadraticResult = 589.5979138362007;
const harmonicResult = 200.6986989307875;
const geometricResult = 375.52610369612273;
const cubicResult = 638.3780301575599;

describe("Arithmetic tests", () => {
    test(`Arithmetic mean of "dummyArray" should be "${arithmeticResult}"`, () => {
        expect(
            arrayMeans.arithmetic(dummyArray)
        ).toBe(arithmeticResult);
    });

    test(`Arithmetic mean of an string should throw`, () => {
        expect(() => {
            arrayMeans.arithmetic("Hello World")
        }).toThrow();
    });
});

describe("Quadratic tests", () => {
    test(`Quadratic mean of "dummyArray" should be "${quadraticResult}"`, () => {
        expect(
            arrayMeans.quadratic(dummyArray)
        ).toBe(quadraticResult);
    });

    test(`Quadratic mean of an string should throw`, () => {
        expect(() => {
            arrayMeans.quadratic("Hello World")
        }).toThrow();
    });
});

describe("Harmonic tests", () => {
    test(`Harmonic mean of "dummyArray" should be "${harmonicResult}"`, () => {
        expect(
            arrayMeans.harmonic(dummyArray)
        ).toBe(harmonicResult);
    });

    test(`Harmonic mean of an string should throw`, () => {
        expect(() => {
            arrayMeans.harmonic("Hello World")
        }).toThrow();
    });
});

describe("Geometric tests", () => {
    test(`Geometric mean of "dummyArray" should be "${geometricResult}"`, () => {
        expect(
            arrayMeans.geometric(dummyArray)
        ).toBe(geometricResult);
    });

    test(`Geometric mean of an string should throw`, () => {
        expect(() => {
            arrayMeans.geometric("Hello World")
        }).toThrow();
    });
});

describe("Cubic tests", () => {
    test(`Cubic mean of "dummyArray" should be "${cubicResult}"`, () => {
        expect(
            arrayMeans.cubic(dummyArray)
        ).toBe(cubicResult);
    });

    test(`Cubic mean of an string should throw`, () => {
        expect(() => {
            arrayMeans.cubic("Hello World")
        }).toThrow();
    });
});
