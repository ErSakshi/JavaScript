let operation=(action,x,y)=>{
    console.log("operation executed");
    action(x,y)
}
// let action =(a,b)=>{
//     console.log(`sum ${a+b}` );
    
// }
// operation(action ,10,20)

let add=(a,b)=>{
    console.log(a+b);
    
}
let sub=(a,b)=>{
    console.log(a-b);
    
}
let mul=(a,b)=>{
    console.log(a*b);
    
}
let div=(a,b)=>{
    console.log(a/b);
    
}
operation(add,20,30)
operation(sub,200,100)
operation(mul,50,10)
operation(div,55,5)