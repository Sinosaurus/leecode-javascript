/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  const length = arr.length
  if (length < 3) return false;
  for (let i = 0; i < length - 1; i++) {
    const item1 = arr[i]
    const item2 = arr[i + 1]
    const item3 = arr[i + 2]
    if (item1 % 2 !== 0 && item2 % 2 !== 0 && item3 % 2 !== 0) {
      return true
    }
    if (i + 2 >= length - 1) break;
  }
  return false
}; 

const r = threeConsecutiveOdds([1,2,1,1])
console.log(r)