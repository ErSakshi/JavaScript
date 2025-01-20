
//! 5th way to create object is Constructor function
function CreateObj (name,add,contact){
    this.name=name;
    this.add=add;
    this.contact=contact;
}
let obj1 = new CreateObj("Tinku","Pune",89076);
console.log(obj1);
//?-------------------------------------------------------------------------------------------

//! here we are using this keyword in function to make any object as current object
// let superhero ={
//     name :"Spiderman",
//     gf :"Merry",
//     auntName :"Mai",
//     uncle :"Ben"
// } 
// function myFunc (){
//     console.log("Current-Object",this);
//     console.log(this.name);
//     console.log(this.gf);
    
// }
// myFunc.call(superhero)
//?---------------------------------------------------------------------------------------------
//! when we want to make any function to call any object as current object then we use three different methods
//? 1.call()
//? 2.apply()
//? 3.bind()

//! call()
//? comma separated value 
//? called immediately
// let superhero ={
//     name :"Spiderman",
//     gf :"Merry",
//     auntName :"Mai",
//     uncle :"Ben"
// } 
// function myFunc (realname){
//     console.log("Current-Object",this);
//     console.log(this.name);
//     console.log(this.gf);
//     this.realname=realname;
//     console.log(this);
    
    
// }

//?-------------------------------------------------------------------------------------------
//myFunc.call(superhero,"Peter Parker")  
//console.log("Object updated after adding etra features in function ",superhero);

//!apply()  it is used pass arguments in the form of array
//? called immediately
//? arguments are passed in array format
// let superhero ={
//     name :"Spiderman",
//     gf :"Merry",
//     auntName :"Mai",
//     uncle :"Ben"
// } ;
// function myFunc (realname,add){
//     // console.log("Current-Object",this);
//     // console.log(this.name);
//     // console.log(this.gf);
//     console.log(realname,add);
    
    
// }
// myFunc.apply(superhero,["Peter parker","NewYork"])
//?--------------------------------------------------------------------------------------------

//! bind()
//? comma separated values
//? not called immediately 
//? firstly it just binds the function with object and stores the reference
//? and when we want to use them then we call them

// let superhero ={
//     name :"Spiderman",
//     gf :"Merry",
//     auntName :"Mai",
//     uncle :"Ben"
// } 
// function myFunc (realname,add){
//     // console.log("Current-Object",this);
//     // console.log(this.name);
//     // console.log(this.gf);
//     console.log(realname,add);
    
    
// }
// let bindedFunct =myFunc.bind(superhero,"Peter Parker","NewYork");
// bindedFunct()
//?------------------------------------------------------------------------------------------------
let superhero ={
    name :"Spiderman",
    gf :"Merry",
    auntName :"Mai",
    uncle :"Ben"
} 
let villen =["DrOctopus","Green Goblin","Sand Man","Electro"]
function myFunc (vill1,vill2,vill3,vill4){
    // console.log("Current-Object",this);
    // console.log(this.name);
    // console.log(this.gf);
    //console.log(realname,add);
    console.log(vill1);
    console.log(vill2);
    console.log(vill3);
    console.log(vill4);
    }
myFunc.apply(superhero,villen);
myFunc.call(superhero,villen)    //if we call function using call() then it will stores all the arguments in first parameter

//! this points towards current element
let button=document.querySelector("button")
button.addEventListener('click',
     function(){
       this.style.background="red"
    }
)