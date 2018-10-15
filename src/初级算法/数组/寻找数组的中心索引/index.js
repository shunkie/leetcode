/**
 * @param {number[]} nums
 * @returns {number}
 */
const pivotIndex = nums => {
  const len = nums.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  let left = 0
  let right = sum - left - nums[0]
  if (left === right) {
    return 0
  }
  for (let j = 1; j < len; j++) {
    left += nums[j - 1]
    right = sum - left - nums[j]
    if (left === right) {
      return j
    }
  }
  return -1
}

module.exports = pivotIndex
