/**
 * @name array-means
 * @version 1.1.0
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

        var result = 0;

        arr.forEach(function (e) {
            result += e;
        });

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

        var result = 0;

        arr.forEach(function (e) {
            result += Math.pow(e, 2);
        });

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

        var result = 0;

        arr.forEach(function (e) {
            result += 1 / e;
        });

        return arr.length / result;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayMeans;
}