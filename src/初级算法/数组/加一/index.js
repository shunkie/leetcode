/**
 * @param {number[]} digits
 * @returns {number[]}
 */
const plusOne = digits => {
  let carry = 0
  const len = digits.length
  if (digits[len - 1] === 9) {
    digits[len - 1] = 0
    carry = 1
    for (let i = len - 2; i >= 0; i--) {
      if (digits[i] + carry === 10) {
        digits[i] = 0
        carry = 1
      } else {
        digits[i] += carry
        carry = 0
        break
      }
    }
    if (carry === 1) {
      digits.unshift(carry)
    }
    return digits
  } else {
    digits[len - 1] += 1
    carry = 0
    return digits
  }
}

module.exports = plusOne
