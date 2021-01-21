/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  // 初步思路
  /**
   * 1. arr 能生成多少个 三元组
   * 2. 在生成三元组时进行相关判断，同时push到一个新数组中
   */
  const length = arr.length
  const list = []
  for (let i = 0; i < length; i++ ) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[i] - arr[k]) <= c && Math.abs(arr[j] - arr[k]) <= b) {
          list.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  return list.length
};


const res = countGoodTriplets([7,3,7,3,12,1,12,2,3], 5,  8, 1)
console.log(res)