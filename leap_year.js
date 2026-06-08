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
console.log("Is leap year(2) -", year_2)