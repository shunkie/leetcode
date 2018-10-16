/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
const addBinary = (a, b) => {
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  let res = ''
  let m, n, sum
  while (i >= 0 || j >= 0) {
    m = i >= 0 ? a[i--] - 0 : 0
    n = j >= 0 ? b[j--] - 0 : 0
    sum = m + n + carry
    res = sum % 2 + res
    carry = Number.parseInt(sum / 2)
  }
  return carry === 1 ? '1' + res : res
}

module.exports = addBinary
