/**
 
 * uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

*/

const uncompress = (s) => {
  const stack = [];
  const nums = '123456789'
  for (let c of s) {
    if (nums.includes(c)) {
      stack.push(c);
    } else {
      const num = [];
      while (nums.includes(stack[stack.length - 1])) {
        const popped = stack.pop();
        num.unshift(popped);
      };
      stack.push(c.repeat(Number(num.join(''))))
    };
  };
  return stack.join('');
};

// test_00:
console.log(uncompress("2c3a1t")); 
// -> 'ccaaat'

// test_01:
console.log(uncompress("4s2b")); 
// -> 'ssssbb'

// test_02:
console.log(uncompress("2p1o5p")); 
// -> 'ppoppppp'

// test_03:
console.log(uncompress("3n12e2z")); 
// -> 'nnneeeeeeeeeeeezz'

// test_04:
console.log(uncompress("127y")); 
// ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'