/**
 * @param {number[]} arr - The array of which the arithmetic mean is calculated on
 * @returns {number} The arithmetic mean
 */
export const arithmetic = (arr: number[]): number => {
  return Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) / arr.length : NaN;
};
