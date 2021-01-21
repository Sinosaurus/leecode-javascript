/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  /**
   * 找出不连续间的索引，然后生成新的数组，这样判断就方便快捷
   */
  const indexs = []
  for (let i = 0; i < nums.length; i++) {
    // TODO: 会出现最后一个问题
    if (nums[i] + 1 !== nums[i + 1] ) {
      indexs.push(i)
    }
  }
  console.log(indexs)
};

const res = summaryRanges([0,2,3,4,6,8,9])
console.log(res)
