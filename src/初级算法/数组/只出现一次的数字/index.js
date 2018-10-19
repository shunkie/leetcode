/**
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = nums => {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}

module.exports = singleNumber
