/*
decompress braces
Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.

You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

const decompressBraces = (s) => {
  const stack = []; // qq
  const nums = '123456789';
  for (let c of s) {
    if (nums.includes(c)) {
      stack.push(Number(c));
    } else if (c === '}') {
      const segment = []; // 
      while (!nums.includes(stack[stack.length - 1])) {
        segment.unshift(stack.pop());
      };
      stack.push(segment.join('').repeat(stack.pop()));
    } else if (c !== '{') {
      stack.push(c)
    };
  };
  return stack.join('');
};

// test_00:
console.log(decompressBraces("2{q}3{tu}v")); 
// -> qqtututuv 

// test_01:
console.log(decompressBraces("ch3{ao}")); 
// -> chaoaoao

// test_02:
console.log(decompressBraces("2{y3{o}}s")); 
// -> yoooyooos

// test_03:
console.log(decompressBraces("z3{a2{xy}b}")); 
// -> zaxyxybaxyxybaxyxyb 

// test_04:
console.log(decompressBraces("2{3{r4{e}r}io}")); 
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio 

// test_05:
console.log(decompressBraces("go3{spinn2{ing}s}")); 
// -> gospinningingsspinningingsspinningings 

// test_06:
console.log(decompressBraces("2{l2{if}azu}l")); 
// -> lififazulififazul 

// test_07:
console.log(decompressBraces("3{al4{ec}2{icia}}")); 
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia 