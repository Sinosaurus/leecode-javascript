var maximumProduct = function (nums) {
  // 最终目的 找出nums中最大的三个数
  /**
   * 1. 找出数组中最大的三个数
   * 2. 当有负数时，必须保证有两个负数
   * 2.1 无负数时，取整数最大三个
   * 2.2 有负数时
   * 2.2.1 负数不到2个 排除
   * 2.2.2 超过2个 需要进行判断处理
   * 
   * ===>
   * 简化思路
   *
   * 1. 有序排序 
   * 2. 同时求最开始的值，跟最后的值，这样负数情况也会考虑进去
   * 2.1 nums[0] * nums[1] * nums[nums.length - 1] === --得正
   * 2.2 nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3] === 最大值
   * 3. 2.1与2.2 进行对比 取最大值即可 
   */
  // 1. 双层for循环依次记录下来
  // 2. 队列
  const newList = nums.sort((a, b) => a-b)
  console.log(newList)
  


};

const v = maximumProduct([-2, 0, -4, 8, 9])
console.log(v)