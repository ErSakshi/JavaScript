
//!first way to declare function using expression
// let firstFunc=function(){
//     console.log("First function is executed");
    
// }
// firstFunc()

// let add=function(a,b){
//  console.log(`The addition of ${a} and ${b} is ${a+b}`);
//  }
//  add(100,200)

//  let sub=function(c,d){
//     console.log(`The substraction of ${c} and ${d} is ${c-d}`);
    
//  }
//  sub(500,250)

//  let mul=function(e,f){
//     console.log(`The multiplication of ${e} and ${f} is ${e*f}`);
    
//  }
//  mul(10,20)

//  let div=function(g,h){
//     console.log(`The Division of ${g} and ${h} is ${g/h}`);
    
//  }
//  div(100,5)

//! 2nd way to declare function without expression
// function varName(a,b)
//  {
//     console.log(a,b, "function executed");
    
//  }
//  varName(10,20)

//  function addName(a,b)
//  {
//     console.log(`Addition is ${a+b}`);
    
//  }
//  addName(10,20)

//  function subName(a,b)
//  {
//     console.log(`Substraction is ${a-b}`);
    
//  }
//  subName(10,20)

//  function mulName(a,b)
//  {
//     console.log(`Multiplication is ${a*b}`);
    
//  }
//  mulName(10,20)

//  function divName(a,b)
//  {
//     console.log(`Division is ${a/b}`);
    
//  }
//  divName(10,20)


//! Arrow Function
//  let addFunc =(a,b)=>{
//     console.log(a,b,"Function exceuted")
//  }
//  addFunc(4,5)


//  //intro as an expression
//  let intro1=function(name,city,age){
//     console.log(`My name is ${name} .I am from ${city} and my age is ${age}`);
//     }
//  intro1("Sakshi","Jalna",23)


//? intro without expression
// function intro2(name,city,age){
//     console.log(`My name is ${name} .I am from ${city} and my age is ${age}`);
//  }
//  intro2("Sakshi","Jalna",23)


//? intro with Arrow function
// let intro3 =(name,city,age)=>{
//     console.log(`My name is ${name} .I am from ${city} and my age is ${age}`);
//  }
//  intro3("Sakshi","Jalna",23)


// let order=(name,size,price,addons)=>{
//     console.log(`Here is your order mr ${name} of ${size} size pizza with ${addons} and your bill amount is ${price} 
       
//         !!!...Thank you for order ...!!!
//               keep ordering .....`);
    
// }
// order("Ramesh","large",300,"coke")

// console.log("Animal     Sound ");

// let animalSound=(animal,sound)=>{
//   console.log(` 
//  ${animal}   ${sound}`);
  
// }
// animalSound("Cat","meow-meow")
// animalSound("Dog","bhaw-bhaw")
// animalSound("Lion","Roar")
// animalSound("Cow ","Hambaaaaaa.....")

let mood=prompt("how's your mood today ");
let Mood=(mood)=>{
    switch(mood)
    {
        case "happy":console.log("Today my mood is  happy");
         
    }
}
Mood(mood)