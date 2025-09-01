// const = constant variable
// iski value ek baar assign hone ke baad change nahi hoti
const accountId = 123  

// let = block scoped variable
// iski value update ho sakti hai, par re-declare nahi ho sakti
let account_email = "ritik1004@gmail.com"

/*
var = function scoped variable (old JS)
isme problem ye hai ki yeh block scope follow nahi karta, 
is wajah se kabhi kabhi bugs aa jate hain
*/
var account_password = "12345"
/*
agar bina var/let/const ke variable banate ho
toh wo automatically GLOBAL variable ban jata hai
(jo good practice nahi hai)
*/
account_city = "Noida"
console.table([accountId,account_email,account_password,account_city])

account_email = "hariom@gmail.com"
account_password = "56565"
account_city = "greater noida"
let account_state;
/*
❌ const variable ko change karne ki koshish karoge toh error aayega
#accountId = 2  // TypeError: Assignment to constant variable
bina keyword → global variable ban jata hai (unsafe)
*/
// value print karne ke liye console.log use hota hai
console.log(accountId)

console.table([accountId,account_email,account_password,account_city,account_state])