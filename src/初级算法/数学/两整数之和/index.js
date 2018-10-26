/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const getSum = (a, b) => {
  while (a) {
    [a, b] = [(a & b) << 1, a ^ b]
  }
  return b
}

module.exports = getSum
