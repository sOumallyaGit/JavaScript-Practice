const course = {
    courseName:"Js in hindi",
    price:1000,
    courseInstructor:"Hitesh",
}

console.log(Object.keys(course))
console.log(Object.values(course))
console.log(Object.entries(course))
console.log(Object.hasOwnProperty("UD"))

let newObj = Object.assign({},course,{time:"40hrs"})
console.log(newObj)