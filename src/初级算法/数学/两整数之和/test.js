const { test } = require('ava')
const getSum = require('./index')

test('should return 3 when a is 1 and b is 2', t => {
  t.is(getSum(1, 2), 3)
})

test('should return 1 when a is -2 and b is 3', t => {
  t.is(getSum(-2, 3), 1)
})

test('should return 198 when a is 99 and b is 99', t => {
  t.is(getSum(99, 99), 198)
})

test('should return 0 when a is -99 and b is 99', t => {
  t.is(getSum(-99, 99), 0)
})
