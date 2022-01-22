/*
paired parentheses

Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

// // USING A STACK
// // T: O(n) S: O(n)
// const pairedParentheses = (str) => {
//   const stack = [];
//   for (let char of str) {
//     if (char === '(') { // opener
//       stack.push(')');
//     } else if (stack.length && char === stack[stack.length - 1]) { // closer
//       stack.pop();
//     } else if (char === ')') {
//       return false;
//     };
//   };
//   return !stack.length;
// };

// USING CONSTANT SPACE
// T: O(n) S: O(1)
const pairedParentheses = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      if (count < 0) return false;
      count--;
    };
  };
  return count === 0;
};

// test_00:
console.log(pairedParentheses("(david)((abby))")); 
// -> true

// test_01:
console.log(pairedParentheses("()rose(jeff")); 
// -> false

// test_02:
console.log(pairedParentheses(")(")); 
// -> false

// test_03:
console.log(pairedParentheses("()")); 
// -> true

// test_04:
console.log(pairedParentheses("(((potato())))")); 
// -> true

// test_05:
console.log(pairedParentheses("(())(water)()")); 
// -> true

// test_06:
console.log(pairedParentheses("(())(water()()")); 
// -> false

// test_07:
console.log(pairedParentheses("")); 
// -> true

// test_08:
console.log(pairedParentheses("))()")); 
// -> false