console.log("hello");
console.log(undefined);
var a=undefined;
var b=null;
console.log(a,b);
console.log(a-b)
console.log(a*b);


var salary;  //here it defined that salary is not defined
console.log(salary);

var salary=null;  //it shows that salary is null
console.log(salary);
var salary=9876;
console.log(salary);

var userInput=prompt("Enter your name")  //it is used as scanner to take input at runtime
console.log(userInput,typeof(userInput));  // promt is belong to brower it cannot run in terminal

// let num=Number(userInput)
// console.log(num,typeof(num));

let num1=parseInt(userInput)  //if input is 23 years 
                             // output is 23 'number'
console.log(num1,typeof(num1)) //it will parse the string into number datatype only if it is starting with number
//if string is like "i am 23 years old it will not convert into number "
//output is like NaN(not a number) NaN 'number');

//










