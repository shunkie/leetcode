const test = require('ava').default
const findTheDifference = require('./index')

test('should return "e" when s is "abcd" and t is "abcde"', t => {
  t.is(findTheDifference('abcd', 'abcde'), 'e')
})
