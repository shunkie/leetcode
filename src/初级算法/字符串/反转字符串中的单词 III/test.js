const test = require('ava').default
const reverseWords = require('./index')

test(`should return [s'teL ekat edoCteeL tsetnoc] when str is [Let's take LeetCode contest]`, t => {
  let str = `Let's take LeetCode contest`
  t.is(reverseWords(str), `s'teL ekat edoCteeL tsetnoc`)
})
