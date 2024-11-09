/* Primitive data type uses stack memory(stack always give us copy)
and non primitive data type uses heap memory(heap always gives us reference)*/
let myYoutubename = "SoumallyaChandra"
let anotherName = myYoutubename

anotherName = "Chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email:"soumallya2112@gmail.com",
    upi:"soumallya@ybl",
    phoneNumber:7003631894,
}
let userTwo = userOne

userTwo.email = "noob@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);