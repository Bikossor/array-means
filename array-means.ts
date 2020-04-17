/**
 * @name array-means
 * @version 1.7.1
 * @description Calculates various averages of an array
 * @author André Lichtenthäler
 * @license GPL-3.0
*/
class arrayMeans {
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    static a(arr: number[]): number {
        return this.arithmetic(arr);
    }
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    static arithmetic(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + b;
        }, 0);

        return result / arr.length;
    }
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    static q(arr: number[]): number {
        return this.quadratic(arr);
    }
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    static quadratic(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + Math.pow(b, 2);
        }, 0);

        return Math.sqrt(result / arr.length);
    }
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    static h(arr: number[]): number {
        return this.harmonic(arr);
    }
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    static harmonic(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + (1 / b);
        }, 0);

        return arr.length / result;
    }
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    static g(arr: number[]): number {
        return this.geometric(arr);
    }
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    static geometric(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a *= b;
        });

        return Math.pow(result, 1 / arr.length);
    }
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    static c(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + Math.pow(b, 3);
        }, 0);

        return Math.pow(result / arr.length, 1 / 3);
    }
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    static cubic(arr: number[]): number {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = arr.reduce(function(a, b) {
            return a + Math.pow(b, 3);
        }, 0);

        return Math.pow(result / arr.length, 1 / 3);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayMeans;
}