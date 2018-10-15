const { test } = require('ava')
const dominantIndex = require('./index')

test('should return 1 when nums is [3, 6, 1, 0]', t => {
  t.is(dominantIndex([3, 6, 1, 0]), 1)
})

test('should return 1 when nums is [1, 2, 3, 4]', t => {
  t.is(dominantIndex([1, 2, 3, 4]), -1)
})
