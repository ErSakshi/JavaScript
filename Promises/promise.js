//?Promises are object in js
//? Promises are used to handle the asynchronous task
//?with promises we get three different states(pendinding,resolve,rejected)
//? it was introduced to overcome the callback hell
//todo pending state : promise will in pending state when it is niether resolved or rejected
//todo resolve state : when your promise is fullfilled it will be in resolved state when the promise 
//todo is resolved it will call the then() and we can pass some arguments along with it

//todo reject: when your promise will not fullfilled it will be rejected and when your
 //todo promise is not fullfill it will call catch() and catch() is used to handle error and exception
 //! Your promise can either be resolved or rejected at a time 
 //? some Asynchronous task in javascript will internally return the promise we just have to handle that promise using then() and catch() block
 //? fetch() will return the Promise
 //?we have to handle that using then and catch block

 //todo 
// let p=new Promise((resolve,reject)=>{
//    let a=10;
//     if(a==10){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })
// p.then(()=>{console.log("True.a==10");
// });
// p.catch(()=>{console.log("False.a!=10");
// })

//todo  then is added only with Promise
// console.log("first");

// let p2=new Promise(()=>{
//     resolve()
//     reject()
// })
// p2.then(()=>{console.log("then block")
// })
// p2.catch(()=>{
//     console.log("catch block")
    
// })
// console.log("last");


// let p2=new Promise((resolve,reject)=>{
//     let a=10+20
//     //resolve(a)
//     reject("something went wrong")
// })

// p2.then((val)=>{
//     console.log("then block",val);
    
// })
// p2.catch((err)=>{
//     console.log("catch block",err);
    
// })

let p=fetch("https://api.gitHub.com/users")
console.log(p);
p.then((val)=>{
    console.log(val)
    let data=val.json();
    return data
}).then((val2)=>{console.log(val2);
})

// let p=fetch("https://api.gitHub.com/users")
// console.log(p);
// p.then((val)=>{
//     console.log(val)
//     let data=val.json();
//     return data
// }).then((val2)=>{console.log(val2);
// }).catch((err)=>{console.log("something went wrong",err);
// })
// p.catch((err)=>{console.log("something went wrong",err);
// })


//! every time we have to follow the syntax
//? fetch(url).then((res)=>{return res.json()})


//!16-10-2024

fetch("https://api.github.com/users").then((res)=>{console.log(res);
    return res.json()
}).then((data)=>{console.log(data);
    //data.map((val)=>{console.log(val.avatar_url);
        data.map((val)=>{console.log(val.id);
           // data.map((val)=>{console.log(val.login);
    })
})
//todo  async is an keyword to make function asynchronous
//todo  await is an keyword to make wait for the execution of particular line or fuction
//todo  time required to perform task is less here than promises
//todo  asycn await are optional for promises
 let demo=async()=>{
    let res=await fetch("https://api.github.com/users")
    let data=await res.json()
    console.log(data);
    data.map((val)=>{console.log(val.login);
    })
    
 }
 demo()

 let demo2=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/users") //? we have to pass url into it
    let data=await res.json() 
    console.log(data);
    data.map((val)=>{console.log(val.email);
    })
    
 }
 demo2()
 //todo callback to hell 

