function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}


let myinches = 132;
var feet = inchToFeet(myinches);
console.log('Inches in feet: ',feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log(feet);

// var naniInches = 156;
// let feet = inches / 12;
// console.log(feet);

// var nanaInches = 168;
// let feet = inches / 12;
// console.log(feet);


//mile to kilometers

function mileToKilometers(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometers(26.2);
console.log('marathon in km: ', marathon);