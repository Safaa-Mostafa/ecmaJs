//operator
//Using rest parameter and spread operator return min and max value from any array.
//note: array length is not fixed return min and max value and display each of
//them separately after function call.

let x= (...numbers)=>{
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));


 }

 x(3,4,6,8,9)

