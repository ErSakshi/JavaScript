// let obj ={
//     "user name" :"Tinku",
//     age : 13,
//     add :"Pune",
//     alarm : ()=>{
//         console.log();
        
//     }
    
// }

// let Object =new Object({name :"Tinku"})
// console.log(Object);


// class CreateObject {
// constructor(name){
//     this.name=name
// }}
// let ob1 =new CreateObject("Tinku")

// let CreateObj = (name ,qua,yop,marks,email,contact)=>{
//    let obj ={
//     name ,
//     qua ,
//     yop ,
//     marks ,
//     email,
//     contact
//    }
//    return obj;
// }

// let obj1 =CreateObj("Sakshi","B.tech",2024,99,"sakshi@gmail.com",908765433)

// !converting object into array
let obj ={
    
    name : "Tinku",
    add : "Pune"
}
let result1=Object.entries(obj);
console.log(result1);


// //!converting Array into Object 
// let arr = [[name,"Tinku"],
// ["add","Pune"]]  
// let result=Object.fromEntries(arr)
// console.log(result);


// //!Converting Array into Object
// let arr1 = [["num1",10],["num2",20],["num3",30],["num4",40]]
// let result2 =Object.fromEntries(arr1);
// console.log(result2);

let Object1 ={
    name : "Tinku"
}
let add ={
    loc : "Pune",
    area : "Deccan",
    houseNo : 24
}
let institute ={
    insname : "Qspiders"
}
Object.assign(Object1 ,add,institute)
console.log(Object1);

