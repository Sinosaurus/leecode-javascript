/**
 *  * @param {number[]} nums
 *   * @return {number}
 *    */
var dominantIndex = function (nums) {
  /**
   * 1. 找到最大数 及 索引
   * 2. 最大数除以其他数据 > 2
   * */
  // TODO: 寻找max跟index时，可以融合为1步，减少循环次数
  const max = Math.max(...nums);
  const index = nums.findIndex((item) => item === max);
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i === index) continue;
    const item = nums[i];
    if (max / item < 2) return -1;
  }
  return index;
};

// 方法2
/**
 * 1. 找到最大数，第二大数，
 * 2. 最大数 / 第二大数 > 2 则其他数就都会大
 */
var dominantIndex2 = function (nums) {
	const length = nums.length
  if (length < 1 || length >= 50) {
    return -1;
  }
  if (length == 1) {
    return 0;
  }

  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max1Index = -1;

  for (let i = 0; i < length; i++) {
    const item = nums[i];

    if (item > max1) {
      max2 = max1;
      max1 = item;
      max1Index = i;
    } else {
      if (max2 < item) {
        max2 = item;
      }
    }
  }

  if (max1 / max2 < 2) return -1;
  return max1Index;
};

const res = dominantIndex2([0, 0, 0, 1]);
console.log(res);
