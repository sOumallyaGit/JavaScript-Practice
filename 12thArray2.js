const marvelHeros = ['thor','ironman','spiderman']
const dc=['superman','flash','batman']

console.log(marvelHeros);

const allHeroes = marvelHeros.concat(dc)//Concat rturns you a new array
console.log(allHeroes);

const allNewHeros = [...marvelHeros,...dc,]//spread operator
console.log(allNewHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Soumallya"))//Checks if array or not
console.log(Array.from("Soumallya"))//Converts into array
console.log(Array.from({name : "soumallya"}))//Converts into an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
