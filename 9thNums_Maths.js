const score = 400
console.log(score);

const balance = new Number (300)
console.log(balance);
console.log(typeof balance);


console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(typeof balance)

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))


const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));


/*MATHS*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.67788));
console.log(Math.ceil(4.67788));//chooses the higher value
console.log(Math.floor(4.67788));//chooses the lowest value
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random());//it gives value in between 0 and 1
const randomNumber = (Math.floor(Math.random()*10) + 1);
console.log(`Value of Random Number is ${randomNumber}`);

const min= 10
const max=20

console.log(Math.floor(Math.random()*(max - min +1) + min));//formula to print numbers in between range