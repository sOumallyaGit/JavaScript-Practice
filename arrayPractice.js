const arr = [1,2,3,4,5]


//push opearation
arr.push(6)
console.log(arr)


// Pop Opeartaion
arr.pop()
console.log(arr)

//pop something from the front we use shift
arr.shift()
console.log(arr)


//push something from the front we use unshift
arr.unshift(12)
console.log(arr)

// concat
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3)

//forEach
function print(str){
    console.log(str)
}

let arr4 = [1,2,3,4,5,6]

arr4.forEach(print)

function onePlus(number){
    result = number + 1
    console.log(result)
}
console.log("For Each Practce")
arr4.forEach(onePlus)

// callbacks , Map , Filter , Find , Sort