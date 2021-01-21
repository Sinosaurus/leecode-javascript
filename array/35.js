/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 二分法
  let left = 0,
    right = nums.length - 1
  let ans = nums.length

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (target <= nums[middle]) {
      ans = middle
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return ans
};

searchInsert([1, 2, 3, 5, 6], 4)