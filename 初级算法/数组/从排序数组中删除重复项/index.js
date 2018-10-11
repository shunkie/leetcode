/**
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicate = (nums) => {
  let len = nums.length
  let num = nums[0]
  for (let i = 1; i < len; i++) {
    if (nums[i] === num) {
      nums.splice(i, 1)
      i--
      len--
    } else {
      num = nums[i]
    }
  }
  return len
}
