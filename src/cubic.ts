/**
 * @param {number[]} arr - The array of which the cubic mean is calculated on
 * @returns {number} The cubic mean
 */
export const cubic = (arr: number[]): number => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument is not an array!");
  }

  var result = arr.reduce(function (a, b) {
    return a + Math.pow(b, 3);
  }, 0);

  return Math.pow(result / arr.length, 1 / 3);
};
