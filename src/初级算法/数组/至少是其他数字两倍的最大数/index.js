/**
 * @param {number[]} nums
 * @returns {number}
 */
const dominantIndex = nums => {
  const len = nums.length
  if (len === 1) {
    return 0
  }
  let max = nums[0]
  let index = 0
  for (let i = 0; i < len; i++) {
    if (max < nums[i]) {
      max = nums[i]
      index = i
    }
  }
  for (let j = 0; j < len; j++) {
    if (nums[j] !== max && max < 2 * nums[j]) {
      return -1
    }
  }
  return index
}

module.exports = dominantIndex
