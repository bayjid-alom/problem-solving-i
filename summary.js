/**
 # Primitive data types - 
 1. null
 2. Undefined
 3. String
 4. boolean
 
 # Non-primitive data types
 1. Array
 2. Object

 ❌ ==  ✅ ===
 ❌ !=  ✅ !==

 */

console.log("✅ inch_______to_feet | miles________to_km")

// 12 inch = 1 feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet_2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + " inch ";
    return result;
}

const height = inchToFeet(66).toFixed(2);
console.log(height)

const height_2 = inchToFeet_2(66)
console.log(height_2)


// 1 kilometer = 0.621371 miles
// 1 mile = 1.60934 kilometer
function mileToKm(mile) {
    const km = 1.60934 * mile;
    const result = km.toFixed(3) + " Kilometers ";
    return result;

}

const distance = mileToKm(10);
console.log(distance)



console.log("✅ Find______Out____Leap_____Year")

// year will be leap year if the year is divisible by 4
// not true 100%
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const year = isLeapYear(2000);
console.log(year)


/*
1. those year that is not divisible by 100, if the year is divisible by 4:
then it will be a leap year
*/

function isLeapYear_2(year_2) {
    if (year_2 % 100 !== 0 && year_2 % 4 === 0) {
        return true;
    }
    else if (year_2 % 100 === 0 && year_2 % 400 === 0) {
        return true;
    }
    else {
        return false;
    }

}

const year_2 = isLeapYear_2(2026)
console.log("Is leap year(2) -", year_2);




console.log("✅ Average_________Odd_______Array");

/**
 function takes an array as parameter
 give me the average of the odd numbers

 */ /*
 
*/


function oddAverage(numbers) {
    let odds = [];
    for (number of numbers) {
        if (number % 2 === 1) {
            odds.push(number)
        }
    }
    console.log(odds)

    let sum = 0;
    for (number of odds) {
        sum = sum + number;
    }

    const count = odds.length;
    const average = (sum / count).toFixed(2);
    return average;

}

const numbers = [10, 11, 13, 15, 16, 17, 18, 19, 20];
const avg = oddAverage(numbers);
console.log("Average of the odd numbers is :", avg)



console.log("✅ remove________duplicate____item");
/**
 array has some duplicate elements
 check : has not includes.

 নোট ঃ চেক করতে হবে এখানে আইটেম নেই - যদি না থাকে তাহলে খালি এরেতে পুশ করতে হবে।
  if (unique.includes(item) === false)
  if (!unique.includes(item))  // readable
 */


function noDuplicate(array) {

    let unique = [];
    for (item of array) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}

const biriyaniLover = ["Hasan", "Anik", "Hridoy", "Hasan", "Anik", "Hasan"];
const uniqueArray = noDuplicate(biriyaniLover);
console.log("Removed Duplicate :", uniqueArray)


function noDuplicateNumber(array) {

    let unique_numbers = [];
    for (item of array) {
        if (unique_numbers.includes(item) === false) {
            unique_numbers.push(item);
        }
    }
    return unique_numbers;
}

const number_repeated = [10, 20, 10, 10, 15, 10, 10, 25, 30];
const uniqueArray_2 = noDuplicateNumber(number_repeated)
console.log("Removed duplicate :", uniqueArray_2)




console.log("✅ Math_________|abs_round_ceil_floor_random number");

// Already Made ✅ (Learn later...) [Props]
// const Math = {
//     min: function min(num1 , num2){
//         return num2;
//     }
// }
// console.log(Math.min)


const min = Math.min(10, 20, 25);
const max = Math.max(100, 1000, 10000);
console.log(max, min)              // 10000 10

console.log(Math.max(9, 99, 999))  // O/P: 999
console.log(Math.abs(-100 + 10))   // remove sign

console.log(Math.floor(18.75))     // নিচে নামায় - floor O/P: 18
console.log(Math.ceil(99.35))      // উপরে উঠায় - ceil O/P: 100

console.log(Math.random())         // between 0-1
console.log(Math.random() * 10)      // Value*10

const random_number = Math.round(Math.random() * 20);   // 0-19
console.log(random_number)


/**
 কীভাবে কাজ করে?
 Math.random() → 0 থেকে 1 এর মধ্যে সংখ্যা দেয়
* 10 → 0 থেকে 10 এর মধ্যে নিয়ে যায়
Math.floor() → দশমিক অংশ বাদ দেয়, ফলে 0 থেকে 9 পাওয়া যায়
+ 1 → 1 থেকে 10 হয়ে যায়

0–9 → Math.floor(Math.random() * 10)
1–10 → Math.floor(Math.random() * 10) + 1
0–10 → Math.floor(Math.random() * 11)
*/



// Date________and__________Time (check: date_time.js)
console.log("✅ Swap varibale________Swap Without temp, destructing");
// একটা অতিরিক্ত পাত্র হিসেবে temporary (varible) ব্যবহার করবো ;

let a = 25;
let b = 50;
console.log(a, b)   // 25 50
a = b;
b = a;
console.log(a, b)   // 50 50


// প্রথমে temporary তে x-এর মান স্টোর করে রেখেছি,
// x-এর মান হিসেবে y-কে সেট করেছি,
// এরপর পুনরায় y-এর জায়গায় temp তথা x-এর মান রেখেছি।
let x = 100;
let y = 200;
console.log(x, y)   // 100 200

const temp = x;
x = y;
y = temp;
console.log(x, y);  // 200 100



// Destructuring
let m = 300;
let n = 600;
// console.log(m, n)    // Error!

[m, n] = [n, m]
console.log(m, n)   // 600 300
