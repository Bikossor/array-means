/**
 * @param {number[]} arr - The array of which the harmonic mean is calculated on
 * @returns {number} The harmonic mean
 */
export const harmonic = (arr: number[]): number => {
  return Array.isArray(arr) ? arr.length / arr.reduce((a, b) => a + 1 / b, 0) : NaN;
};
