"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} arr - The array of which the geometric mean is calculated on
 * @returns {number} The geometric mean
 */
exports.geometric = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument is not an array!");
    }
    var result = arr.reduce(function (a, b) {
        return (a *= b);
    });
    return Math.pow(result, 1 / arr.length);
};
