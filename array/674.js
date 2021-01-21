var findLengthOfLCIS = function(nums) {
  if (nums.length <= 1) return nums.length
  // 记录递增数值
  let count = 1;
  // 记录递增的最大值
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) count++;
    else count = 1
    max = Math.max(max, count)
  }

  return max
};

const arr = [1, 3, 5, 4, 7]
const log = console.log
log(findLengthOfLCIS(arr))