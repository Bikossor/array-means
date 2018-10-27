var arrayMeans = {
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
    quadratic: function(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument is not an array!");
        }

        var result = 0;

        arr.forEach(function (e) {
            result += Math.pow(e, 2);
        });

        return Math.sqrt(result / arr.length);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = arrayMeans;
}