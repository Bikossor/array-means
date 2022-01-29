/**
 * @param {number[]} arr - The array of which the median is calculated on
 * @returns {number} The median
 */
export const median = (arr: number[]): number => {
  const sorted = arr.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  const middleValue = sorted[middle];

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + middleValue) / 2;
  }

  return middleValue;
};
