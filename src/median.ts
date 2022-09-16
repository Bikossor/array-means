const getMiddleValue = (middleIndex: number, sorted: number[]) =>
  middleIndex % 1
    ? sorted[middleIndex - 0.5]
    : (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;

/**
 * @param {number[]} arr - The array of which the median is calculated on
 * @returns {number} The median
 */
export const median = (arr: number[]): number => {
  const middleIndex = arr.length / 2;

  return Array.isArray(arr)
    ? getMiddleValue(
        middleIndex,
        [...arr].sort((a, b) => a - b),
      )
    : NaN;
};
