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
let count0 = 0;
for( let i = 0; i < length; i++){
    let num = +prompt("Enter a number");
    if (num === 0){
         count0 += 1;
    }else if(num < 0){
        countNegative += 1;
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

let digit =+ prompt("Enter a digit");
let number =+ prompt("Enter a number");
let numberDigit;
while(number > 0 ){
	if( number % 10 === digit ){
		numberDigit = number % 10;
		break;
	}
		number = (number - number % 10 )/10; 
  }
if(numberDigit >= 0 ){
	console.log ("Yes");  
}else{
	console.log("No");
}

// task4
// Enter a number. Find the difference between its biggest and smallest
// digits.

let number =+prompt ("Enter a number"); 
if (number < 10){
    console.log("0")
}else{
    let numberDigit;
    let max = 0;
    let min = 9;
    while(number > 0 ){
        numberDigit = number % 10;
        if (numberDigit > max){
	        max = numberDigit;
		}else if(numberDigit < min){
            min = numberDigit
        }
	number = (number - number % 10 )/10; 
  }
let diff = max - min;
    console.log(diff);
}

// task5
// Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

let number = +prompt("Enter a number");
let count = 0;
for(let i = 2; i < number/2; i++){
	if( number % i === 0){
    count += 1;
    }
}
if(count > 0){
	console.log("No")
}else{
	console.log("Yes")
}
  

