// ================= OBJECT LITERAL =================
let user = {
  name: "Ritik",       // property
  age: 21,             // property
  city: "Noida",
  greet: function() {  // method
    return `Hello, I am ${this.name}`;
  }
};

console.log(user.name);   // Ritik
console.log(user.greet()); // Hello, I am Ritik

// Singleton using constructor function
function SingletonExample() {
  if (!SingletonExample.instance) { 
    // agar pehle se object nahi bana
    SingletonExample.instance = this; 
  }
  return SingletonExample.instance; 
}

let obj1 = new SingletonExample();
let obj2 = new SingletonExample();

console.log(obj1 === obj2); // true (same instance)
