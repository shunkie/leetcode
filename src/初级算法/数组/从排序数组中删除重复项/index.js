/**
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicate = nums => {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  // nums[0] -> nums[i]为非重复数组
  let i = 0
  for (let j =  1; j < len; j++) {
    if (nums[j] !== nums[i]) {
      i++
      // 指向同一个元素不需要赋值
      if (i !== j) {
        nums[i] = nums[j]
      }
    }
  }
  return i + 1
}

module.exports = removeDuplicate
