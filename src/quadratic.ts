/**
 * @param {number[]} arr - The array of which the quadratic mean is calculated on
 * @returns {number} The quadratic mean
 */
export const quadratic = (arr: number[]): number => {
  return Array.isArray(arr)
    ? Math.sqrt(arr.reduce((a, b) => a + Math.pow(b, 2), 0) / arr.length)
    : NaN;
};
