"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} arr - The array of which the quadratic mean is calculated on
 * @returns {number} The quadratic mean
 */
exports.quadratic = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument is not an array!");
    }
    var result = arr.reduce(function (a, b) {
        return a + Math.pow(b, 2);
    }, 0);
    return Math.sqrt(result / arr.length);
};
