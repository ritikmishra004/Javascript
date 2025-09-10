let score = "33abs"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// true = 1; false = 0

let LoggedIn = 1
let BooleanLoogedIn = Boolean(LoggedIn)
console.log(BooleanLoogedIn)

// 1 => true, 0 => False
// "" empty => false
// "ritik" => true

// **************Operations****************

// ==================== JavaScript Operators ====================

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b);  // Addition (13)
console.log(a - b);  // Subtraction (7)
console.log(a * b);  // Multiplication (30)
console.log(a / b);  // Division (3.333..)
console.log(a % b);  // Modulus (remainder → 1)
console.log(a ** b); // Exponentiation (10^3 = 1000)

// 2. Assignment Operators
let x = 5;
x += 2; // x = x + 2 → 7
x -= 1; // x = x - 1 → 6
x *= 3; // x = x * 3 → 18
x /= 2; // x = x / 2 → 9
x %= 4; // x = x % 4 → 1
console.log(x);

// 3. Comparison Operators (true/false return karte hain)
console.log(5 == "5");   // true  (loose equality, type convert karega)
console.log(5 === "5");  // false (strict equality, type bhi check karega)
console.log(5 != "5");   // false (loose not equal)
console.log(5 !== "5");  // true  (strict not equal)
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// 4. Logical Operators
let p = true;
let q = false;
console.log(p && q); // AND → false
console.log(p || q); // OR → true
console.log(!p);     // NOT → false

// 5. Unary Operators
let n = 5;
console.log(+n);   // + as unary (just returns 5)
console.log(-n);   // negation → -5
console.log(++n);  // pre-increment → pehle badhao phir use karo
console.log(n++);  // post-increment → pehle use karo phir badhao
console.log(--n);  // pre-decrement
console.log(n--);  // post-decrement

// 6. Ternary Operator (shorthand if-else)
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

// 7. Type Operators
console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(Array.isArray([1,2,3])); // true
console.log(null instanceof Object); // false

// 8. Bitwise Operators (kaam binary bits pe hota hai)
console.log(5 & 1); // AND  → 1
console.log(5 | 1); // OR   → 5
console.log(5 ^ 1); // XOR  → 4
console.log(~5);    // NOT  → -6
console.log(5 << 1); // Left shift  → 10
console.log(5 >> 1); // Right shift → 2


str1 = "hello"
str2 = "ritik"
str3 = str1+str2
console.log(str3);

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")