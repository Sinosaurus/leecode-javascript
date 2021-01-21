/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  /**
   * words中的每个单词是不是可以通过chars的每个字符进行组成
   */
  const list = []
  words.forEach(word => {
    const wordList = word.split('')
    let map = {}
    for (let i = 0; i < wordList.length; i++) {
      const item = wordList[i]
      const index = chars.indexOf(item) // 此处需要多判断一步
      if (index === -1) {
        map = {}
        break
      };
      if (map[index] >= 0) {
        // 重复了需要知道还有没有下一个
        let nextIndex = chars.indexOf(item, map[index] + 1)
        // 同时记录最后一次的位置
        map[index] = nextIndex
        if (nextIndex === -1) {
          map = {}
          break
        }
        map[nextIndex] = nextIndex
      } else {
        map[index] = index
      }
    }

    if (Object.keys(map).length) {
      list.push(word)
    }
  })
  return list.join('').length
};

const res = countCharacters(["cat", "bt", "hat", "tree"], "atach")
console.log(res)