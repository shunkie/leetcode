/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const containsDuplicate = nums => {
  nums.sort((a, b) => a - b) // in-place
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true
    }
  }
  return false
}
