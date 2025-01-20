//! 5.reduce()
//TODO reduce()
//? it is an higher order function
//? its first parameter is Accumulator
//? it stores return value implicitly
//? which can add two arguments first is callback function and second is initial value
//? it will reduce array and return single value

//! Syntax : reduce((acc,val,ind,)=>{return},initialvalue)
let arr = [10,20,30,40]
let addition=arr.reduce((Accumulator,val,ind,wholeArray)=>{
  return Accumulator+=val
  },1000)
console.log(addition);

//! 6 :find()
//TODO find((val,ind,wholeArray)={})
//? 

let data=[{
    "first_name": "Gwenni",
    "last_name": "Arghent",
    "gender": "Agender"
  }, {
    "first_name": "Janka",
    "last_name": "Earpe",
    "gender": "Female"
  }, {
    "first_name": "Garfield",
    "last_name": "Benninck",
    "gender": "Male"
  }, {
    "first_name": "Corbett",
    "last_name": "Placidi",
    "gender": "Male"
  }, {
    "first_name": "Lorinda",
    "last_name": "Deans",
    "gender": "Female"
  }, {
    "first_name": "Julina",
    "last_name": "Kunkler",
    "gender": "Female"
  }, {
    "first_name": "Lindsay",
    "last_name": "Burman",
    "gender": "Female"
  }, {
    "first_name": "Prisca",
    "last_name": "Leynton",
    "gender": "Female"
  }, {
    "first_name": "Anya",
    "last_name": "Haslum",
    "gender": "Female"
  }, {
    "first_name": "Etti",
    "last_name": "Ditzel",
    "gender": "Female"
  }]
 

 let value=data.find((val)=>{
    return val.first_name=="Anya"
 })
 console.log(value);
//!------------------------------------------------------------------
 let cardItems =[]
 let values =data.find((val)=>{
    return val.first_name=="Anya"
 })
 console.log(value);
 cardItems.push(values);
 console.log(cardItems);
 
 //filter return multiple value
 //filter return array
 //find return single value
 //find cannot return array

 //? forEach is used to iterate over the array
 //? map is used to iterate over the array
 //? filter is used filter the array based on condition
 //? find is used to filter array for particular element
 //? sort is used to sort original array
 //? reduce is used to reduce single value
 
 