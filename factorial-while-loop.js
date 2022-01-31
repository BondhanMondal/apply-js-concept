// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log('factorial of 7 is: ', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('factorial of 9 is: ', secondFactorial);

//decramenting loop

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log('my factorial is: ', myFactorial);


//for loop reverse

function getFactorial2 (number){
    let factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial2 = getFactorial2(6);
console.log('my factorial is: ', myFactorial2);