/*Primitive(Call BY Value)
  7 Types:
  1.String
  2.Number
  3.Boolean
  4.Null(Empty its not 0)
  5.Undefined
  6.Symbol
  7.BigINT


Reference Type Or Non Primitive

1. Array
2. Objects
3. Functions



*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTeamp = null

let userEmail 

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);//false despite the values are same but they return diffrent things thats how Symbol works

const bigNumber = 31423732427257826572652347n // it is a big int

const heros = ["noob","Spiderman"]
let myObj = {
    name:"Soumallya",
    age : 18,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
