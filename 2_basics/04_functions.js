// ==================== FUNCTIONS IN JAVASCRIPT ====================

// 1. Function Declaration (Named Function)
// 👉 Sabse basic function, isko hoisting ka fayda milta hai.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5


// 2. Function Expression
// 👉 Function ko ek variable me assign kar diya. 
// Hoisting nahi hoti (use before declare ❌).
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 5)); // 20


// 3. Arrow Function (ES6)
// 👉 Short syntax, "this" ko lexically handle karta hai (normal function se different).
const divide = (a, b) => a / b; 
console.log(divide(10, 2)); // 5

// Agar sirf ek parameter hai to bracket optional:
const square = n => n * n;
console.log(square(6)); // 36


// 4. Default Parameters
// 👉 Agar argument na mile to default value use hoti hai.
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet());       // Hello, Guest
console.log(greet("Ritik"));// Hello, Ritik


// 5. Rest Parameters (...)
// 👉 Multiple arguments ko ek array ke form me capture karta hai.
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10


// 6. Anonymous Function
// 👉 Function without name, mostly callback me use hota hai.
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);


// 7. IIFE (Immediately Invoked Function Expression)
// 👉 Function turant execute ho jata hai.
(function() {
  console.log("IIFE runs instantly!");
})();


// 8. Higher-Order Functions
// 👉 Jo function ko argument ke roop me le ya return kare.
function operate(a, b, fn) {
  return fn(a, b);
}
let result = operate(5, 3, (x, y) => x + y);
console.log(result); // 8


// 9. Callback Function
// 👉 Ek function jo dusre function me pass hota hai aur later call hota hai.
function fetchData(callback) {
  console.log("Fetching data...");
  callback("Data received!");
}
fetchData((msg) => console.log(msg));


// 10. Function Scope
// 👉 Variables jo function ke andar define hote hain unko bahar use nahi kar sakte.
function testScope() {
  let localVar = "Inside Function";
  console.log(localVar);
}
// console.log(localVar); // ❌ Error


// 11. Closures
// 👉 Function jo apne outer function ke variables ko remember karta hai.
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 12. "this" in Functions
let obj = {
  name: "Ritik",
  normalFunc: function() {
    console.log("Normal:", this.name); // this → obj
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // this → outer scope (yaha global)
  }
};
obj.normalFunc(); // Normal: Ritik
obj.arrowFunc();  // Arrow: undefined (global context me name nahi hai)


// 13. Function Constructor (rarely used)
// 👉 Functions ko banane ka ek aur tareeka.
const Func = new Function("a", "b", "return a + b;");
console.log(Func(2, 3)); // 5
