// task 1
// Given a number round it to the nearest 50 without using “if” operator
// (conditions).

let num = +prompt('Enter a number');
switch (true){
    case (num % 50 < 25):
        console.log (num - num % 50);
        break;
    default:
        console.log (num - (num % 50) + 50);
}

// task 2
// Find the sign of product of three numbers without multiplication
// operator. Display the s pecified sign.


let length = 3;
let countNegative = 0;
let countPositive = 0;
let count0 = 0;
for( let i = 0; i < length; i++){
    let num = +prompt("Enter a number");
    if (num === 0){
         count0 += 1;
    }else if(num < 0){
        countNegative += 1;
    }else if(num > 0){
        countPositive += 1;
    }
}
if (count0 > 0){
    console.log(" unsinged ");
} else if(countNegative % 2 === 1 || countNegative === length){
    console.log(" - ");
}else{
    console.log(" + ");
}
// task3
// Insert a digit and a number. Check whether the digits contains in the
// number or not.

let digit = +prompt("Enter a digit");
let number  = prompt("Enter a number");
  

