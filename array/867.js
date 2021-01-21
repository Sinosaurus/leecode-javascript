var transpose = function(A) {
  /**
   * 1. 依据A[0].length 可以确定需要返回的数组长度
   * 2. 
   */
  if (A.length === 0) return []
  const length = A[0].length
  const result = Array.from({ length }, item => [])
  A.forEach(item => {
    item.forEach((v, i) => {
      result[i].push(v)
    })
  })
  return result
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
transpose(arr)