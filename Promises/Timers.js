//!setTimeout
//!setTimeout(()=>{},time in milliseconds)
//? it is an higher order function

//  setTimeout=(()=>{console.log("Hello")
// },5000);

// let demo=()=>{console.log("Hello");}
// setTimeout(demo,5000);

//? setInterwal executes for every interval until we clearInterval

// let demo=()=>{console.log("Hello");}
// setInterval(demo,5000);

let count=0;
let myInterval=setInterval(()=>{
    count++;
    console.log(count);
    
    if(count==5){
        clearInterval(myInterval);
    }
},1000)