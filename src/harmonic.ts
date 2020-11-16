/**
 * @param {number[]} arr - The array of which the harmonic mean is calculated on
 * @returns {number} The harmonic mean
 */
export const harmonic = (arr: number[]): number => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument is not an array!");
  }

  var result = arr.reduce(function (a, b) {
    return a + 1 / b;
  }, 0);

  return arr.length / result;
};
