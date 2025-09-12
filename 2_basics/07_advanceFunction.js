// ==================== ADVANCED FUNCTIONS ====================

// 1. HOISTING
// Hoisting ka matlab: JS execution ke pehle hi variable declarations aur function declarations ko memory me upar le jata hai.

// Function Declaration hoist hota hai:
sayHello();  // ✅ kaam karega
function sayHello() {
  console.log("Hello from hoisting!");
}

// Function Expression hoist nahi hota:
try {
  sayHi();  // ❌ Error (Cannot access before initialization)
} catch (err) {
  console.log("Error:", err.message);
}
const sayHi = function() {
  console.log("Hi!");
};


// 2. EXECUTION CONTEXT + CALL STACK
// - JS har function ke liye ek "execution context" banata hai (memory + code execution).
// - Call Stack ek LIFO (last in, first out) stack hota hai jahan functions push/pop hote hain.

function first() {
  console.log("First function");
  second();
}
function second() {
  console.log("Second function");
  third();
}
function third() {
  console.log("Third function");
}
first();  
// Call stack order: first() -> second() -> third() -> remove ho jate hain


// 3. CLOSURE (deep dive)
// Closure = function + uske lexical (outer) scope ke variables.
// Yaani ek inner function apne outer scope ke variables ko "yaad" rakhta hai.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = outer(); // alag closure
console.log(counter2()); // 1 (independent)

// ✅ Real-life example: private data
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance -= amount,
    getBalance: () => balance
  };
}
const account = bankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120


// 4. IIFE (Immediately Invoked Function Expression)
// Function jo turant execute ho jata hai
(function() {
  console.log("IIFE executed immediately!");
})();

// With parameters
((name) => {
  console.log(`Hello, ${name}`);
})("Ritik");


// 5. PURE vs IMPURE FUNCTIONS
// Pure function: same input -> same output, no side effects
function pureAdd(a, b) {
  return a + b; // sirf apne inputs pe depend karta hai
}
console.log(pureAdd(2, 3)); // 5

// Impure function: output external state pe depend karta hai ya usko change karta hai
let randomNum = Math.random();
function impureAdd(a) {
  return a + randomNum; // same input pe bhi alag output aa sakta hai
}
console.log(impureAdd(5));


// 6. RECURSION BASICS
// Function apne aap ko call karta hai until base condition met ho jaye

// Factorial using recursion
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive case
}
console.log("Factorial(5):", factorial(5)); // 120

// Fibonacci using recursion
function fibonacci(n) {
  if (n <= 1) return n; // base case
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
console.log("Fibonacci(6):", fibonacci(6)); // 8
