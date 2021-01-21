/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const n = grid[0].length
  // 取巧，扁平化
  const newGrid = grid.flat()
  for (let i = 0; i < k; i++) {
    newGrid.unshift(newGrid.pop())
  }
  const len = newGrid.length
  const divide = len % n === 0 ? len / n : Math.floor( (len / n) + 1 )
  const newGrid1 = []
  for (let i = 0; i < divide; i++) {
    newGrid1.push(newGrid.slice(i*n, i * n + n))
  }
  return newGrid1
};

const grid = [[1,2,3],[4,5,6],[7,8,9]]
const k = 1

const res = shiftGrid(grid, k)
console.log(res, 'res')