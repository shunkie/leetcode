const { test } = require('ava')
const removeDuplicate = require('./index')

test('should return 2 when nums is [1, 1, 2]', t => {
  t.is(removeDuplicate([1, 1, 2]), 2)
})

test('should return 5 when nums is [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', t => {
  t.is(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
})
