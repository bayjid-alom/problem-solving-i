// ### Task-5: 
// Generate a random number between 10 to 20.

const random_number = Math.round(Math.random() * 11) + 10;
console.log("Random (10-20: ", random_number)
/**
 🧠 Explanation (simple):
Math.random() → দেয় 0 থেকে 1 এর মধ্যে decimal (যেমন 0.23, 0.89)
Math.random() * 11 → এখন range হয় 0 থেকে 10.999...
Math.floor() → decimal বাদ দিয়ে integer বানায় (0–10)
+ 10 → range shift করে 10 থেকে 20 করে দেয়
 */

const random_number_2 = Math.round(Math.random() * 101) + 100;
console.log("Random (100-200) :", random_number_2)

console.log(Math.round(Math.random() * 21) + 30);   // 20 - 50