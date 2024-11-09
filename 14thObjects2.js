//const tinderUser = new Object()//singleton
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName : "Soumallya",
            lastName : "Chandra"
        }
    }
}

console.log(regularUser.fullname.userFullName);
console.log(regularUser);

const object1 = {
    1:"a",
    2:"b"
}
const object2 = {
    3:"a",
    4:"b"
}
//Merging 2 objects
const obj3 = Object.assign({},object1,object2)

const object4 = {object1,object2}//not the right way

const obj5 = {...object1,...object2}//spread opearator

console.log(obj3);
console.log(obj5);
console.log(object4);

//Array Object
const users=[
    {
        id:1,
        email:"noob@gmail.com"
    },
    {
        id:1,
        email:"noob@gmail.com"
    },
    {
        id:1,
        email:"noob@gmail.com"
    },
]
console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//To know if this property is available or not