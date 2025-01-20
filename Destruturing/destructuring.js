//!DESTRUCTURING

let obj ={
    name :"Tinku",
    add :"Pune",

}
//console.log(add);

//! Destructing is the process of extracting the values out from arrays and object 

//! Destructuring of Object
//?  Object dont have index
// let backpack ={
//     item1 :"Water Bottle",
//     item2 :"Tiffin",
//     item3 :"Camera",
//     item4 :"Charger",
//     item5 :"Torch",
// };
// console.log(backpack.item5); // without using it every time 

// let{item2,item5,item3}=backpack  // we destructure the value
// console.log(item5);

//! Destructing of Array
//let arr=["waterbottel","Tiffin","Charger","Torch","Camera"]
//let[i1,i2,i3,i4,i5]=arr
//todo  ... rest parameter(rset is parameter)
//todo rest will allow extra element to rest in variable
//todo spread is operartor
// let[i1,i2,i3,...i4]=arr   //? rest is used to add remaining elements in array
// console.log(i4);-


// console.log(i1);

//let[state,setState]=useState()
//? Array have index so it maintains the flow
//let[i5]=arr
//console.log(i5); //? as per the index this key assign to 0th index

//! Spread operator
let arr=["waterbottel","Tiffin","Charger","Torch","Camera"]

let func=(val1,val2,val3)=>{
   console.log(val3);
   
}
func(...arr)  //? shortest way of destructuring // here we are using spread
//func(arr[0],arr[1],arr[2])
//func("waterbottel","Tiffin","Charger","Torch","Camera")


//! Rest-LHS                                Spread-RHS
//! it will make elements rest              it will make elements spread
//! parameter                               Operartor
//!                                         spread will expand iterable elements
//todo we can also destructure
let str="Sakshi"
//let[a,b,c]=str
//let[a,...b]=str  //todo it is in Rest

console.log(...str);


//! 3 rd way to create deep copy in javascript
let backpack ={
    item1 :"Water Bottle",
    item2 :"Tiffin",
    item3 :"Camera",
    item4 :"Charger",
    item5 :"Torch",
};
console.log(backpack);
console.log({...backpack});// using spread

 let deepCopy=({...backpack})
 deepCopy.name="Tinku";
 console.log(backpack);
 console.log(deepCopy);
 
 let arrays=[10,20,30,40]
 console.log({...arrays});
 let dp=({...arrays})
 dp.add=50;
 console.log(dp);
 console.log(arrays);
 
 


 