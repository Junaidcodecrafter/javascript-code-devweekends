let score = "33abc";
let valueInNumber = Number(score); // This will convert the string to a number, but since the string contains non-numeric characters, it will result in NaN (Not a Number).

console.log(valueInNumber); // Output: NaN
console.log(typeof valueInNumber); // Output: number

// To handle such cases, you can use parseInt or parseFloat to extract the numeric part from the string.
let parsedValue = parseInt(score); // This will extract the numeric part from the string and convert it to an integer.

console.log(parsedValue); // Output: 33
console.log(typeof parsedValue); // Output: number

// 33 => 33
// "33abc" => NaN(Not a Number) and its datatype is number.
// true => 1; false => 0; null => 0; undefined => NaN