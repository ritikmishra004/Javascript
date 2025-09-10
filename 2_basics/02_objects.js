// ==================== OBJECTS IN JAVASCRIPT ====================

// 1. Creating Objects
let obj1 = { name: "Ritik", age: 21, city: "Noida" }; // object literal
console.log(obj1);

let obj2 = new Object(); // object constructor
obj2.name = "Mishra";
obj2.age = 22;
console.log(obj2);


// 2. Accessing Properties
console.log(obj1.name);    // dot notation → "Ritik"
console.log(obj1["city"]); // bracket notation → "Noida"

let key = "age";
console.log(obj1[key]);    // dynamic access → 21


// 3. Adding & Modifying Properties
obj1.country = "India";   // new property
obj1.age = 25;            // modify existing property
console.log(obj1);


// 4. Deleting Properties
delete obj1.city;
console.log(obj1);


// 5. Methods in Objects (function as value)
let person = {
  name: "Ritik",
  age: 21,
  greet: function() {
    return `Hello, my name is ${this.name}`; // this → current object
  }
};
console.log(person.greet());


// 6. Nested Objects
let student = {
  name: "Ritik",
  marks: {
    math: 95,
    science: 88
  }
};
console.log(student.marks.math); // 95


// 7. Objects inside Array
let users = [
  { id: 1, name: "Ritik" },
  { id: 2, name: "Mishra" }
];
console.log(users[1].name); // Mishra


// 8. Looping through Objects
let car = { brand: "BMW", model: "X5", year: 2024 };

// for...in loop
for (let key in car) {
  console.log(key, ":", car[key]);
}

// Object.keys() → array of keys
console.log(Object.keys(car)); // ["brand","model","year"]

// Object.values() → array of values
console.log(Object.values(car)); // ["BMW","X5",2024]

// Object.entries() → array of [key,value] pairs
console.log(Object.entries(car)); 
// [["brand","BMW"],["model","X5"],["year",2024]]


// 9. Object Destructuring
let { brand, year } = car;
console.log(brand, year); // BMW 2024


// 10. Spread & Rest with Objects
let objA = { x: 1, y: 2 };
let objB = { z: 3, ...objA }; // spread (copy + merge)
console.log(objB); // { z:3, x:1, y:2 }

function printDetails({name, age}) { // destructuring in function parameter
  console.log(`${name} is ${age} years old`);
}
printDetails({name:"Ritik", age:21});


// 11. Object.freeze() & Object.seal()
let objX = { a:1, b:2 };

Object.freeze(objX); // completely lock → add/remove/modify not allowed
objX.a = 99;
console.log(objX); // {a:1, b:2}

let objY = { c:3, d:4 };
Object.seal(objY); // add/remove not allowed, modify allowed
objY.c = 100;
console.log(objY); // {c:100, d:4}


// 12. this keyword in Object
let laptop = {
  brand: "Dell",
  info() {
    console.log(`Laptop brand is ${this.brand}`);
  }
};
laptop.info();
