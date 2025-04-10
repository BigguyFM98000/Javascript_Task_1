// Exercise 1: Numbers
let intNum = 8;
let floatNum = 6.95;
let sum = intNum + floatNum;
let diff = intNum - floatNum;
let product = intNum * floatNum;
let quotient = intNum / floatNum;
let modulus = intNum % floatNum;
let exponent = floatNum ** intNum;

console.log(`The sum is ${sum}`);
console.log(`The difference is ${diff.toFixed(2)}`);
console.log(`The product is ${product}`);
console.log(`The quotient is ${quotient.toFixed(2)}`);
console.log(`The modulus is ${modulus.toFixed(2)}`);
console.log(`The exponent is ${exponent.toFixed(2)}`);

// Exercise 2: Boolean and Operators
let results = 5 > 2;
let x = 8;
let y = 12;

if(x > y){
    console.log("x is greater than y");
}
if(x <= y ){
    console.log("x is less than or equal to y")
}
if(x === y){
    console.log("x is equal to y");
}
if(x !== y){
    console.log("x is not equal to y")
}

let a = true;
let b = false;
console.log(a && b, "a AND b");
console.log(a || b, "a OR b");
console.log(!a, "NOT a");

let p = 10;
p += 5;
console.log("After p += 5:", p);
p -= 5;
console.log("After p -= 5:", p);
p *= 5;
console.log("After p *= 5:", p);
p /= 5;
console.log("After p /= 5:", p);
p %= 5;
console.log("After p %= q:", p);