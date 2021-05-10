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
  let i=userInput[0];
if (i==0)
console.log("Zero");
if (i%1 !=0)
    i=Math.round(i);

if (i%2 ==0)
{console.log("Even");}
else
{console.log("Odd");}


});