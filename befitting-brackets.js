/*
befitting brackets (LC 20. Valid Parentheses Easy)

Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }
*/

const pairs = {
  '(': ')',
  '[': ']',
  '{': '}',
}

// const befittingBrackets = (str) => {
//   const stack = [];
//   for (let char of str) {
//     if (char in pairs) {
//       stack.push(pairs[char]);
//     } else if (stack.length && char === stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   };
//   return !stack.length;
// };

const befittingBrackets = (str) => {
  if (!str.length) return true;
  const stack = []; //  
  for (let char of str) {
    if (char in pairs) {
      stack.push(pairs[char]) // push the val/closing
    } else {
      if (!stack.length) return false;
      if (stack[stack.length - 1] === char) stack.pop();
    }
  }
  return stack.length === 0;
};

// test_00:
console.log(befittingBrackets('(){}[](())')); 
// -> true

// test_01:
console.log(befittingBrackets('({[]})')); 
// -> true

// test_02:
console.log(befittingBrackets('[][}')); 
// -> false

// test_03:
console.log(befittingBrackets('{[]}({}')); 
// -> false

// test_04:
console.log(befittingBrackets('[]{}(}[]')); 
// -> false

// test_05:
console.log(befittingBrackets('[]{}()[]')); 
// -> true

// test_06:
console.log(befittingBrackets(']{}')); 
// -> false

// test_07:
console.log(befittingBrackets('')); 
// -> true

// test_08:
console.log(befittingBrackets('{[(}])')); 
// -> false