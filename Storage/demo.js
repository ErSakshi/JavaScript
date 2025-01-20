//! browser provides storage of 5mb
//! there are two types of storage
//! we can store only strings in this

//todo local storage=5mb
//todo session storage=5mb
//todo total= 5mb + 5mb = 10mb
//?1.local storage : data will remain untill we remove it manually
//?2.session storage : data will remain untill the session is going on
//here we use two methods 
//1.getItem()
//2.setItem()
//3.removeItem()


// let password="12345"
// let userName="Tinku123"
// sessionStorage.setItem('meraPassword',password)
// sessionStorage.setItem('mearUserName',userName)
// //todo  Application-> session storage
// console.log(sessionStorage);


// let password="12345"
// let userName="Tinku123"
// localStorage.setItem('meraPassword',password)
// localStorage.setItem('meraUserName',userName)
// //todo  Application-> session storage
// localStorage.clear()
// console.log(localStorage);
//? data remain until we clear it using clear()
//? clear() remove all the data
//!it will remove using clear()

//! to get data from database
// let TinkuUserName=localStorage.getItem('meraUserName') //? we will get data from database
// console.log(TinkuUserName);

// localStorage.removeItem('meraUserName')
// console.log(localStorage);

//! removeItem() : it will remove only one item from the database


//! 22-10-2024
//todo  Strict Mode
//restricted the use of this variable in global scope
//it will not allow duplicate parameters but without using it also not allow using duplicate parameter
// using strict it will not allowed to use variable without declaration in global scope

//? it will catches common errors like
//1. Assingning values to non-variable properties
//2.Using undeclared variables
//3.Deleting undeclared variables
//4.duplicate property names in obj
//5.using reserved keywords as variable names
//6.Octal value not allowed 
'use strict'
//code

//! 23/10/2024
console.log("hello");
let heading=document.querySelector("h1")
console.log(heading);

//!async
// async is used when we are writing script tag in head tag
//it will check javascript code and if it has html element then it checks html code also 
//it is used mostly

//! defer  
//defer is used when we are writing script tag in head tag
// defer will check html and js file simultaneously 




3