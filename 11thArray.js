const myArr = [0,1,2,3,4,5]
const myHeros = ['spiderman','batman']
const myArr2 = new Array(1,2,3,4)
console.log(myArr[2]);

//Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(6)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArray = myArr.join()

console.log(myArr);
console.log(newArray);
console.log(typeof newArray);

//Slice, Splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)//3 does not get included
console.log("A",myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//it completely manipulates the original array
console.log(myArr)
console.log(myn2);