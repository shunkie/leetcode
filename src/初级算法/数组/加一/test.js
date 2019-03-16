const test = require('ava').default
const plusOne = require('./index')

test('should return [1, 2, 4] when digits is [1, 2, 3]', t => {
  t.deepEqual(plusOne([1, 2, 3]), [1, 2, 4])
})

test('should return [4, 3, 2, 1] when digits is [4, 3, 2, 2]', t => {
  t.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
})

test('should return [1, 0] when digits is [9]', t => {
  t.deepEqual(plusOne([9]), [1, 0])
})
