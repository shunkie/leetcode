const { test } = require('ava')
const selectionSort = require('./index')

test('should return [1, 2, 3] when nums is [3, 2, 1]', t => {
  const nums = [3, 2, 1]
  selectionSort(nums)
  t.deepEqual(nums, [1, 2, 3])
})

test('should return [1, 2, 3, 4, 5, 6, 7, 8, 9] when nums is [9, 8, 7, 6, 5, 4, 3, 2, 1]', t => {
  const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
  selectionSort(nums)
  t.deepEqual(nums, [1, 2, 3, 4, 5, 6, 7, 8, 9])
})
