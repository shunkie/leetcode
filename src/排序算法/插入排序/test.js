const test = require('ava').default
const insertionSort = require('./index')

test('should return [1, 2, 3] when nums is [3, 2, 1]', t => {
  const nums = [3, 2, 1]
  insertionSort(nums)
  t.deepEqual(nums, [1, 2, 3])
})
