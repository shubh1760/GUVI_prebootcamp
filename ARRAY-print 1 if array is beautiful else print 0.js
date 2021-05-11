let n=userInput[0];
let array=[];
array.length=n;
array=userInput[1].split(" ");
console.log(array);
 let sum = array.reduce( function(a, b){return (+a) + (+b);}, 0 );
 console.log(sum);
 if (sum %2==0 && sum % 3==0 )
 console.log("1");
 else 
 console.log("0");
