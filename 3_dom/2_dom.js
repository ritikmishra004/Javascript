// ================== DOM (Document Object Model) ==================

// 1. Access elements (HTML ke element ko pakadna)

// By ID
let heading = document.getElementById("main-title");

// By Class
let items = document.getElementsByClassName("list-item");

// By Tag
let paras = document.getElementsByTagName("p");

// By Query Selector (modern way → 1st match)
let firstPara = document.querySelector("p");

// All matches (NodeList)
let allParas = document.querySelectorAll("p");


// 2. Changing content
heading.innerText = "Hello Ritik!";  // sirf text badlega
heading.innerHTML = "<em>Changed with italics</em>"; // html bhi inject hoga


// 3. Changing style
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";


// 4. Events (user interaction handle karna)
let btn = document.getElementById("clickMe");

btn.onclick = function() {
  alert("Button clicked!");
};

// addEventListener (best way)
btn.addEventListener("mouseover", () => {
  heading.style.color = "red";
});


// 5. Creating new elements
let newDiv = document.createElement("div");
newDiv.innerText = "I am a new DIV created by JS";
document.body.appendChild(newDiv);   // body ke end me add


// 6. Removing elements
// maan lo koi element pakda hai
let removeItem = document.getElementById("removeMe");
removeItem.remove();


// 7. Traversing (move inside tree)
console.log(heading.parentElement);  // parent element
console.log(heading.children);       // child elements
