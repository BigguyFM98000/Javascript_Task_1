// Exercise 1: Temperature check
const temperature = 18;
if(temperature < 0){
    console.log("It's freezing");
} else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold");
} else if(temperature > 15 && temperature <= 25){
    console.log("It's mild");
} else {
    console.log("It's warm");
}

// Using switch statement
switch(true){
    case (temperature < 0):
        console.log("It's freezing");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold");
        break;
    case (temperature > 15 && temperature <= 25):
        console.log("It's mild");
        break;
    default:
        console.log("It's warm");
}

// Exercise 2: Divisibility Check
const num = 9;
if(num % 2 == 0 && num % 3 == 0){
    console.log("Divisible by both");
} else if(num % 2 == 0){
    console.log("Divisible by 2.");
} else if(num % 3 == 0){
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Using switch statement
switch(true){
    case (num % 2 == 0 && num % 3 == 0):
        console.log("Divisible by both");
        break;
    case (num % 2 == 0):
        console.log("Divisible by 2.");
        break;
    case (num % 3 == 0):
        console.log("Divisible by 3.");
        break;
    default: 
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
// Printing numbers from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Printing numbers divisible by 2
for(let j = 1; j <= 20; j++){
    if(j % 2 == 0){
        console.log(j, "even numbers");
    }
}

// Finding the sum of numbers from 1 to 100
let total = 0;
for(let i = 1; i <= 100; i++){
    total += i;
}
console.log(total, "total from 1 to 100");

// Printing all the numbers in the array
const numbers = [1, 2, 3, 4, 5];
for(let j = 0; j < numbers.length; j++){
    console.log(j, "numbers");
}

// Finding the highest number from an array
const numberz = [3,7, 2, 5, 10, 6];
let highest = Math.max(...numberz);
console.log(highest, "highest");

// Exercise 4: While loops
// Printing numbers from 1 to 10
let counter = 1;
while(counter <= 10){
    console.log(counter);
    counter++;
}

// Even numbers between 1 and 20
let num1 = 1;
while(num1 <= 20){
    if(num1 % 2 == 0){
        console.log(num1, "even");
    }
    num1++;
}

// Sum of numbers from 1 to 100
let num2 = 1;
let sum = 0;
while(num2 <= 100){
    sum += num2;
    num2++;
}
console.log(`The sum is ${sum}`);

// Numbers divisible by 5 and less than 50
let num3 = 1;
while(num3 < 50){
    if(num3 % 5 == 0){
        console.log(num3);
    }
    num3++;
}

// Exercise 5: Do While loops
let num4 = 1;
do{
    console.log(num4, "numbers");
    num4++;
} while(num4 <= 10);

// Sum of numbers from 1 to 100
let result = 0;
let num5 = 1;
do{
    result += num5;
    num5++;
}while(num5 <= 100);

// Number greater than 10
let num6 = 0;
do{
    num6 = parseInt(prompt("Enter a number above 10: "));
}while(num6 <= 10);

// Guessing game
let guess = 0;
let correct = 5;
do{
    guess = parseInt(prompt("Enter a number between 1 and 10: "));
}while(guess !== correct);
