const { test } = require('ava')
const removeElement = require('./index')

test('should return 2 when nums is [3, 2, 2, 3] and val is 3', t => {
  const nums = [3, 2, 2, 3]
  t.is(removeElement(nums, 3), 2)
  t.deepEqual(nums, [2, 2])
})
