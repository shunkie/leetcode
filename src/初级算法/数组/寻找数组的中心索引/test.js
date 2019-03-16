const test = require('ava').default
const pivotIndex = require('./index')

test('should return 3 when nums is [1, 7, 3, 6, 5, 6]', t => {
  t.is(pivotIndex([1, 7, 3, 6, 5, 6]), 3)
})

test('should return 0 when nums is [-1, -1, -1, 0, 1, 1]', t => {
  t.is(pivotIndex([-1, -1, -1, 0, 1, 1]), 0)
})

test('should return -1 when nums is [1, 2, 3]', t => {
  t.is(pivotIndex([1, 2, 3]), -1)
})
