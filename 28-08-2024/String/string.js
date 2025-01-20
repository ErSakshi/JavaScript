let str1='str1';
let str2="str2";
let str3=`str3`;
let str4=new String("str4"); //TODO Using String class and new keyword
console.log(str1);

console.log(str2);

console.log(str3);

console.log(str4);


//TODO String 
//? String have Indexes
//? we can not use higherOrder function for string
//? we can find length of String using "length" variable

let str="Bahubali";
// console.log(str[0]);

// let newStr=str[0]+str[1]+str[4]+str[6]+str[3];
// console.log(newStr);//Bablu

for(let i=0;i<str.length;i++){
    console.log(str[i]);
    
}
//let strArr =str.split("") //? it will split every character
//let strArr=str.split("b") //['Bahu', 'ali'] //? it will spilt the string on the basis of argument we pass
//let strArr=str.split(" ");
//console.log(strArr);

//! 1.split()  it will convert string into array
//! 2.reverse()  
//! 3.join()
//? reverse() and join() are the methods of array
// let str5 ="AMrendra Bahubali"
// let newStr5 =str5.split("").reverse().join(""); //? join will concat the string
// console.log(newStr5);

//! 4.padStart(length,charactertohide) it will add extra character to hide/add some data in start
//! 5.padEnd(length,charactertohide) it will add extra character to hide/add data at end
let num="7893"
let newNum=num.padStart(12,'*')
let newNum1=num.padEnd(12,"*")
console.log(newNum);
console.log(newNum1);
let newNum2=num.padStart(12,"*").padEnd(20,"*")
console.log(newNum2);

//! 6.trim()   it will remove space from both starting and ending
//! 7.trimStart()  it will remove space from start

//! 8.trimEnd()  it will remove space from end

let str6 ="     Bahubali    "
let start =str6.trimStart() //?remeoves 
let end=str6.trimEnd()
let both=str6.trim()
console.log(start);
console.log(end);
console.log(both);

//! 9.toUpperCase
console.log(str6.trim().toUpperCase());

//! 10.toLowerCase
console.log(str6.trim().toLowerCase());

//! 11.replace()  this will replace firstOccurrence
//! 12.replaceAll() this will replace allOccurrence

// console.log(str6.replace("B","K"));
// console.log(str6.replaceAll("a",""));
console.log("--------------------------------------------");

console.log(str6.replace("Bah","Kha").replace("b","g").replace("l","ll"));

//! 05/10/2024
let strr="Katappa"
//! 13. slice()
let val=strr.slice(0,2)
console.log(val);  //ka
console.log(strr.slice(3)); //appa
console.log(strr.slice(4)); //ppa
console.log(strr.substring(0,3));
console.log(strr.slice(0,3));
console.log(strr.slice(1,5));
//! 14.substring()
console.log(strr.substring(1,5));

console.log(strr.slice(-3,2));  // it will also accept negative index
console.log(strr.substring(-3,2));  // it will not accept negative index
console.log(strr.slice(-1));
console.log(strr.slice(-1,strr.length));

console.log(strr.substring(6));
//substr(startindex,length)
//! substr()
console.log(strr.substr(2,4));
console.log(strr.substring(2,4));
console.log(strr.slice(2,4));

//! 15.includes() gives boolean output
console.log(strr.includes("pp"));
console.log(strr.includes("k"));

//! 16.startsWith()  //it checks weather the string is starting with particular argument
//! 17.endsWith()    //it checks weather the string is ending with particular argument
//it checks weather the string is starting with particular argument
console.log(strr.startsWith("#"));
console.log(strr.endsWith("a"));

//! 18.at()
console.log(strr.at(0));
 //! 19.charAt()
 console.log(strr.charAt(0));  
 //? both returns character at particular index

 //! 20.charCodeAt()
 console.log(strr.charCodeAt(4));
 console.log(strr.codePointAt(4));
 // it will returns the ascii value
 //TODO : both are same
 

 
 
 
 
 






















