const name = "hitseh";
const repoCount = 160;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// Always Use This Type Of Syntax

const gameName = new String("hitesh-ch-com");
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


const newStringOne = "   hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhry";
console.log(url.replace('%20', '-'));

console.log(url.includes('%20'));

console.log(gameName.split('-'));
