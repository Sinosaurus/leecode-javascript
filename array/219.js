/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // 目前的思路想通过计数来确定 但就需要重复处理，不合理。 按目前的形式应该是一次遍历即可
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]

    if (map[item]) {
      map[item].push(i)
      // 此处有问题，需要排序
      for (let j = 0; j < map[item].length; j ++) {
        // 计算差
        const val1 = map[item][j]
        const val2 = map[item][j + 1]
        if (val2 - val1 <= k) return true
      }
    } else {
      map[item] = [i]
    }
  }
  return false
};
const r = containsNearbyDuplicate([1,2,3,1,2,3], 2)
console.log(r, 'result')