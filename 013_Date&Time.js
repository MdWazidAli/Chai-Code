
let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(typeof myTimeStamp);

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.toDateString());
console.log(typeof newDate);


newDate.toLocaleString('dafault',{
    weekday: "long"
})

