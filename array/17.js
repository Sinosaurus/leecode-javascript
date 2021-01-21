// 排列组合
const map = [
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz']
]
const m = new Map(map)
var letterCombinations = function(digits) {
  if (!digits) return []
  // 需要递归
  const res = []
  iterStr(digits, '', 0)
  return res
  function iterStr(str, letter, index) {
    if (str.length === index) return res.push(letter)
    let position = String(str.charAt(index))
    let singleStr = m.get(position)
    for (let i = 0; i < singleStr.length; i++) {
      iterStr(str, letter+singleStr.charAt(i), index+1)
    }
  }
};
const r = letterCombinations('234')
console.log(r)