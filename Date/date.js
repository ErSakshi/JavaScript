console.log(Date.now());
console.log(Date()); 

let obj={
    name:"Xyz",
    id :Date.now()
}
console.log(obj);

let date=new Date()
console.log(date.getDay());

//! getDay() prints index for given element
switch(date.getDay()){
    case 0 :  console.log("Sunday");
    break;
  case 1:  console.log("Monday");
  break;
  case 2:  console.log("Tuesday");
  break;
  case 3:  console.log("Wednesday");
  break;
  case 4:  console.log("Thursday");
  break;
  case 5:  console.log("Friday");
  break;
  case 6:  console.log("Saturday");
  break;
  
}
//!getMonth
console.log(date.getMonth());

switch(date.getMonth()){
  
    case 0:  console.log("January");
    //document.write("January")
    break;
    case 1:  console.log("February");
    break;
    case 2:  console.log("March");
    break;
    case 3:  console.log("April");
    break;
    case 4:  console.log("May");
    break;
    case 5:  console.log("June");
    break;
    case 6 :  console.log("July");
    break;
    case 7:  console.log("August");
    break;
    case 8:  console.log("September");
    break;
    case 9:  console.log("October");
    break;
    case 10:  console.log("November");
    break;
    case 11:  console.log("December");
    break;
   
}
console.log(date.getDate());//! current date
console.log(date.getFullYear()); //! current year
console.log(date.getHours()); // !time in 24-hour format
console.log(date.getMinutes()); //! current time in minutes
console.log(date.getSeconds());//! current time in seconds
console.log(date.getMilliseconds());//! current time in milliseconds
console.log(Date.now()); //! it is changing continuously
console.log(date.getTime());//! it is same as Date.now() complete date
console.log(date.getTimezoneOffset());







  
  
 

  


