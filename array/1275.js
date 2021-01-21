/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  /**
   * 1. 判断对角 水平 垂直 是不是三个一样的
   * 1.1 有 找出谁先
   * 1.2 没有
   * 1.2.1 是不是铺满了
   * 1.2.1.1 是 Draw
   * 1.2.1.2 没有 pending
   */
  // 是不是铺满
  const maxLength = 3 * 3

  const A = []
  const B = []
  moves.forEach((item, index) => {
    if (index % 2 === 0) A.push(item)
    else B.push(item)
  })

  const isA = isSuccess(A)
  const isB = isSuccess(B)
  if (isA) return 'A'
  if (isB) return 'B'

  if (moves.length === 9) return 'Draw'
  else return 'Pending'
};

function isSuccess(type) {
  console.log(type)
  // 需要排序
  const length = type.length
  if (length < 3) return false
  // 紧邻三个依次递增即可
  /**
   * 紧邻三个可能不是递增，有可能乱序，但是三个一起就可以
   * TODO: 目前做的没有考虑到？？？ 此处不知道如何处理较好
   * === 直接排序即可 但是目前排序的依据写不了，这个有些不现实了，需要换个思路
   */

  let count = 1 // 依次递增就++ 不是就置为0 在变化的位置再次计算
  for (let i = 0; i < length - 1; i++){
    console.log(type[i])
    const [firstStart, firstEnd] = type[i] || []
    const [nextStart, nextEnd] = type[i + 1] || []
    if (firstStart === nextStart && (firstEnd + 1) === nextEnd) {
      count++
    } else if (firstEnd === nextEnd && (firstStart + 1) === nextEnd) {
      count++
      // 判断是否对角线 可以使用  firstStart * nextEnd === firstEnd * nextStart
    } else if ((firstStart + 1) === nextStart && (firstEnd + 1) === nextEnd) {
      count++      
    } else {
      count = 1
    }
  }
  return count >= 3
}

const res = tictactoe([[0,0],[1,1]])
console.log(res)