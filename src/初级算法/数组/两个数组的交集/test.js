const { test } = require('ava')
const intersection = require('./index')

test('should return [2] when nums1 is [1, 2, 2, 1] and nums2 is [2, 2]', t => {
  const nums1 = [1, 2, 2, 1]
  const nums2 = [2, 2]
  const res = intersection(nums1, nums2)
  t.is(res.length, 1)
  t.not(res.indexOf(2), -1)
})

test('should return [9, 4] when nums1 is [4, 9, 5] and nums2 is [9, 4, 9, 8, 4]', t => {
  const nums1 = [9, 4]
  const nums2 = [9, 4, 9, 8, 4]
  const res = intersection(nums1, nums2)
  t.is(res.length, 2)
  t.not(res.indexOf(9), -1)
  t.not(res.indexOf(4), -1)
})
