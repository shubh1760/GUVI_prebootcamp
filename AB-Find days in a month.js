let months=[31,28,31,30,31,30,31,31,30,31,30,31];
a=userInput[0];
if (1<=a && a<=12)
{
for(i=0;1<12;i++)
{
if (a==i+1)
console.log(months[i]);
}
else
console.log("Error");