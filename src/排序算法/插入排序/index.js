/**
 * @param {number[]} nums
 * @returns {void}
 */
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        temp = nums[j]
        nums[j] = nums[j - 1]
        nums[j - 1] = temp
      } else {
        break
      }
    }
  }
}

module.exports = insertionSort
