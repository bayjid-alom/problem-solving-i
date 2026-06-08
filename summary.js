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

console.log("✅ _inch_to_feet | _miles_to_km")

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



// console.log("✅ _inch_to_feet | _miles_to_km")