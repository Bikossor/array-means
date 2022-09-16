/**
 * @param {number[]} arr - The array of which the cubic mean is calculated on
 * @returns {number} The cubic mean
 */
export const cubic = (arr: number[]): number => {
  return Array.isArray(arr)
    ? Math.pow(arr.reduce((a, b) => a + Math.pow(b, 3), 0) / arr.length, 1 / 3)
    : NaN;
};
