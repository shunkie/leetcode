const { test } = require('ava')
const removeDuplicates = require('./index')

test('should return 5 when nums is [1, 1, 1, 2, 2, 3]', t => {
  const nums = [1, 1, 1, 2, 2, 3]
  const ret = removeDuplicates(nums)
  t.is(ret, 5)
  nums.length = ret
  t.deepEqual(nums, [1, 1, 2, 2, 3])
})

test('should return 7 when nums is [0, 0, 1, 1, 1, 1, 2, 3, 3]', t => {
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
  const ret = removeDuplicates(nums)
  t.is(ret, 7)
  nums.length = 7
  t.deepEqual(nums, [0, 0, 1, 1, 2, 3, 3])
})

test('should return 2 when nums is [1, 1]', t => {
  const nums = [1, 1]
  const ret = removeDuplicates(nums)
  t.is(ret, 2)
  nums.length = 2
  t.deepEqual(nums, [1, 1])
})
