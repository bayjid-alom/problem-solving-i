// ### Task-3: 
// Write a function to count the number of vowels in a string.


function countVowels(letters) {

    let vowels_counter = 0;

    for (letter of letters) {

        if (letter === "a" || letter === "e"
            || letter === "i" || letter === "o"
            || letter === "u" || letter === "A" || letter === "E"
            || letter === "I" || letter === "O" || letter === "U") {
            vowels_counter++;
        }
    }

    return vowels_counter;
}

const string = countVowels("I am learning Programming");
console.log("Vowels :", string)

