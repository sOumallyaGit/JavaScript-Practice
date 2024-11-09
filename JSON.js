// JSON.parse
// JSON.stringfy

const user = '{"name" : "SOUMAlLYA","UID" : 40}'

const users = JSON.parse(user)

console.log(users["UID"])



const userObj = {
    name: "SOUMAlLYA",
    UID: 40
}

const finalString = JSON.stringify(userObj)
console.log(finalString)