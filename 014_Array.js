
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Naagraj", "Aladin"]

const myArr2 = new Array(1, 2, 3)

// console.log(myArr[1]);
// console.log(myHeroes);
// console.log(myArr2);
// console.log(typeof myHeroes);


// Array Method

// myArr.push(6)
// myArr.push(8)
// myArr.pop()           remove of last element

// myArr.unshift(9)       Add Very First Element
// myArr.shift()            Remove Last Element

// console.log(myArr.includes(9));     Asking Question
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("b ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



