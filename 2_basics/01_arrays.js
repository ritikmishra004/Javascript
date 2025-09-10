// arrays

const array = [1,2,3,4,5,6,7]
const myHeros = ["ritik","raj","ronit"]

console.log(array[3])
console.log(myHeros[2])

const Myarr = new Array(1,2,3,4,5,6)
console.log(Myarr[0])

// ==================== ARRAYS IN JAVASCRIPT ====================

// 1. Creating Arrays
let arr1 = [1, 2, 3, 4, 5];        // simple array
let arr2 = ["Ritik", "Noida", 21]; // mixed values
let arr3 = new Array(5);           // array with length 5 (empty slots)
console.log(arr1, arr2, arr3);


// 2. Accessing & Modifying Elements
console.log(arr1[0]);   // 1 (first element)
arr1[1] = 20;           // change value at index 1
console.log(arr1);      // [1, 20, 3, 4, 5]


// 3. Array Length
console.log(arr1.length); // 5
arr1.length = 3;          // shrink array
console.log(arr1);        // [1, 20, 3]


// 4. Adding & Removing Elements
let fruits = ["apple", "banana"];

fruits.push("mango");   // add at end
console.log(fruits);    // ["apple","banana","mango"]

fruits.pop();           // remove from end
console.log(fruits);    // ["apple","banana"]

fruits.unshift("grape"); // add at beginning
console.log(fruits);     // ["grape","apple","banana"]

fruits.shift();          // remove from beginning
console.log(fruits);     // ["apple","banana"]


// 5. Searching in Arrays
let nums = [10, 20, 30, 40, 50];
console.log(nums.indexOf(30));    // 2 (index of 30)
console.log(nums.includes(40));   // true
console.log(nums.includes(100));  // false


// 6. Slice vs Splice
let letters = ["a","b","c","d","e"];
console.log(letters.slice(1, 4)); // ["b","c","d"] (copy, original unchanged)
console.log(letters);             // ["a","b","c","d","e"]

letters.splice(2, 2, "X", "Y");   // remove 2 from index 2, insert "X","Y"
console.log(letters);             // ["a","b","X","Y","e"]


// 7. Iterating Arrays
let arr = [1,2,3,4];

// for loop
for (let i=0; i<arr.length; i++) {
    console.log("for loop:", arr[i]);
}

// for...of loop
for (let val of arr) {
    console.log("for...of:", val);
}

// forEach
arr.forEach((val, index) => {
    console.log(`forEach: index=${index}, value=${val}`);
});


// 8. Map, Filter, Reduce
let numbers = [1,2,3,4,5];

let doubled = numbers.map(n => n*2);   // [2,4,6,8,10]
console.log(doubled);

let even = numbers.filter(n => n%2===0); // [2,4]
console.log(even);

let sum = numbers.reduce((acc, n) => acc+n, 0); // 15
console.log(sum);


// 9. Other Useful Methods
let arrX = [1,2,3];
console.log(arrX.concat([4,5]));   // [1,2,3,4,5] (merge arrays)

console.log(["z","x","a"].sort()); // ["a","x","z"] (string sort)
console.log([30, 4, 21].sort());   // [21,30,4] (lexical sort by default)
console.log([30, 4, 21].sort((a,b)=>a-b)); // [4,21,30] (numeric sort)

console.log([1,2,3].reverse());    // [3,2,1]

console.log(["JS","is","cool"].join(" ")); // "JS is cool"


// 10. Multidimensional Arrays
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][2]); // 6 (row 2, column 3)


// 11. Spread & Rest with Arrays
let arrA = [10,20,30];
let arrB = [...arrA, 40, 50]; // spread → copy + add
console.log(arrB);

function sumAll(...nums) {   // rest → combine arguments into array
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sumAll(1,2,3,4,5)); // 15
