/**
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
const removeElement = (nums, val) => {
  const len = nums.length
  if (len === 0) {
    return
  }
  // nums[0] -> nums[i]为非val数组
  let i = -1
  for (let j = 0; j < len; j++) {
    if (nums[j] !== val) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

module.exports = removeElement
