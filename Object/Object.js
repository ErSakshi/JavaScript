//! 1: Using Object Literals

let Obj ={
    "user name" : "Sakshi",
    add : "Pune",
    yop : 2024,
    percentage : 77,
    age :23
}
console.log(Obj["user name"]); //Sakshi
console.log(Obj["add"]); //we have pass it in

console.log(Obj);//{user name: 'Sakshi', add: 'Pune', yop: 2024, percentage: 77, age: 23}

//!2  //using new keyword and Constructor
let obj =new Object({education : "B.Tech",name :"Tinku"});
console.log(obj);  //{education: 'B.Tech', name:'Tinku'}
console.log(obj.name);  //Tinku
obj.add ="Pune";
obj.contact =890765;
console.log(obj);


//!3 : Using custom class
class createObject {
    constructor(age){
        this.age=age;
    }
}
let newObj =new createObject(21);
console.log(newObj); //CreateObj {age :21}

//!4 Using factory function
let createStudent =(name,yop,marks,age,email,contact)=>{
    let student= {
      name:name,
      yop :yop,
      age :age,
      marks :marks,
      age :age,
      email :email,
      contact :contact
    }
    return student;
}
 let student1 =createStudent("Sakshi",2024,77,23,"sakshi@gmail.com",9087654321);
 console.log(student1);
 //?-------------------------------------------------------------------------------------

 //!5 :  5th way to create object is Constructor function
function CreateObj (name,add,contact){
    this.name=name;
    this.add=add;
    this.contact=contact;
}
let obj = new CreateObj("Tinku","Pune",89076);
console.log(obj);

 //!converting Array into Object
 let objArr =[["name","Tinku"],["city","Pune"],["state","Maharashtra"]]
 console.log(Object.fromEntries(objArr)); 
 

 //! we cannot convert normal Array into object array should be in the form of key and value pair
 let numArr=[10,20,30,40]
 //console.log(Object.fromEntries(numArr));  //!TypeError: Iterator value 10 is not an entry object
  
let numsArr =[["num1",10],["num2",20],["num3",30],["num4",40]]
console.log(Object.fromEntries(numsArr));
//{num1: 10, num2: 20, num3: 30, num4: 40}

let obj1 ={
    name : "Piu",
    city :"Pune"
}
let obj2={

    course :"Engineering",
    degree :"B.tech"
}
let obj3={
    yop:2024,
    marks :77

}
console.log(Object.assign(obj1,obj2,obj3));
//{name: 'Piu', city: 'Pune', course: 'Engineering', degree: 'B.tech', yop: 2024, …}


 





