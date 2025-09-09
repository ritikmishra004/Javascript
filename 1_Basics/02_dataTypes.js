"use strict"; // treat all JS code as newer version

// alert(3+3) // it will give you error

console.log(3+3)

// ==================== JavaScript Data Types ====================

// 1. Number (integer, float, NaN)
let age = 21;           // integer number
let price = 99.99;      // decimal (float)
let notANumber = NaN;   // "Not a Number" (invalid calculation)
console.log(typeof age);        // number
console.log(typeof price);      // number
console.log(typeof notANumber); // number

// 2. String (text)
let name = "Ritik";        // double quotes
let city = 'Noida';        // single quotes
let intro = `Hello ${name}`; // template literal (backticks, allows variable directly)
console.log(typeof name);  // string

// 3. Boolean (true/false)
let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isLoggedIn); // boolean

// 4. Undefined (variable declared but no value assigned)
let userEmail;
console.log(userEmail);        // undefined
console.log(typeof userEmail); // undefined

// 5. Null (empty value, intentional absence of object/value)
let account = null;
console.log(account);        // null
console.log(typeof account); // object (⚠️ JS quirk, historical bug)

// 6. Object (key-value pairs)
let user = {
    id: 101,
    username: "ritik1004",
    active: true
};
console.log(typeof user); // object

// 7. Array (special object, ordered collection)
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); // object (array bhi object ka hi type hai)

// 8. Function (callable object)
function greet() {
    return "Hello World!";
}
console.log(typeof greet); // function

// 9. BigInt (very large integers beyond Number limit)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

// 10. Symbol (unique identifier, mostly for advanced use like object keys)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (symbols are always unique)
console.log(typeof sym1);   // symbol
