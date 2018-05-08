/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//递归算法
var uniquePaths = function (m, n) {
    // console.log(m,n)
    if (m == 0 || n == 0) {
        return 0;
    }
    if (m == 1 || n == 1) {
        return 1
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};
console.log(uniquePaths(7,5))