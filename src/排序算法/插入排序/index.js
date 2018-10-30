/**
 * @param {number[]} nums
 * @returns {void}
 */
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    let x = nums[i]
    let j = i - 1
    for (; j >= 0 && nums[j] > x; j--) {
      nums[j + 1] = nums[j]
    }
    nums[j + 1] = x
  }
}

module.exports = insertionSort
