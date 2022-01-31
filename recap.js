//variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

//array
var partners = ['sajid', 'mojid', 'lajid', 'nojid'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajid');
partners.pop();
// element index -1 means that the element does not exists in the array

//conditional
if (bookPrice < 150){
    console.log('i will buy this book');
}
else{
    console.log('mama kichu discount den na, aponi na mama');
}

//loops
var i = 0;
while (i < 17){
    //do some work
    i++
}

for(var i = 0; i < 7; i++) {
    //do something
}

//function

function isMoonUp( time){
    if (time >= 19 && time <= 5){
        return true;
    }
    return false
    
}

var moonStatus = isMoonUp(21);


//let const

//value of the variable could change
let price = 27;
price = 29;
price = 31;

//value of the variable will not change
const myName = 'lal e lal mr. helal'
console.log(myName);
myName = 22;