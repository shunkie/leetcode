/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = (str) => {
  return str.split(' ').map(value => {
    return value.split('').reverse().join('')
  }).join(' ')
}

module.exports = reverseWords
