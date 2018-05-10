/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    return [].concat(...matrix).sort((a, b) => a - b)[k - 1]
};