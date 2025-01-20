console.log(10+10)
// console.log("10"+10);
// console.log(10+"10");
// console.log("10"+"10")

console.log("10a"-10)//NaN
console.log("hello"+null)
console.log(null+undefined) //NaN
console.log("hello"-10)//NaN

console.log(true-"hello")//NaN
console.log(false+"hello")//hellotrue //hellofalse
console.log("a"-"a")//NaN
console.log("a"/"a")//NaN
console.log("a"/2)//NaN
console.log(Number(undefined));
console.log(10)

var a=Symbol("hello");
var b=Symbol("hello");
console.log(a==b)    // Symbol is the primitive datatype 
                     //Symbol is used to give unique identification of variable 
console.log(a===b)   // Symbol is always unique





