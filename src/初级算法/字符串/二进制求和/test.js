const test = require('ava').default
const addBinary = require('./index')

test('should return "100" when a is "11" and b is "1"', t => {
  t.is(addBinary('11', '1'), '100')
})

test('should return "10101" when a is "1010" and b is "1011"', t => {
  t.is(addBinary('1010', '1011'), '10101')
})
