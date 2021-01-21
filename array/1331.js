/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let k = i; k < arr.length; k++) {
  //     if (arr[i] > arr[k]) {
  //       const temp = arr[k]
  //       arr[k] = arr[i]
  //       arr[i] = temp
  //     }
  //   }
  // }
  // 需要对比排序前后的位置
  const sortedArr = ([...new Set(arr)]).sort((a, b) => a - b)
  const map = {}
  let index = 1
  for (let i = 0; i < sortedArr.length; i++) {
    if (i > 0 && sortedArr[i] !== sortedArr[i + 1]) {
      map[sortedArr[i]] = index
      index++
    }
    if (i === 0) {
      map[sortedArr[i]] = index
      index++
    }
  }
  let indexList = [] // 记录索引
  for (let i = 0; i < arr.length; i++) {
    indexList.push(map[arr[i]])
  }
  return indexList
};

const res = arrayRankTransform([40,10,20,30])
console.log(res)