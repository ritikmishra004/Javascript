// ================== FUNCTIONS IN JAVASCRIPT ==================

// 1. FUNCTION DECLARATION (hoisting hoti hai)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Ritik"));


// 2. FUNCTION EXPRESSION (hoist nahi hoti)
const greetExpr = function(name) {
  return `Hi, ${name}!`;
};
console.log(greetExpr("Mishra"));


// 3. ARROW FUNCTION (short syntax, "this" alag tarike se handle hota hai)
const greetArrow = (name) => `Hey, ${name}!`;
console.log(greetArrow("Buddy"));


// 4. PARAMETERS + DEFAULT VALUE
function add(a = 5, b = 10) {
  return a + b;
}
console.log(add());       // 15
console.log(add(20, 30)); // 50


// 5. REST OPERATOR (...args) -> multiple values ko ek array me pack karta hai
function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15


// 6. CALLBACK FUNCTION (function ko argument ke taur pe dena)
function processUserInput(name, callback) {
  console.log("User name:", name);
  callback(); // yahan dusra function chalega
}

processUserInput("Ritik", function() {
  console.log("Callback executed!");
});


// 7. HIGHER-ORDER FUNCTIONS (jo function ko input/output me le)
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10


// 8. CLOSURE (function apne outer scope ke variables ko yaad rakhta hai)
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 9. SCOPE (block, function, global)

// Global scope
let globalVar = "I am global";

function scopeTest() {
  // Function scope
  let funcVar = "I am function scoped";
  
  if (true) {
    // Block scope
    let blockVar = "I am block scoped";
    console.log(blockVar);
  }
  console.log(funcVar);
  console.log(globalVar);
}
scopeTest();


// 10. "this" keyword basics
const person = {
  name: "Ritik",
  age: 22,
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}`); // "this" current object ko point karega
  }
};
person.sayHi();
