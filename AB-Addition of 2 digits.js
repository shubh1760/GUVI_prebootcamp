// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let a =userInput[0];
  let b=userInput[1];
  let sum=(+a)+(+b);
console.log(sum);  
});