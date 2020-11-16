/**
 * @param {number[]} arr - The array of which the arithmetic mean is calculated on
 * @returns {number} The arithmetic mean
 */
export const arithmetic = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Argument is not an array!");
    }
    var result = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return result / arr.length;
};
