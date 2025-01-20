//! !. Extract Object Keys
const student ={
    name:"Alice",
    age :22,
    major :'Computer Science',
    GPA :3.8

};
let keys =Object.keys(student)
console.log(keys);
keys.forEach((val)=>{console.log(val +":"+student[val]);
})

//! 2 .Retrive Object Values
const movie ={
    tilte :'Inception',
    director :'Christopher Nolan',
    releaseYear :2010,
    rating:8.8
};
let values =Object.values(movie)
values.forEach((val)=>{console.log(val);
})

//! Convert-Object to Key-Value Pairs
const book ={
    title : '1984',
    author:'George Orwell',
    genre :'Dystopian'
};
let obj =Object.entries(book);
console.log(obj);
obj.forEach((val,ind)=>{console.log(`${val[0]} : ${val[1]}`);
})

//!Recreate Object from Key-Value Pairs
const keyValueArray =[
    ['name','Charlie'],
    ['age',30],
    ['job','Engineer']
];
console.log(Object.fromEntries(keyValueArray));

//! 5
const contactInfo ={
    phone :'123-456-7890',
    email :'john.doe@example.com'
};

const address ={
    street :'123 Main St',
    city :'Anytowm',
    sate :'CA'
}
let userInfo ={}
Object.assign(userInfo,contactInfo,address);
console.log(userInfo);


//!
// const person ={
//     name :'John',
//     age :35,
//     address:{
//         city :'New York',
//         country :'USA'
//     }
// };
// let shallowcopy = Object.assign(person)
// person.address ="London";
// console.log(shallowcopy);
// console.log(person);

//! 7 . 
const person ={
    name :'John',
    age :35,
    address:{
        city :'New York',
        country :'USA'
    }
};
let shallowcopy1 =Object.assign(person)
  let jsonObj = JSON.stringify(shallowcopy1)
  let deepCopy = JSON.parse(jsonObj)
  console.log(deepCopy);
  person.address ="Pune";
  console.log(deepCopy);
  console.log(person);
  
 //! 8.
 let smartphone ={
    name :"OPPOA5",
    RAM :8,
    internalStorage : 256,
    color :"Purple"
 } 
// console.log(smartphone);
 
 let newObj = Object.entries(smartphone)
  newObj.forEach((val,ind)=>{console.log(val[0]+" : "+val[1]);
  })
 //! 9.
 let createCar = (make,model,year)=>
 {
    let car={
        make  :make,
        model :model,
        year : year,
    drive :(make,model)=>{
        console.log(make);
        console.log(model);
        }
        
    };
  return car;
   
 }
 let car1 =createCar("Tata","Safari",1990)
 console.log(car1);
 car1.drive("Tata","Safari")
 
 let car2 =createCar("Tata","Maruti suzuki",1995)
 console.log(car2);
 car1.drive("Tata","Maruti suzuki")
 
 let car3 =createCar("Thar","Sv",2014)
 console.log(car3);
 car1.drive("Thar","Sv")

 //!10
function user(name,mail){
    this.name=name;
    this.mail =mail;
    this.greet =function(){
        console.log(`Hello ${name}`);
        
    }
}
let obj1 =new user("Tinku","tinku@123")
let obj2 =new user("Pinku","pinku@123")
obj1.greet();
obj2.greet();

//!11
let Dog =function (name,breed){
   
    this.name=name;
    this.breed=breed;
    bark:(name,breed)=>{console.log(`${name} is barking`);
    }

}
let dog1 =new Dog("Tommy","Bulldog")
let dog2=new Dog("Moti","GermanSheffard")
console.log(dog1);
console.log(dog2);

//!12
let Movie=function(title,director){
   this.title=title
   this.director=this.director;
   getDetails :(title,director)=>{
   
   }
    return (`${this.title} , ${this.director}`);

}

let movie1=new Movie("3Idiots","Rajkumar Hirani")

console.log(movie1);

//! 13. Assign Default Values to an Object
const userProfile={
    name :'Alice',
    age :25
};
let defaultValues = {age :18 ,city:"Unknown"}

let updatedProfile =Object.assign(userProfile,defaultValues)
console.log(userProfile);

 //! 14.Cloning an Object with Object.assign
 let object ={
    brand :"Dell",
    model :'XPS 13',
    price : 46000
 }
 let newLaptop =Object.assign({},object);
newLaptop.price=50000
 console.log("New-Object",newLaptop);
 console.log("Original-Object",object);
 
//! 15.Adding Methods to an Existing Object with Object.assign
const robot ={
    name :'Robo'
} 
Object.assign(robot,{
    greet(){
        console.log(`Hello I am ${this.name}`);
        
    },
    performTask(){
        console.log(`${name} is performing a task`);
        
    }

})
robot.greet()
robot.performTask()

//! 16.Iterating through Object Properties using Object.entries
  const Movie1 ={
    title :"The Matrix",
    director :'Wachowskis',
    year :1999
  };
  let newMovie = Object.entries(Movie1)
  newMovie.forEach(([key,value])=>{
     console.log(`${key} : ${value}`);
// Object.entries(Movie1).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
    
  })

  //!17 Dynamic Access to Object Keys
  function getProperty(obj, key) {
//     return obj.hasOwnProperty(key) ? obj[key] : "Key not found";
//   }
  
//   const person = { name: 'Alice', age: 25 };
//   console.log(getProperty(person, 'name')); // Alice
//   console.log(getProperty(person, 'city')); // Key not found
     if(obj!=null && typeof obj==='object')
     { 
        if(key in obj){
        return obj[key];
        }
     else{
        return 'Key not Found'
     }
    }
  }
  console.log(getProperty(person, 'name')); // Output: "Alice"
console.log(getProperty(person, 'year')); // Output: 2023
console.log(getProperty(person, 'height')); // Output: "Key not Found"
  