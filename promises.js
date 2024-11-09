const fs = require("fs")
const { resolve } = require("path")
//Async Function
function promisePractice(){
    return new Promise(function(resolve){//Promises must have first arguement as a function and functon must have first arguement as resolve
        fs.readFile('a.txt','utf-8',function(err,data){
            resolve(data)
        })
    })
}

function ondone(data){
    console.log(data)
}

promisePractice().then(ondone)