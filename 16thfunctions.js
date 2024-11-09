function sayMyName(){
    console.log("S");
    console.log("0");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("L");
    console.log("L");
    console.log("Y");
    console.log("A");
}
sayMyName/*Reference*/()//excute

function addTwoNumbers(num1,num2)/*Parameters*/{
    console.log(num1+num2)
}

addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const results = addTwoNumbers(3,5)
console.log("Results :",results);

function addTwoNumbers2(num1,num2){
    // let results = num1+num2
    // return results
    return num1+num2
}
// In function after returning the value no other line of code does not work

const finalresults = addTwoNumbers2(3,6)
console.log(`Results : ${finalresults}`);


function SubTwoNumbers(a,b){
    return a-b
}

const sub= SubTwoNumbers(9,5)
console.log(sub)