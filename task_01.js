// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function convert_temperature(celcius) {
    const fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}

const celcius = convert_temperature(35);
console.log("Celcius to Fahrenheit :", celcius, "F")

