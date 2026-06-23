// There are two types of data types in JavaScript: Primitive and Non-Primitive (Reference) data types.

// Primitive data types include:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (introduced in ES6)
// 7. BigInt (introduced in ES2020)
// return typeof "Hello"; // string 
// return typeof 42; // number
// return typeof true; // boolean
// return typeof null; // object (this is a known quirk in JavaScript)
// return typeof undefined; // undefined
// return typeof Symbol(); // symbol
// return typeof 10n; // bigint

// Non-Primitive (Reference) data types include:
// 1. Object
// 2. Array
// 3. Function
// return typeof { name: "John", age: 30 }; // object
// return typeof [1, 2, 3]; // object (arrays are a type of object in JavaScript)
// return typeof function() {}; // function

// Note: In JavaScript, everything that is not a primitive data type is considered an object.