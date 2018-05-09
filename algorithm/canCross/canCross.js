/**
 * @param {string} s
 * @return {number}
 */
var s = 'loveolev';
// var s = "loveleetcode";
var sarr = s.split("");
var length = sarr.length;
var firstUniqChar = function (s) {
    for (var i = 0; i < length; i++) {
        console.log(sarr.length, length)
        
        var arr = sarr.shift();
        if (sarr.indexOf(arr) <= 0) {
            return i
        }
    };
};
console.log(firstUniqChar(s));