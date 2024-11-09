//Singleton,,objects are singleton when made with construstor

//Object literals
//Object.create // Constructor Method

const mySym = Symbol("key1")//Declaring Symbol
const jsUser = {
    name : "Soumallya",
    "full Name":"Soumallya Chandra",//Now u cannot access it with dot(.)
    [mySym]:"myKey1",//Correct Syntax fro symbol
    age : 18,
    location: "Jaipur",
    email : "soumallyachandra.chandra22@tnu.in",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}
console.log(jsUser["email"])
console.log(jsUser.email);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email = "soumallya2003@gmail.com"
//Object.freeze(jsUser)//To stop changes in object

jsUser.email = "soumallya2112@gmail.com"//This will not get printed or changed becuase the object is freezed
console.log(jsUser);
//console.table(jsUser)

jsUser.greeting = function () {
    console.log("Hello Js User");
}
jsUser.greeting2 = function() {
    console.log(`Hello Js User,${this.name}`);
}

console.log(jsUser.greeting2());
console.log(jsUser.greeting);
console.log(jsUser.greeting());

//U will Use  in the most of the cases but sometimes in special we will have to use [] brackets

