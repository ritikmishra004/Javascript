// ==================== STRINGS IN JAVASCRIPT ====================

// 1. Creating Strings
// JS me string banane ke 3 tareeke hain:
//  - double quotes " "
//  - single quotes ' '
//  - backticks ` ` (template literals → variables + multiline support)
let str1 = "Hello";    
let str2 = 'World';    
let str3 = `JS`;       

console.log(str1, str2, str3); 

// 2. String Concatenation (strings ko jodna)
// Purane time me + operator use karte the
let name = "Ritik";
let city = "Noida";

// Old way: + operator ke sath jodna
console.log("My name is " + name + " and I live in " + city);

// Modern way: Template literals (backticks ke andar ${variable})
console.log(`My name is ${name} and I live in ${city}`);

// 3. String Length
// .length → string ke andar kitne characters hain
let greet = "Hello World";
console.log(greet.length); // 11

// 4. Accessing characters
// String me har ek character ek index pe hota hai (0 se start hota hai)
console.log(greet[0]);       // 'H' (first char)
// charAt(index) bhi same kaam karta hai
console.log(greet.charAt(1)); // 'e'

// 5. Changing Case
// toUpperCase → sabko CAPITAL me badal deta hai
// toLowerCase → sabko small me badal deta hai
console.log(greet.toUpperCase()); // "HELLO WORLD"
console.log(greet.toLowerCase()); // "hello world"

// 6. Searching in Strings
// indexOf → starting position return karta hai
// includes → check karta hai string ke andar word hai ya nahi (true/false)
// startsWith → string kis se start ho rahi hai
// endsWith → string kis se end ho rahi hai
console.log(greet.indexOf("World"));   // 6
console.log(greet.includes("Hello"));  // true
console.log(greet.startsWith("Hel"));  // true
console.log(greet.endsWith("ld"));     // true

// 7. Extracting Substrings (string ke parts nikalna)
// slice(start,end) → start index se lekar end-1 tak
console.log(greet.slice(0, 5));     // "Hello"
// substring(start,end) → same as slice (negative index ko handle nahi karta)
console.log(greet.substring(6, 11));// "World"
// substr(start,length) → start index se length ke characters
console.log(greet.substring(6, 5));    // "World"

// 8. Replace Content
// replace(old,new) → pehle match ko replace karta hai
// replaceAll(old,new) → sab matches ko replace karta hai
console.log(greet.replace("World", "JS"));  // "Hello JS"
console.log("aaa".replaceAll("a", "b"));    // "bbb"

// 9. Trim (extra spaces hatana)
// trim() → dono side se spaces hatata hai
// trimStart() → sirf left side se spaces hatata hai
// trimEnd() → sirf right side se spaces hatata hai
let spaced = "   Ritik Mishra   ";
console.log(spaced.trim());       // "Ritik Mishra"
console.log(spaced.trimStart());  // "Ritik Mishra   "
console.log(spaced.trimEnd());    // "   Ritik Mishra"

// 10. Split and Join
// split(separator) → string ko array me tod deta hai
// join(separator) → array ko string me jod deta hai
let csv = "red,green,blue";
let colors = csv.split(",");   // ["red","green","blue"]
console.log(colors.join(" | ")); // "red | green | blue"

// 11. Repeat and Pad
// repeat(n) → string ko n times repeat karta hai
console.log("ha".repeat(3));   // "hahaha"

// padStart(length, char) → string ke left side fill karta hai
console.log("5".padStart(4, "0")); // "0005"
// padEnd(length, char) → string ke right side fill karta hai
console.log("7".padEnd(4, "*"));   // "7***"

// 12. Escape Characters
// \" → quotes ke andar quotes likhne ke liye
// \\ → ek single backslash dikhane ke liye
let quote = "He said, \"JavaScript is fun!\"";
let path = "C:\\Users\\Ritik";
console.log(quote); // He said, "JavaScript is fun!"
console.log(path);  // C:\Users\Ritik

// 13. Template Literals (multiline + variables)
// Backtick string me multiline likh sakte ho aur ${} me variables daal sakte ho
let multi = `
This is a 
multi-line string
with name: ${name}
`;
console.log(multi);

// 14. String Comparison
// JS me strings lexicographical (dictionary order) se compare hote hain
console.log("a" < "b");   // true
console.log("apple" > "banana"); // false (apple dictionary me pehle aata hai)

// 15. String Object vs Primitive
// Primitive string → normal string
let primStr = "Hello";              
// Object string → new String() constructor se banti hai
let objStr = new String("Hello");   

console.log(typeof primStr); // string (primitive)
console.log(typeof objStr);  // object (object wrapper)

// == → sirf values compare karta hai
console.log(primStr == objStr);  // true  
// === → values + types compare karta hai
console.log(primStr === objStr); // false (kyunki ek string hai aur ek object)
