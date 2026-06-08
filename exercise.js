// Task - 01 :
// Write a function called evenAverage() that takes an array of numbers as a parameter. The function should find all the even numbers in the array, calculate their average, and return the average value rounded to 2 decimal places.

function evenAverage(numbers) {

    let evens = [];
    for (number of numbers) {
        if (number % 2 === 0) {
            evens.push(number)
        }
    }
    console.log(evens)
    let sum = 0;
    for (number of evens) {
        sum = sum + number;
    }

    const count = evens.length;
    const average = (sum / count).toFixed(3);
    return average;
}

const numbers = [5, 10, 15, 20, 25, 30, 35, 40];
const average = evenAverage(numbers)
console.log("Even Numbers Average :", average)