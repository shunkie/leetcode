/**
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
const findTheDifference = (s, t) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res = res ^ s.charCodeAt(i) ^ t.charCodeAt(i)
  }
  res = res ^ t.charCodeAt(t.length - 1)
  return String.fromCharCode(res)
}

module.exports = findTheDifference
