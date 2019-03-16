const test = require('ava').default
const reverseString = require('./index')

test('should return "olleh" when str is "hello"', t => {
  t.is(reverseString('hello'), 'olleh')
})

test('should return "amanaP :lanac a ,nalp a ,nam A" when str is "A man, a plan, a canal: Panama"', t => {
  t.is(reverseString('A man, a plan, a canal: Panama'), 'amanaP :lanac a ,nalp a ,nam A')
})
