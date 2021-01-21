// @link https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

// 遍历
function forEachEvery(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i
  }
  return nums.length
}

// 二分法
function missingNumber(nums) {
  let i = 0
  let j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    if (nums[m] === m) i = m + 1;
    else j = m -1
  }
  return i
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const log = console.log
log(forEachEvery(arr), missingNumber(arr))
