const test = require('ava').default
const removeElement = require('./index')

test('should return 2 when nums is [3, 2, 2, 3] and val is 3', t => {
  const nums = [3, 2, 2, 3]
  const val = 3
  const ret = removeElement(nums, val)
  t.is(ret, 2)
  nums.length = ret
  t.deepEqual(nums, [2, 2])
})

test('should return 1 when nums is [1, 2, 2] and val is 2', t => {
  const nums = [1, 2, 2]
  const val = 2
  const ret = removeElement(nums, val)
  t.is(ret, 1)
  nums.length = ret
  t.deepEqual(nums, [1])
})
