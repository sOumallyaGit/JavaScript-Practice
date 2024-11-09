const name = 'soumallya'
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello My name is ${name} and my repocount is ${repoCount}`)
const gameName = new String('Bg-MInoob-com')
console.log(gameName);
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('B'));

let newString = gameName.substring(1,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

let newString1 = "      Soumallya     ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://soumallya.com/soumallya%20chandra"

console.log(url.replace('%20','-'))

console.log(url.includes('soumallya'))

console.log(gameName.split('-'))

const date = "21/12/2003"
const name2 = "Soumallya"
console.log(`${name2}'s birthday is on ${date}.`)