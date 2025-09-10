const score = 50
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

// ==================== NUMBERS IN JAVASCRIPT ====================

// 1. Number Types (JS me sirf ek hi "Number" type hota hai - 64-bit floating point)
// Isme integer, float, +Infinity, -Infinity aur NaN (Not a Number) aa sakta hai

let intNum = 42;         // Integer
let floatNum = 3.14;     // Floating point
let bigNum = 1e6;        // Scientific notation (1 * 10^6 = 1000000)
let inf = Infinity;      // Positive Infinity
let negInf = -Infinity;  // Negative Infinity
let notNum = NaN;        // "Not a Number" (invalid calculation ka result)

console.log(intNum, floatNum, bigNum, inf, negInf, notNum);


// 2. Checking Type
console.log(typeof intNum);   // "number" (sab primitive number ka type number hi hota hai)
console.log(typeof NaN);      // "number" (special case, NaN bhi number type hai)


// 3. Special Number Values
console.log(1 / 0);           // Infinity
console.log(-1 / 0);          // -Infinity
console.log("abc" * 2);       // NaN (kyunki string ko number me convert nahi kar sakta)


// 4. Number Methods (direct functions)

// Convert string → number
console.log(Number("123"));   // 123
console.log(Number("123abc")); // NaN

// Parse Int and Float (string ke starting numbers padhega)
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14m")); // 3.14


// 5. Math Operations
let a = 10;
let b = 3;

console.log(a + b);  // Addition → 13
console.log(a - b);  // Subtraction → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division → 3.333...
console.log(a % b);  // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation (power) → 10^3 = 1000


// 6. Math Object (built-in library for maths functions)
console.log(Math.PI);          // 3.141592...
console.log(Math.round(3.6));  // 4 (nearest integer)
console.log(Math.floor(3.9));  // 3 (round down)
console.log(Math.ceil(3.1));   // 4 (round up)
console.log(Math.abs(-7));     // 7 (absolute value)
console.log(Math.sqrt(25));    // 5 (square root)
console.log(Math.pow(2, 4));   // 16 (power)
console.log(Math.min(1, 2, 3));// 1 (minimum value)
console.log(Math.max(1, 2, 3));// 3 (maximum value)
console.log(Math.random());    // Random number [0,1) ke beech


// 7. Number Methods (Object ke sath)
let num = 123.456;

console.log(num.toFixed(2));   // "123.46" (2 decimal places tak round)
console.log(num.toPrecision(4)); // "123.5" (total digits specify karta hai)
console.log(num.toString());   // "123.456" (string me convert)
console.log(num.toExponential(2)); // "1.23e+2" (scientific notation)


// 8. isNaN() and isFinite()
console.log(isNaN("abc"));      // true (Not a Number)
console.log(isNaN(123));        // false
console.log(isFinite(10 / 0));  // false (Infinity is not finite)
console.log(isFinite(100));     // true


// 9. Number.MAX_VALUE / MIN_VALUE (sabse bade aur chhote representable number)
console.log(Number.MAX_VALUE);  // 1.79e+308 (approx max)
console.log(Number.MIN_VALUE);  // 5e-324 (approx min positive)
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN


// 10. BigInt (very large integers ke liye)
// Normal number 2^53 - 1 se bada nahi ho sakta, uske liye BigInt aaya (ES2020+)
let bigInt = 1234567890123456789012345678901234567890n;  // 'n' lagana zaroori hai
console.log(bigInt);
console.log(typeof bigInt); // "bigint"

