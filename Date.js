const currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getFullYear())


function calcuatesum(){
    let a = 0;
    for (let i = 0; i<100000000;i++){
        a = a+i
    }
    return a;
}
// How much time function took to run
const beforeTime = new Date();
const beforeTimeInMs = beforeTime.getTime()

calcuatesum();

const aftertime = new Date();
const aftertimeInMs = aftertime.getTime()

console.log(aftertimeInMs-beforeTimeInMs)

// Current time
console.log(currentDate.getTime())


const currentTime = currentDate.toLocaleTimeString(); // e.g., "5:23:17 PM"
console.log(currentTime);
