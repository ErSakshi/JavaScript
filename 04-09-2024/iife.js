//TODO IIFE Immediate Invoke Function Expression
//?immediate invoke functional expression
//?it can be call only once

// ((a)=>{
//     console.log("iffe",a);
    
// })(10);

// let vari= function(varible){
//     console.log("iffe",varible);
    
// }(20);

// (()=>{
//     let val=prompt("Enter your name ")
//     console.log(val);
    
// })()

//TODO : High-order function and call-back function

let value1=(value2)=>{
   console.log("value1 is executed");
   value2()
}
let value2=()=>{
    console.log("value2 is exceuted");
    
}
value1(value2);    //the function in which we pass the value to call another function is called higher order function
                   //the function which is passed as an argument is called  callback function