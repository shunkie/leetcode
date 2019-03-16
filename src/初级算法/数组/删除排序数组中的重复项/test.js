const test = require('ava').default
const removeDuplicate = require('./index')

test('should return 2 when nums is [1, 1, 2]', t => {
  t.is(removeDuplicate([1, 1, 2]), 2)
})

test('should return 5 when nums is [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', t => {
  t.is(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
})

test('should return 3 when nums is [0, 1, 2]', t => {
  t.is(removeDuplicate([0, 1, 2]), 3)
})

test('should return 4 when nums is [1, 3, 3, 4, 7]', t => {
  t.is(removeDuplicate([1, 3, 3, 4, 7]), 4)
})

test('should reutrn 8 when nums is [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7]', t => {
  t.is(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7]), 8)
})

test('should return 0 when nums is []', t => {
  t.is(removeDuplicate([]), 0)
})
