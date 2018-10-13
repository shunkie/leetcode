/**
 * @param {number[]} nums
 * @returns {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  const len = nums.length
  if (len === 0) {
    return
  }
  // nums[0] -> nums[i]为非0元素数组
  let i = -1
  for (let j = 0; j < len; j++) {
    if (nums[j] !== 0) {
      i++
      nums[i] = nums[j]
    }
  }
  for (let k = i + 1; k < len; k++) {
    nums[k] = 0
  }
}

module.exports = moveZeroes
