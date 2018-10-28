const arrayMeans = require('../index.js');
const dummyArray = [140, 149, 895, 28, 716, 826, 539, 518, 59, 463, 967, 664, 170, 623, 764, 195, 380, 710, 549, 879];

const arithmeticResult = 511.7;
const quadraticResult = 589.5979138362007;

test(`Arithmetic mean of "dummyArray" should be "${arithmeticResult}"`, () => {
    expect(
        arrayMeans.arithmetic(dummyArray)
    ).toBe(arithmeticResult);
});

test(`Quadratic mean of "dummyArray" should be "${quadraticResult}"`, () => {
    expect(
        arrayMeans.quadratic(dummyArray)
    ).toBe(quadraticResult);
});