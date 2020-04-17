"use strict";
/**
 * @name array-means
 * @version 1.7.0
 * @description Calculates various averages of an array
 * @author André Lichtenthäler
 * @license GPL-3.0
*/
var arrayMeans = /** @class */ (function () {
    function arrayMeans() {
    }
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    arrayMeans.a = function (arr) {
        return this.arithmetic(arr);
    };
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    arrayMeans.arithmetic = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a + b;
        }, 0);
        return result / arr.length;
    };
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    arrayMeans.q = function (arr) {
        return this.quadratic(arr);
    };
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    arrayMeans.quadratic = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a + Math.pow(b, 2);
        }, 0);
        return Math.sqrt(result / arr.length);
    };
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    arrayMeans.h = function (arr) {
        return this.harmonic(arr);
    };
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    arrayMeans.harmonic = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a + (1 / b);
        }, 0);
        return arr.length / result;
    };
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    arrayMeans.g = function (arr) {
        return this.geometric(arr);
    };
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    arrayMeans.geometric = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a *= b;
        });
        return Math.pow(result, 1 / arr.length);
    };
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    arrayMeans.c = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a + Math.pow(b, 3);
        }, 0);
        return Math.pow(result / arr.length, 1 / 3);
    };
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    arrayMeans.cubic = function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }
        var result = arr.reduce(function (a, b) {
            return a + Math.pow(b, 3);
        }, 0);
        return Math.pow(result / arr.length, 1 / 3);
    };
    return arrayMeans;
}());
;
if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayMeans;
}
