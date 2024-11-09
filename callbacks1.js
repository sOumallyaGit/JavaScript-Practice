function arithmetic(a, b, fnToCall) {
    result = fnToCall(a, b)
    return result
}

function sum(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let answer = arithmetic(10, 2, divide)
console.log(answer)