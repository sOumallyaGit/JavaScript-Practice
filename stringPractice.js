// String Length
let a = "Soumallya Chandra Chandra"
function stringLenght(str){
    return str.length
}
console.log(stringLenght("Soumallya"))


//index Of
function index(str,target){
    return str.indexOf(target)
}
console.log(index(a,"Chandra"))


//lastIndexOf
function Lastindex(str,target){
    return str.lastIndexOf(target)
}

console.log(Lastindex(a,"y"))


// Slice
let game = "Pokemon"
console.log(game.slice(1,3)) // Last Index is excluded


//Replace string
let fullName = "Soumallya Chandra Chandra"
console.log(fullName.replace("Chandra","Roy"))

 
//Split
let anime = "Naruto Uzumaki"
console.log(anime.split(" ")) //gives output in the form of array


//Trim
const value = "   Soumallya    "
console.log(value.trim())

//toUpper / toLower
const alpha = "soumallya"
console.log(alpha.toUpperCase())

const bigAlpha = "SOUMALLYA"
console.log(bigAlpha.toLowerCase())