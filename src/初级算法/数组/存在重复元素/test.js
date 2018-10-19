const { test } = require('ava')
const containsDuplicate = require('./index')

test('should return true when nums is [1, 2, 3, 1]', t => {
  t.true(containsDuplicate([1, 2, 3, 1]))
})

test('should return false when nums is [1, 2, 3, 4]', t => {
  t.false(containsDuplicate([1, 2, 3, 4]))
})

test('should return true when nums is [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', t => {
  t.true(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
})
