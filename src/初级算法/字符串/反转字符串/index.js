/**
 * @param {string} str
 * @returns {string}
 */
const reverseString = str => {
  const len = str.length
  if (len <= 1) {
    return str
  }
  const arr = str.split('')
  let i = 0
  let j = len - 1
  let temp
  while (i < j) {
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp  
    i++
    j--
  }
  return arr.join('')
}

module.exports = reverseString
