/**
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicate = nums => {
  let len = nums.length

  if (len === 0 || len === 1) {
    return len
  }

  // nums[0] -> nums[i]为非重复数组
  let i = 0
  let j = i + 1
  while (j <= len - 1) {
    if (nums[j] !== nums[i]) {
      // 指向同一个元素不需要赋值
      if (i + 1 !== j) {
        nums[i + 1] = nums[j]
      }
      i++
    }
    j++
  }
  return i + 1
}

module.exports = removeDuplicate
