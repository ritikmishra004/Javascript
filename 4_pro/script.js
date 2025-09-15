// html ko mjs mei access krne ka tarika hai dom
// console.log() → kisi bhi cheez ka value / output print karta hai.

// console.dir() → kisi HTML element ya object ki properties (object format me) dikhata hai.
// Jab tum uske object ke andar ka data/properties inspect karna chaho → console.dir()

// console.dir(document.body)

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

let h2 = document.querySelector("h1");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from ritik mishra"; // concatinate
