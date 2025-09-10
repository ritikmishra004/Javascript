// ==================== DATES IN JAVASCRIPT ====================

// 1. Current Date & Time (default constructor)
let now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toDateString())   
console.log(now.toLocaleString())   
// Output: current date & time (system ke according)


// 2. Specific Date banana
let d1 = new Date("2025-09-02");    // YYYY-MM-DD format
console.log(d1);

let d2 = new Date(2025, 8, 2);      
// Month JS me 0-based hota hai (0 = Jan, 8 = Sept)
console.log(d2);


// 3. Date from timestamp (milliseconds since Jan 1, 1970)
let d3 = new Date(0);   // starting point (Epoch time)
console.log(d3);

let d4 = new Date(1000 * 60 * 60 * 24); // 1 din baad ka time
console.log(d4);


// 4. Get Methods (date ke parts nikalne ke liye)
let today = new Date();

console.log(today.getFullYear()); // Year → 2025
console.log(today.getMonth());    // Month (0–11)
console.log(today.getDate());     // Day of month (1–31)
console.log(today.getDay());      // Day of week (0 = Sunday, 6 = Saturday)
console.log(today.getHours());    // Hours (0–23)
console.log(today.getMinutes());  // Minutes (0–59)
console.log(today.getSeconds());  // Seconds (0–59)
console.log(today.getMilliseconds()); // Milliseconds (0–999)
console.log(today.getTime());     // Timestamp in ms (1970 se ab tak)


// 5. Set Methods (date ke parts set/modify karne ke liye)
let setDate = new Date();
setDate.setFullYear(2030);
setDate.setMonth(11);   // December (0-based)
setDate.setDate(25);    // 25th
console.log(setDate);


// 6. toString Variants (readable formats)
let sample = new Date();
console.log(sample.toString());       // Full string
console.log(sample.toDateString());   // Date part only
console.log(sample.toTimeString());   // Time part only
console.log(sample.toISOString());    // Standard ISO format
console.log(sample.toLocaleDateString()); // Local date format
console.log(sample.toLocaleTimeString()); // Local time format


// 7. Date.now() → current timestamp
console.log(Date.now());   // milliseconds since 1970

// Example: difference between two dates
let start = new Date("2025-01-01");
let end = new Date("2025-09-02");
let diff = end - start;   // difference in ms
console.log(diff / (1000 * 60 * 60 * 24));  // days difference
