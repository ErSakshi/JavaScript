let Personal = {
    name : "Tinku",
    age  :23,
    pmobile :  89076
}
let office ={
    Ocontact : 78906
}

let AllaboutTinku =Object.assign({},Personal,office)
console.log(Personal);
console.log(AllaboutTinku);


//! Shallow-Copy - Changes done in copy  will affect Parent object  so it called Shallow copy because they are pointing towards the same address


let copy =Personal;
console.log(copy);
copy.add ="Pune";
console.log(copy);
console.log(Personal);  //? Shallow-copy 



//! Deep Copy -it will not affect the parent even if we modify in copy of the parent.
//!JSON Object
//its key are in the form of String 
//Stringify method is used to convert js object into json  object
//parse() is to convert json object into js Object
let obj ={
    name : "Tinku",
    age :23,
    add : "Pune"
}
let jsonObj = JSON.stringify(obj);
console.log(jsonObj);
let newJsObj = JSON.parse(jsonObj);
console.log(newJsObj);  //!deep-copy

 newJsObj.loc= "Deccan";
 console.log("newObject",newJsObj);   //? changes done in new object
 console.log("original object",obj);      //? original object cannot be modified
 
 


