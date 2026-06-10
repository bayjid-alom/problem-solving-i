/*
### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5   output: 2

sample-input:  numbers = [5,6,11,12,98, 5]
find: 25  output: 0
 */

function number_count(numbers) {
    let same_number = [];
    for (number of numbers) {
        if (number === 5) {
            same_number.push(number);
        }

    }
    console.log(same_number);
    const lenght = same_number.length;
    return lenght;
}

const numbers = [5, 6, 11, 12, 98, 5];
const output = number_count(numbers);

console.log("Available 5 :", output, "Times.")