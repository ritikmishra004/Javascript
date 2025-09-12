// ==================== CONTROL FLOW IN JAVASCRIPT ====================

// 1. IF / ELSE / ELSE IF
let age = 20;

if (age < 18) {
  console.log("You are under 18"); // condition true to ye chalega
} else if (age >= 18 && age < 60) {
  console.log("You are an adult"); // agar 18 se 59 ke beech ho
} else {
  console.log("You are a senior citizen"); // baki cases
}


// 2. SWITCH STATEMENT
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;  // break nahi likhoge to neeche ke cases bhi chalenge
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


// 3. LOOPS
// (a) FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i); // 1,2,3,4,5
}

// (b) WHILE LOOP
let i = 1;
while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// (c) DO...WHILE LOOP
let j = 1;
do {
  console.log("Do While Loop:", j);
  j++;
} while (j <= 5);
// difference: do...while loop kam se kam ek baar run hoga chahe condition false ho


// 4. LOOP HELPERS → break & continue
for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    break; // loop yahin ruk jayega
  }
  console.log("Break Example:", k); // 1,2
}

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    continue; // iss iteration ko skip karega
  }
  console.log("Continue Example:", k); // 1,2,4,5
}


// ==================== PRACTICE EXAMPLES ====================

// 1. FizzBuzz (1 se 15 tak print karo, multiples of 3 -> Fizz, 5 -> Buzz, dono -> FizzBuzz)
for (let n = 1; n <= 15; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

// 2. Factorial (n!)
let num = 5;
let fact = 1;
for (let x = 1; x <= num; x++) {
  fact *= x;
}
console.log("Factorial of", num, "is", fact); // 120

// 3. Reverse String
let str = "Ritik";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Reversed String:", reversed); // kitir

// 4. Multiplication Table
let tableNum = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}
