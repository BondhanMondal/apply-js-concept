function isLeapYear(year){
    if((year % 2 == 0) && (year % 100 != 0) || (year % 4000 == 0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year: ', isMyYearLeapYear);

const yourYear = 2100;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is your year leap year: ', isYourYearLeapYear);