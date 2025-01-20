

// let obj1 = new Object();
// console.log(obj1);



// obj1.name="Tinku",
// console.log(obj1);
// obj1.add="Pune",
// console.log(obj1);
// //creating object
// let obj={
//     name:"Pinku",
// }
// console.log(obj);
// obj.add="Pune",
// console.log(obj);

// //updating name
// obj.name="Pinky"
// console.log(obj);
// obj.add="Deccan"
// console.log(obj);

// //deleting 
// delete obj.add
// console.log(obj);


// //ways to declare the object in javascript
// //1.Object literal way
// //let obj ={
// //  key : "value"}
// //}

// //2.using new keyword and object class
// //let obj =new Object({name: "Tinku"})
// //console.log(obj);

//3.using classes in java
class CreateObj{
    constructor(name){
        console.log(name);
        this.name=name;
        
    }
}
let obj1= new CreateObj("Tinku")
console.log(obj1);
let obj2=new CreateObj("Rinku")
console.log(obj2);

//4.using Factory function
let createObj =(name ,add)=>{
    let obj ={
        name : name,
        add:add
    }
    return obj
}
let student1 = createObj("Tinku","Pune")
let student2 =createObj("Rinku","Lonavala")
let student3 =createObj("Pinku","Pimpri")
console.log(student1,student2,student3);


//!Arrays
// let arr=["mobile","Purple","Oppo"]
// console.log(arr);

// let arr1 =["mobile",1000,null,undefined,()=>{
//     console.log(("funct"));
//     },{name : "Giya"},[item1,item2]]
//     console.log(arr);
//     console.log(arr[arr.length-1]);
    
    

let arr=[10,20,30,40]
console.log(arr);
// arr.push(50)   //!insert element at lastindex  of array
// console.log(arr);
// arr.pop()        //!remove last elemnet from array
// console.log(arr);
//!add the element at the start of array
arr.unshift(100)
console.log(arr);
//!remove the first element of an array
arr.shift()
console.log(arr);

//!finding the index value
console.log(arr.indexOf(10));
//! finding the value present on particular index
console.log(arr.at(0));

//!iterating over object using forIn loop which is not possible using another loop
let obj={
    name:"Tinku",
    age:23,
    add:"Pune"
}
for(val in obj){
    console.log(val);  //it gives only key
    console.log(obj[val]); //it gives  value
    
}











