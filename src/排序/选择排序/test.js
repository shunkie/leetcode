const { test } = require('ava')
const selectionSort = require('./index')

test('should return [1, 2, 3] when nums is [3, 2, 1]', t => {
  const nums = [3, 2, 1]
  selectionSort(nums)
  t.deepEqual(nums, [1, 2, 3])
})
