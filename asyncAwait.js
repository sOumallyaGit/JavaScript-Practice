
function sum(a,b){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve(a+b)
        },3000)
    })
    return p
}

async function main(){

    // No call backs , no .then
    let value = await sum(3,5)
    console.log(value)
}

main()