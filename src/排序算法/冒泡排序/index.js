/**
 * @param {number[]} nums
 * @returns {void} 
 */
const bubbleSort = nums => {
  let temp
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
}

module.exports = bubbleSort
