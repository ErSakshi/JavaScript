
//! prototype is an blueprint of an datatype
//? prototype consists of features of datatype
//!__proto__ is an keyword to check the prototype of an datatype
let obj ={
   name :"tinku"
}
console.log(obj);


//todo the internal implementation of array is object
let arr =[10,20,30,40]
console.log(arr);



//! the internal implementation of every datatype is an object
 
// for number
let num=100;
console.log(num);
console.log(num.__proto__);

//for bigint
let num1=1000n;
console.log(num1);
console.log(num1.__proto__);

//boolean
let num2=true;
console.log(num2);
console.log(num2.__proto__);

//null
let n=null;
console.log(n);
//console.log(n.__proto__);  //todo : cannot find its prototype

//String
let str="Hello"
console.log(str);
console.log(str.__proto__);

//undefine
let a;
console.log(a);
//console.log(a.__proto__); //todo : cannot find prototype of undefined

let func=()=>{}
console.log(func);
console.log(func.__proto__);


//! to achieve inheritence we are assigning the protype of parent in child prototype
let obj1={ 
    name:"Tinku"
}
let obj2={
    surname:"Pandey"
}
console.log(obj1.__proto__);
obj1.__proto__=obj2           //! to achieve inheritence we are iheriting obj2 in obj1 prototype
console.log(obj1.surname);    //! so here we achive an inheritence where obj2 became parent and obj1
                              //! obj1 is child class here we are inhereting property from parent class
















