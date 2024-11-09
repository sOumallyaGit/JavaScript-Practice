function sum(a,b,fnToCall){//Function goes as a parameters to a function
    let result = a + b;
    fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is : "+data)
}

function displayResultPassive(data){
    console.log("Sum's result is : "+data)
}

console.log(sum(1,2,displayResultPassive))//callbacks 