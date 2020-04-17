/**
 * @name array-means
 * @version 1.7.1
 * @description Calculates various averages of an array
 * @author André Lichtenthäler
 * @license GPL-3.0
*/
declare class arrayMeans {
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    static a(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the arithmetic mean is calculated on
     * @returns {number} The arithmetic mean
    */
    static arithmetic(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    static q(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the quadratic mean is calculated on
     * @returns {number} The quadratic mean
    */
    static quadratic(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    static h(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the harmonic mean is calculated on
     * @returns {number} The harmonic mean
    */
    static harmonic(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    static g(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the geometric mean is calculated on
     * @returns {number} The geometric mean
    */
    static geometric(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    static c(arr: number[]): number;
    /**
     * @param {number[]} arr - The array of which the cubic mean is calculated on
     * @returns {number} The cubic mean
    */
    static cubic(arr: number[]): number;
}
