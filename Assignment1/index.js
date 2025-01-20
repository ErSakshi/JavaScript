// 1.  Function basics with callback
let greetWithCallBack = (callback)=>{
    callback();
}
let callback = ()=>{
    console.log("Hello World");
    
}
greetWithCallBack(callback);


//2.Function with parameters and callback
let addTwoNumbersWithCallback =(a,b,sum)=>{
    sum(a,b)
}
let clb1 =(a,b)=>{
    console.log(`sum is ${a+b}`);
    
}
addTwoNumbersWithCallback(10,20,clb1)

//3. Function call with if-else statement
let num=prompt("enter the number");
let checkEvenOddWithCallback = (num,clb2)=>{
     console.log(clb2(num));
     
}
 let clb2 =()=>{
    if(num%2==0)
        {
            console.log(`${num} is even number`);
            
        }
        else{
            console.log(`${num} is an odd number`);
            
        }
}
 
checkEvenOddWithCallback(num,clb2)


//4.Loop basics with high-order and call-back function
let size=prompt("enter the limit size")
let loopAndExecute =(size,clb3)=>{
   for(let i=1;i<=size;i++)
   {
    console.log(`for loop iteration ${i}`);

   }
}
let clb3=(index)=>{
   console.log(index);
   
}
loopAndExecute(size,clb3)

//5.While loop with callback
let limit=prompt("enter the size")
let whileLoopWithExecute = (limit,clb4)=>{
    let count =1;
    while(limit>count){
        console.log(`while loop iteration ${count}`);
        count++;
    }
  
}
let clb4 =(cnt)=>{
    console.log(cnt);
   
}
whileLoopWithExecute(size,clb4)

//6.Do-while loop with callback
let lim =prompt("enter the limit")
let doWhileWithCallback = (lim,clb5)=>{
    let j=1;
    do{
        console.log(`Do-While iteration ${j}`);
        j++
        
    }while(j<lim);
}
let clb5 =(j)=>{
  console.log(j);
  
}
doWhileWithCallback(lim,clb5)

//7.Nested Loop with callback
let nestedLoopWithCallback = (lim1,lim2,clb6)=>{
    for(let i=1 ;i <=lim1;i++)
    {
        for(let i=1;i<=lim2;i++)
        {
            console.log(`nested loop iteration ${lim1} and ${lim2}`);
            
        }
    }
}
let clb6=(lim1,lim2)=>
{
    console.log(lim1,lim2);
    
}
nestedLoopWithCallback(4,4,clb6)


//8 .Conditional statement with higher-order
let num1 =prompt("enter the number") 
let checkNumberWithCallback = (num1,clb7,clb8)=>{
   if(num1<0)
   {
     clb7(num1);
   }
   else{
    clb8(num1)
   }
}
let clb7 =(num1)=>{
    console.log(`${num1} is negative number`);
    
}
let clb8=(num1)=>{
    console.log(`${num1} is positive number`);
    
}
checkNumberWithCallback(num1,clb7,clb8)

//!9.Switch case with callback
// let number1=prompt("enter the number");
// let getDayOfWeekWithCallback = (number11,clb10)=>{
//     clb10(number11)
    
// }
// let clb10 =(number11)=>{
//     switch(number1)
//     {
//         case 1 : console.log("Sunday"); break;
//         case 2 : console.log("Monday"); break;
//         case 3 : console.log("Tuesday"); break;
//         case 4 : console.log("Wednesday"); break;
//         case 5 : console.log("Thursday"); break;
//         case 6 : console.log("Friday"); break;
//         case 7 : console.log("Saturday"); break;
//         default : console.log("Invalid input");
        
        
//     }
  
// }
// getDayOfWeekWithCallback(number11,clb10)

//!10.Function with return and callback
// let multiplyWithCallback = (n1,n2,clb11)=>{
//     console.log(`multiplication of two numbers ${n1} and ${n2} is ${n1*n2}` );
    
    

// }
// let clb11 = (n1,n2)=>{
//     console.log(n1,n2);
    
// }
// multiplyWithCallback(10,20,clb11);

let multiplyWithCallback = (n1,n2,clb11)=>{
    let result =n1*n2;
    return clb11(result);
}
let clb11 = (result)=>{
   console.log(result);
   
}
multiplyWithCallback(10,20,clb11);

//! 11.Ternary Operator with callback
let age =prompt("enter the age");
let checkEligibilityWithCallback =(age ,clb12)=>{
    console.log((age >= 18)?"Eligible":"Not Eligible" );
    
}
let clb12 = (age)=>{
    console.log(age);
    
}
checkEligibilityWithCallback(age,clb12);

//!12.Nested If-Else with Higher-order function
let checkDivisiblityWithCallback = (no1 ,clb13 ,clb14)=>{
   if((no1%3 &&  no1%5)==0)
   {
     clb13(no1)
     clb14(no1)
   }
   else if(no1%3==0 && no1%5!=0)
   {
     clb13(no1);
   }
   else if(no1%5==0 && no1%3!=0){
      clb14(no1)
   }
}
let clb13 =(no1)=>{
   console.log(`${no1} is divisible by 3`);
   
}
let clb14 = (no1)=>{
    console.log(`${no1} is divisible by 5`);
    
}
//checkDivisiblityWithCallback(15,clb13,clb14);
checkDivisiblityWithCallback(12,clb13,clb14);

//!13.Loop with break and callback
let forLoopWithBreakCallback = (limit,clb15,clb16)=>{
   for(let i=1 ;i<=limit;i++)
   {
    if(i==5)
    {
        clb16();
        continue
    }
    else{
        clb15()
    }
   }
   
}
let clb15=()=>{
 console.log("Loop Continues");
 
}
let clb16=()=>{
    console.log("Number 5 encountered");
    
}
forLoopWithBreakCallback(10,clb15,clb16);

//! 15. Fuction without return but callback
// let printUpperCaseWithCallback = (str,clb17)=>{
//     let nstr="";
//     for(let i=0 ;i<=str.length;i++)
//     {
//        let ch =str.charAt(i);
//        if(ch >='a' && ch <='z')
//        {
//          let result= (ch-32)
//           let nstr=str+result
//        }
//     }
//     clb17(nstr)

// }
// let clb17 =(nstr)=>{
//     console.log(nstr);
    
// }
//  printUpperCaseWithCallback("sakshi",clb17)

//! 16.Recursive Function with Callback
let recursiveWithCallback = ()=>{
    
}