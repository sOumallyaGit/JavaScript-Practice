function hello(){
    let p = new Promise(function(resolve){
        resolve("Hi There")
    })
    return p
}

let value = hello()
console.log(value)
value.then(function(data){
    console.log(data)
})