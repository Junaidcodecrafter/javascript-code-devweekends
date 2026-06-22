// Basic Comparisons 
// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 <= 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// Bit Confusing ones
console.log( "2" > 1); // JavaScript auto converts the string into number.
console.log( "02" > 1); // Same thing will happen in this case.

console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

// Note: Comaprisons convert null to a number, treating it as 0.

// === this checks equality and datatype too.
console.log( "2" === 0);