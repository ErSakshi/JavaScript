//? High-Order Function
//! 1. ForEach()

let obj =[10,20,30,40,50,20]
console.log(obj.forEach((val)=>{
    console.log(val);
    
}));
console.log(obj);
 // ? it is iterating on array and giving the output in the form of Array

 //! 2. Sort()
 let obj1=[12,34,52,76,19,20,38]
 let value =obj1.sort((val)=>{
    return val;
    
 })
 console.log(value); //TODO it is iterating on array and returning value based on just sorting first digit
 let value1= obj1.sort((a,b)=>{
    return a-b
 })
 console.log(value1); //TODO array is sorting in ascending order

 let value2=obj1.sort((a,b)=>{
    return b-a;
 })
 console.log(value2); //TODO it is sorting array into descending

 //! 3. map()
 let value3 =obj.map((val)=>{
    return val*val
 })
 console.log(value3);   //TODO value is returning and storing in variable which is not possible forEach()

 //! 4. filter()
 let value4 =obj.filter((val)=>{
    return val>=20
 })
 console.log(value4);  //TODO it finds the value and returns in the form of array

 //! 5. reduce()
 let value5=obj.reduce((acc,val,ind,wholeArray)=>{
    return acc+=val
 },10)
 console.log(value5);  //TODO  reduce() performs the operation  and here without taking extra varialbe 
 
 //! 6.find()
 let value6=obj.find((val)=>{
    return val==20
 })
 console.log(value6);  //TODO It checks condition and returns single value if value has multiple occurrence
                      
 
 
 

