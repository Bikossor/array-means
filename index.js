/**
 * @name array-means
 * @version 1.4.1
 * @description Calculates various averages of an array
 * @author André Lichtenthäler
 * @license GPL-3.0
 */
var arrayMeans = {
    /**
     * @param {Array<Number>} arr - The array of which the arithmetic mean is calculated on
     * @returns {Number} The arithmetic mean
     */
    arithmetic: function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + b;
        }, 0);

        return result / arr.length;
    },
    /**
     * @param {Array<Number>} arr - The array of which the quadratic mean is calculated on
     * @returns {Number} The quadratic mean
     */
    quadratic: function(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + Math.pow(b, 2);
        }, 0);

        return Math.sqrt(result / arr.length);
    },
    /**
     * @param {Array<Number>} arr - The array of which the harmonic mean is calculated on
     * @returns {Number} The harmonic mean
     */
    harmonic: function(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + (1 / b);
        }, 0);

        return arr.length / result;
    },
    geometric: function(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a *= b;
        });

        return Math.pow(result, 1 / arr.length);
    },
    /**
     * @param {Array<Number>} arr - The array of which the cubic mean is calculated on
     * @returns {Number} The cubic mean
     */
    cubic: function(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + Math.pow(b, 3);
        }, 0);

        return Math.pow(result / arr.length, 1 / 3);
    },
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayMeans;
}