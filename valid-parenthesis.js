/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
 
const pairs = {
  '(': ')',
  '[': ']',
  '{': '}'
}
var isValid = function (s) {
  const stack = [];
  for (let c of s) {
    if (c in pairs) {
      stack.push(c);
    } else {
      if (!stack.length) return false;
      const key = stack.pop();
      if (pairs[key] !== c) return false;
    }
  }
  return stack.lengh === 0;
};

const s1 = "()";
console.log(func(s1));
// Output: true


const s2 = "()[]{}";
console.log(func(s2));
// Output: true


const s3 = "(]";
console.log(func(s3));
// Output: false
 

