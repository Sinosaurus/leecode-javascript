/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  /**
   * 1. 循环一遍
   * 2. n 找到位置就 n--
   * 2.1 如何找到位置
   * 2.1.1 最起码三个连在一起的必须都是0才有戏
   * 3. 当 n===0 就return true
   */
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // 判断条件怎么写才是重点
    if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
      flowerbed[i] = 1 // 种花
      count++
    }
    if (count >= n) return true
  }
  return count >= n;
};
const result = canPlaceFlowers([1,0,0,0,1], 2)
console.log(result)