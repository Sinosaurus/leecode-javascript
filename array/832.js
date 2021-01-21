/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  A.forEach(item => {
    const length = item.length - 1
    for (let i = 0; i <= length / 2; i++) {
      let temp = item[i]
      item[i] = item[length - i] === 1 ? 0 : 1
      item[length - i] = temp === 1 ? 0 : 1
    }
  })
  return A
  // return A.map(item => item.reverse()).map(item => item.map(val => (val = val === 1 ? 0 : 1)))
};
const result = flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
console.log(result)