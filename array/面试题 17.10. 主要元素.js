// 1. 记录每个数字出现的次数，然后返回最大值
// 2. 记录一个数字只要超过length的一半即可

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj = {}
  const length = nums.length
  let res = length === 1 ? nums[length - 1] : -1
  for (let i = 0; i < length; i++) {
    const item = nums[i]
    if (obj[item]) {
      obj[item]++
      if (obj[item] > length / 2) return item
    } else {
      obj[item] = 1
    }
  }  
  return res
};
const result = majorityElement([1])
console.log(result)