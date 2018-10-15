/**
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicates = nums => {
  const len = nums.length
  if (len <= 2) {
    return len
  }
  // nums[0] -> nums[i]为元素重复不超过两次的数组
  let i = 0
  // count为number[i]出现的次数
  let count = 1
  for (let j = 1; j < len; j++) {
    if (nums[j] === nums[i]) {
      if (count < 2) {
        count++
        i++
        nums[i] = nums[j]
      } else {
        count++
      }
    } else {
      count = 1
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

module.exports = removeDuplicates
