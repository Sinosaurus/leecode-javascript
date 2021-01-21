// TODO: 待定，暂时没能理解，看样子只能自己写了
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const length = arr.length
  for (let i = 1; i <= length; i += 2) {
    for (let j = 0; j + i <= length; j++) {
      for (let k = j; k < j + i; k++) {
        console.log(arr[k])
      }
    }
  }
};
const arr = [1, 4, 2, 5, 3]
sumOddLengthSubarrays(arr)