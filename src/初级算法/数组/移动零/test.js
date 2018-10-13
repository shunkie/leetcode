const { test } = require('ava')
const moveZeroes = require('./index')

test('should output [1, 3, 12, 0, 0] when nums is [0, 1, 0, 3, 12]', t => {
  const nums = [0, 1, 0, 3, 12]
  moveZeroes(nums)
  t.deepEqual(nums, [1, 3, 12, 0, 0])
})

test('should output [1, 0, 0] when nums is [0, 0, 1]', t => {
  const nums = [0, 0, 1]
  moveZeroes(nums)
  t.deepEqual(nums, [1, 0, 0])
})
