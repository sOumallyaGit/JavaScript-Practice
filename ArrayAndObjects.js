let personArray = ['Soumallya', "Ani", "Ichigo"]

console.log(personArray)
console.log(personArray[1])


let numbers = [1, 3, 5, 2, 78, 4, 10]


// Q1
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}

// Q2
let biggest = 0
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > biggest) {
        biggest = numbers[j]
    }
}


console.log("Biggest Number : " + biggest)

// Object 
let personObject = {
    firstName: "Soumallya",
    gender: "male",
    age: 21
}

console.log(personObject.age)
console.log(personObject["gender"])



// Q2
let users = [{
    firstName: "Soumallya",
    gender: "male",
    age: 21
},
{
    firstName: "Ani",
    gender: "female",
    age: 24
}]

console.log(users[1]["gender"])

for (let i = 0 ; i<users.length ; i++){
    if(users[i]["gender"]=="female"){
        console.log(users[i]["firstName"])
    }
}

