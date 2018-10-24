/**
 * @param {number[]} nums
 * @returns {void}
 */
const selectionSort = nums => {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    // [i, n)中最小值的索引
    let minIndex = i
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    temp = nums[i]
    nums[i] = nums[minIndex]
    nums[minIndex] = temp
  }
}

module.exports = selectionSort
