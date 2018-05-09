/**
 * 
 * @param {*} num 
 */
// Math.sqrt()

var isPerfectSquare = function (num) {
    if (num === 1) {
        return true
    }
    for (var i = 0; i <= num / 2; i++) {
        if (i * i == num) {
            return true
        }
    }
    return false
};