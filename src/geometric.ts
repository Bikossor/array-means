/**
 * @param {number[]} arr - The array of which the geometric mean is calculated on
 * @returns {number} The geometric mean
 */
export const geometric = (arr: number[]): number => {
  return Array.isArray(arr)
    ? Math.pow(
        arr.reduce((a, b) => (a *= b)),
        1 / arr.length,
      )
    : NaN;
};
