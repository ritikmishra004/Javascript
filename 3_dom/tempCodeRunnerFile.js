/*/* 
  ===========================
  IMPORTANT: Script timing
  ===========================
  Jab tum DOM elements ko select karte ho (jaise getElementById etc.), to ensure karo ki woh elements already browser ne load kar liye ho.
  Agar tumhara <script> tag <head> me hai aur tumne DOMContentLoaded ya defer use nahi kiya, to selectors null return kar sakte hain.
  Do simple options:
    1) Place <script> just before </body> — phir elements pe kaam safe hoga, ya
    2) Wrap code inside document.addEventListener('DOMContentLoaded', ...) — jisse code tab chalega jab pura DOM ready ho.
  Niche wale code me mai DOMContentLoaded wrapper use kar raha hoon — ye best practice hai, aur tumhari scripts ko early-null errors se bachata hai.
*/

document.addEventListener('DOMContentLoaded', () => {

  /* 
    1) Access elements (HTML ke element ko pakadna)
    ------------------------------------------------
    getElementById("id") → fastest, sirf ek element return karta hai ya null.
    getElementsByClassName("class") → HTMLCollection return karta hai (LIVE collection): agar DOM me baad me matching elements add/remove karoge to collection automatically update ho jayega.
    getElementsByTagName("tag") → bhi HTMLCollection (live).
    querySelector("css") → CSS selector ke hisaab se FIRST match return karta hai (flexible & modern).
    querySelectorAll("css") → NodeList return karta hai (STATIC list): jo elements abhi present hain unka snapshot dega, baad me DOM change hone par update nahi hoga.
    Important notes:
      - Agar tum multiple elements pe iterate karna chahte ho to querySelectorAll zyada convenient hai kyunki NodeList pe forEach chal sakta hai.
      - HTMLCollection me forEach nahi hota, toh use Array.from() karke array bana lo agar array methods chahiye.
      - Hamesha null-check karo: let heading = document.getElementById("main-title"); if (!heading) { /* handle missing element */ }.
      - Performance tip: agar tum same selector baar-baar use kar rahe ho to usko variable me store karo (caching) — unnecessary DOM queries avoid karne se speed better hoti hai.
  */
  let heading = document.getElementById("main-title");
  let items = document.getElementsByClassName("list-item");
  let paras = document.getElementsByTagName("p");
  let firstPara = document.querySelector("p");
  let allParas = document.querySelectorAll("p"); // NodeList (static)


  /* 
    2) Changing content
    --------------------
    innerText, innerHTML, textContent — ye teen alag cheezein hain:
      - innerText: element ka visible text return/replace karta hai; CSS (like display:none) se hide hua text ko ignore karta hai; browser-specific reflow ko trigger kar sakta hai aur thoda slow hota hai.
      - textContent: pure text content deta/lagata hai; fast hai; HTML tags ko literal text me convert karta hai (no HTML parsing).
      - innerHTML: string ko HTML ke roop me parse karke element ke andar inject karta hai — bahut powerful lekin DANGEROUS agar user input directly inject karo (XSS risk). Always sanitize if content user-supplied ho.
    Example behaviour:
      heading.innerText = "Hello Ritik!";     // safe — text hi lagaega
      heading.innerHTML = "<em>Changed with italics</em>"; // HTML lagega (italics)
    Tip:
      - Agar tumhe sirf text dikhana hai to textContent ya innerText use karo.
      - Agar HTML insert karna ho to innerHTML use karo but sanitize inputs.
  */
  if (heading) {
    heading.innerText = "Hello Ritik!";  
    heading.innerHTML = "<em>Changed with italics</em>";
  } else {
    console.warn("Warning: #main-title element not found in DOM.");
  }


  /* 
    3) Changing style
    -------------------
    heading.style.property = value → direct inline style set karta hai (ex: heading.style.color = "blue").
    CSS property names camelCase me hote hain: background-color → backgroundColor.
    BUT: inline styles maintain karna aur change karna manageable nahi ho sakta for many styles — isliye classList approach zyada recommended hai:
      heading.classList.add("my-class"); // CSS classes se style control karo.
    Performance note:
      - DOM style changes se repaint/reflow hota hai; agar tum bahut saare style changes ek saath kar rahe ho to try karo batching (change classes instead of many style props).
      - Agar animations chahiye to CSS transitions/animations use karo and toggle classes from JS.
  */
  if (heading) {
    heading.style.color = "blue";
    heading.style.backgroundColor = "yellow";
    // Better: heading.classList.add('highlight'); // preferred for real projects
  }


  /* 
    4) Events (user interaction handle karna)
    -----------------------------------------
    btn.onclick = function() { ... }  → easy, lekin ek element pe sirf 1 onclick assign kar sakte ho (agar baad me overwrite hua to previous handler lose ho jayega).
    addEventListener('event', handler) → preferred: tum multiple listeners attach kar sakte ho; capture/bubble phases control kar sakte ho with options.
    Event object: handler function ko ek event argument milta hai (e), jisme event.target (jis element ne event trigger kiya) useful hota hai. 
    'this' inside normal function handler → element ko refer karega; but arrow function me 'this' lexical hota hai (outer scope), isliye handler me generally normal function use karo agar 'this' chahiye.
    removeEventListener → agar tum dynamically listeners attach kar rahe ho (single-page apps), toh unko remove karna zaroori hai warna memory leaks ho sakte hain (especially detached DOM nodes ke saath).
    Event Delegation:
      - Agar bahut saare child elements pe same type ka handler chahiye (jaise list items), to har ek pe listener attach karne se behtar hai parent pe ek listener laga ke event.target se decide karo — isse performance aur memory dono better rahenge.
    Example:
      btn.onclick = function() { alert("Button clicked!"); };
      btn.addEventListener("mouseover", () => { heading.style.color = "red"; });
    Safety:
      - Hamesha check karo element exist karta hai (if (btn) {...}) warna null.addEventListener error aayega.
  */
  let btn = document.getElementById("clickMe");

  if (btn) {
    btn.onclick = function() {
      alert("Button clicked!");
    };

    btn.addEventListener("mouseover", function () {
      if (heading) {
        heading.style.color = "red";
      }
    });
  } else {
    console.warn("Warning: #clickMe button not found — event handlers not attached.");
  }


  /* 
    5) Creating new elements
    -------------------------
    createElement(tagName) → naya DOM node banata hai (abhi document se detached hota hai).
    Best practice:
      - set textContent (safer) instead of innerHTML agar sirf text add karna ho.
      - attributes set karne ke liye setAttribute or element.id / element.className use kar sakte ho.
      - jab multiple elements add karne ho to documentFragment use karo — ek baar me fragment ko append karne se reflow kam hota hai.
    appendChild vs append:
      - appendChild sirf Node accept karta hai; append allow karta hai string bhi.
      - appendChild returns the appended node.
    Example:
      const newDiv = document.createElement("div");
      newDiv.innerText = "I am a new DIV created by JS";
      document.body.appendChild(newDiv);
    XSS caution: agar tum user input ko innerHTML se insert kar rahe ho to sanitize karo.
  */
  const newDiv = document.createElement("div");
  newDiv.innerText = "I am a new DIV created by JS";
  document.body.appendChild(newDiv);


  /* 
    6) Removing elements
    ---------------------
    Modern DOM: element.remove() → directly element ko DOM se hata deta hai (agar element exist kare).
    Older approach: parent.removeChild(child) — thoda verbose lekin backwards-compatible.
    Important:
      - Pehle remove any event listeners attached to the element (agar tum listener references rakhte ho) — otherwise memory leak ka chance hota hai in some edge cases.
      - Always check for null: let removeItem = document.getElementById("removeMe"); if (removeItem) removeItem.remove();
      - Removing element se uske child nodes bhi remove ho jate hain.
  */
  let removeItem = document.getElementById("removeMe");
  if (removeItem) {
    removeItem.remove();
  }


  /* 
    7) Traversing (move inside tree)
    ---------------------------------
    parentElement → kisi node ka parent element (null agar root ya parent element nahi ho).
    children → HTMLCollection (sirf element nodes) of children (text nodes exclude).
    childNodes → NodeList of all child nodes (text nodes, comments included).
    nextElementSibling / previousElementSibling → next/prev sibling element only (ignores text nodes).
    Practical tips:
      - Agar tum children pe loop chalakar elements remove kar rahe ho to backwards loop use karo (i = children.length-1; i>=0; i--) — warna index shifting se kuch items skip ho sakte hain.
      - Agar tum traversal me DOM changes karoge to live collections (HTMLCollection) turant update honge — isliye snapshot chahiye toh Array.from(children) pe kaam karo.
    Example logs:
      console.log(heading ? heading.parentElement : null);
      console.log(heading ? heading.children : null);
  */
  console.log("Parent of heading:", heading ? heading.parentElement : null);
  console.log("Children of heading (HTMLCollection):", heading ? heading.children : null);

  // Extra: agar tum NodeList ko array me convert karke use karna chaho:
  Array.from(allParas).forEach(p => console.log(p.textContent));

}); // END of DOMContentLoaded wrapper