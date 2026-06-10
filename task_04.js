/**
 ### Task-4: 
Write a function to find the longest word in a given string.
sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWord(str) {

    let words = str.split(" ")
    let longest = "";
    for (let word of words) {
        // console.log(word)
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;

}

const str = longestWord("I am learning Programming to become a Programmer");
console.log("Longest Word is :", str)