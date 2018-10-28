const { test } = require('ava')
const firstUniqChar = require('./index')

test('should return 0 when s is leetcode', t => {
  t.is(firstUniqChar('leetcode'), 0)
})

test('should return 0 when s is leetcode', t => {
  t.is(firstUniqChar('loveleetcode'), 2)
})

test('should return -1 when s is aabbcc', t => {
  t.is(firstUniqChar('aabbcc'), -1)
})
