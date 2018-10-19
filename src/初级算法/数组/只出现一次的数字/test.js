const { test } = require('ava')
const singleNumber = require('./index')

test('should return 1 when nums is [2, 2, 1]', t => {
  t.is(singleNumber([2, 2, 1]), 1)
})

test('should return 4 when nums is [4, 1, 2, 1, 2]', t => {
  t.is(singleNumber([4, 1, 2, 1, 2]), 4)
})
