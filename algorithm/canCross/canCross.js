//测试数据
var stones = [0, 1, 3, 5, 6, 8, 12, 17]
// var stones = [0, 1, 2, 3, 4, 8, 9, 11];
var k = 0;
var start = stones[0];
var end = stones[stones.length - 1]
var canCross = function (stones) {
    if (k == 0) {
        if (stones.indexOf(start + 1) < 0) {
            return false
        } else {
            if (stones.indexOf(start + k + 1) > 0 && stones.indexOf(start + k + 1) > k) {
                k = stones.indexOf(start + k + 1);
                start = stones[k]
                return canCross(stones);
            }
        }
    } else {
        if (stones.indexOf(start + k - 1) < 0 && stones.indexOf(start + k) < 0 && stones.indexOf(start + 1) < 0) {
            if (end == start) {
                return true
            } else {
                return false;
            }
        } else {
            if (stones.indexOf(start + k - 1) > 0 && stones.indexOf(start + k - 1) > k) {
                k = stones.indexOf(start + k - 1);
                start = stones[k];
                return canCross(stones);
            } else if (stones.indexOf(start + k) > 0 && stones.indexOf(start + k) > k) {
                k = stones.indexOf(start + k);
                start = stones[k];
                return canCross(stones);
            } else if (stones.indexOf(start + k + 1) > 0 && stones.indexOf(start + k + 1) > k) {
                k = stones.indexOf(start + k + 1);
                start = stones[k]
                return canCross(stones);
            } else {
                return false
            }
        }
    }
};
console.log(canCross(stones));