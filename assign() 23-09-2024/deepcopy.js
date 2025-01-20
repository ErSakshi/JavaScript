//!Closure is created inside Heap Area
//!2nd way to create deepcopy using assign()
// let obj ={
//     name :"Tinku",
//     age : 23
// }
// let copy =Object.assign({},obj);
// console.log("copy before adding add",copy);
// copy.add ="Pune";
// console.log("copy after adding add",copy);
// console.log("Original object after adding add",obj);


//! this keyword
//? in global scope "this" keyword points towards the window object
//! arrowfunction + this = Window Object


//!Global Sope
let funct1 =function(){
 console.log(this);          //todo : points towards the window object
  
}
let funct2 =()=>{
    console.log(this);      
    
}
funct1();
funct2();

// let obj ={
//     name :"Tinku",
//     age :23,
//     funct1 :function(){
//        console.log("normal function in object ",this);
       
//     },
//     funct2 :()=>{
//         console.log("arrow function in object",this);    //? arrow function always pointing towards window object
        
//     }
// }
// obj.funct1();
// obj.funct2();


//! There is only one scenario in arrow function  when this variable is pointing towards current object when it is nested function because of Leical Scope

let obj ={
    name :"Tinku",
    age :23,
    funct1 :function(){
        console.log("Parent function",this);
        
        let a=10;
        console.log("parentfunction",a);
        
        let nestedFunct =()=>{
            console.log(a);
            console.log("nested arrow function",this);
            
        }
        nestedFunct();
    }
}
obj.funct1();
//! 3 rd way to create deep copy using spread operator in javascript 
let backpack ={
    item1 :"Water Bottle",
    item2 :"Tiffin",
    item3 :"Camera",
    item4 :"Charger",
    item5 :"Torch",
};
console.log(backpack);
console.log({...backpack});

 let deepCopy=({...backpack})
 deepCopy.name="Tinku";
 console.log(backpack);
 console.log(deepCopy);
 
