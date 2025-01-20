let arr =[10,20,30,40,50];
//! forEach() is a Higher orderfunction vvvvimp
arr.forEach((ele)=>{});

//!implicit return - no need of curly and round braces
//! if there's only 1 argu/parameter no need of()
let a=(val)=>"Hello";  //returnvalue ="Hello"
console.log(a());


let fruitsArr =["Mango","Apple","Banana","Orange","Strawberry"];
//! we can also pass normal function to forEach
//!we can get (1st parameter)element,(2nd parameter)index and(3rd parameter) whole arrayusing
//!we can't get indexes directly
fruitsArr.forEach((ele,ind,vArr)=>{
    console.log(`${ele}: ${ind}`);
    // console.log(ind);
    // console.log(vArr);
    
    
});
fruitsArr.forEach((ind)=>{
    console.log(ind);
    
})


