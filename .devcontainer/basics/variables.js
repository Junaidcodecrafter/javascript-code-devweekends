const accountId = 32145; // This value cannot be changed once declared.
let email = "junaid@google.com"; // This value can be changed later in the code.
var accountPassword = "12345"; // This value can be changed later in the code.
accountCity = "Wah"; // This value can be changed later in the code but this variable is not declared with var, let, or const, which can lead to issues in larger codebases.
let accountState; // This variable is declared but not initialized, so it will have the value of undefined.
console.log(accountId); // This will print the value of accountId, which is 32145.

console.table([accountId, email, accountPassword, accountCity]); // This will print the values of all the variables in a table format.

/*
Prefer not to use var because of issues in block scope and functional scope 
*/  