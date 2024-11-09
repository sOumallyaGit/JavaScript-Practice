let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//Month Starts From 0 in Java Script January = 0 ; February = 1;
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let mySpecificCreatedDate = new Date(2023, 0, 23,5,3)
console.log(mySpecificCreatedDate);
console.log(mySpecificCreatedDate.toLocaleString());

let myMoreSpecificCreatedDate = new Date("2023-01-15")//(YYYY-MM-DD)format
console.log(myMoreSpecificCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myMoreSpecificCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))//to get microseconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())//Printinhg Week Day
console.log(newDate.getMonth()+1)//printing Month

newDate.toLocaleString('default',{
    weekday:"long",
})
