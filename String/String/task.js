//!1. **Task**: Write a function that accepts a full name (first and last name) as input and returns 
//!the total number of characters in the name, excluding spaces. The function should also 
//!return a message like: "Your name has X characters." */
 
cnt=0;
 let result =function(firstName,lastName){
    let fullName=firstName+lastName;
    console.log(fullName);
 
    for(let i=0;i<fullName.length;i++)
        {
          if(fullName[i]!==" ")
             cnt++;
        }
        return `Your name has ${cnt} characters`;
 }
 
console.log(result("Sakshi","Ardad"));
//TODO SakshiArdad
//TODO Your name has 11 characters 
 
 
   

//!2. **Task**: Write a function that accepts a string and returns the third character in that string. 
//!If the string is too short (less than three characters), return a message like: "The string is too short." */
let funct =function(value){
   for(let i=0;i<value.length;i++){
      if(value.length > 3)
      {   
           return ` the third character of ${value} is ${value[2]}`;
      }
      else{
        return "The String is too Short"
      }
   }
}
console.log(funct("javaScript"));
//TODO  the third character of javaScript is v


//! 3. **Task**: Write a function that takes a string and returns the Unicode value of the character in the middle of the string. If the string has an even number of characters, return the Unicode value of the character just before the middle.
 let unicodeFunc =function(value){
    for(let i=0;i<value.length;i++)
    {
        if(value.length % 2==0)
        {
            console.log(value.codePointAt(value.length /2));
            
        }
        else{
            return "length of String is odd"
        }
    }
 }
 unicodeFunc("Sakshi")
 console.log(unicodeFunc("Sakshii"));  //? here length of string is odd
 
 //TODO 115-unicodevalue of "s" as it is on 3rd index
 
 

//! 4. **Task**: Create a function that checks if a given file name starts with "Report" (case-sensitive). If it does, return a message like: "This is a report file." If not, return: "This is not a report file."
 let file=function(value){
    if(value.startsWith("R"))
    {
        return 'This is report file'
    }
    else{
        return 'This is not report file'
    }
 }
console.log(file("Report")); //TODO This is report file
console.log(file("report"));  //TODO This is not report file



//! 5. **Task**: Write a function that accepts a string and checks if it ends with ".jpg". If it does, return: "This is an image file." Otherwise, return: "This is not an image file."
  let check=(value)=>{
      if(value.endsWith(".jpg")){
        return 'This is an image file'
      }else{
        return 'This is not an image file'
      }
  }
  console.log(check("image.jpg"));  //TODO This is an image file
  console.log(check("image.jpge")); //TODO  This is not an image file
  
  

//! 6. **Task**: Write a function that checks if the word "password" is included in a user's input string. If it is found, return: "Your input contains a forbidden word." Otherwise, return: "Input accepted."
   let checkspass =(value)=>{
      if(value.includes("password"))
      {
        return 'Your input contains a forbidden word'
      }
      else{
        return 'Input accepted'
      }
   }
   console.log(checkspass("checkyourpassword"));  //TODO Your input contains a forbidden word
   console.log(checkspass("123@456"));  //TODO Input accepted
   
   

//! 7. **Task**: Write a function that searches a paragraph for the first appearance of the word "important" and returns the position (index) of that word. If the word isn't found, return a message like: "The word 'important' is not in the paragraph."
 let search=(value)=>{
    let ind =value.indexOf("important")
    if(ind > 0)
        return ind;
    else
     return 'The word "important" is not in paragraph'
 }
 console.log(search("It is very important"));
 // TODO  INDEX IS 11
 console.log(search("Nothing is imposible"));
  // TODO  The word "important" is not in paragraph
 

//! 8. **Task**: Create a function that takes a sentence and replaces all instances of the word "sad" with "happy." Return the updated sentence.
   let instance =(value)=>{
       console.log(value.replaceAll("sad","happy"));
       
   }
   instance("I am sad because everything in my life is going sad and that makes me more sad")
   //TODO I am happy because everything in my life is going happy and that makes me more happy


//! 9. **Task**: Write a function that takes a long string of text and replaces all occurrences of the word "mistake" with "correction." It should replace every instance found and return the updated text.
 let correctionOfwords =(value)=>{
    console.log(value.replaceAll("mistake","correction"));
    
 }
 correctionOfwords(`In life, we all make mistakes. 
    they are opportunities for growth. 
    Recognizing and learning from our mistakes helps us 
    to improve and become better versions of ourselves. 
    Embracing our mistakes with a positive attitude can lead to greater wisdom and resilience.
`)
// TODO Output:
/* In life, we all make corrections. 
they are opportunities for growth. 
Recognizing and learning from our corrections helps us 
to improve and become better versions of ourselves. 
Embracing our corrections with a positive attitude can lead to greater wisdom and resilience.*/
 
//! 10. **Task**: Write a function that extracts the first 10 characters from a given string and returns them. If the string has fewer than 10 characters, return the entire string.
let firstcharac =(value)=>{
    let cnt=0;
    if(value.length >=10){
       //let val=value.substring(0,10)
       let val=value.slice(0,10)
       return val;
    }
    else
    return value;
}
console.log(firstcharac("itisveryimportantinlifetonbesuccessfull"));
//TODO  itisveryim

//! 11. **Task**: Write a function that takes a sentence and splits it into an array of individual words. Then, return the array and display each word on a new line.
let sentence=function(value){
   let arr=value.split('')
   arr.forEach(val => {                   
      console.log(val);                            //H
                                                   //a
   });                                             //r
   return arr;                                     //d
}                                                  //w
 console.log(sentence("Hardwork"));                //o
 //?  ['H', 'a', 'r', 'd', 'w', 'o', 'r', 'k']     //r
                                                   //k
 
//! 12. **Task**: Create a function that converts a sentence into lowercase letters and returns the new version. For example, the input "HELLO WORLD" should be converted to "hello world."
 
   let convtoLow =(value)=>{
   let newValue= value.toLowerCase()
    return newValue;
   }
   console.log(convtoLow("HELLO WORLD"));
   
//! 13. **Task**: Write a function that converts all the characters in a string to uppercase and returns the updated string. If the input is "good morning", the output should be "GOOD MORNING."

let convtoUpp =(value)=>{
    let newValue= value.toLowerCase()
     return newValue;
    }
    console.log(convtoUpp("good morning"));
//! 14. **Task**: Write a function that accepts a number and converts it into a string. For example, if the number is 123, the output should be the string "123". The function should return the string with a message like: "The number has been converted to a string."

    let num=(val)=>{
      let numToString=String(val)
      return `${numToString} - The number is converted into String`;
    }
    console.log("In number : ",123);
    
    console.log(num(123));
    
    
//! 15. **Task**: Write a function that removes extra spaces from the start and end of a string. For example, if the input is "  hello world  ", the output should be "hello world". The function should return a message like: "Extra spaces have been removed."
let space=(value)=>{
    console.log("String with extra space at start and end : ",value);
    
  let extraSpace =value.trim()
  return `${extraSpace} - Extra Space has been removed`
}
console.log(space("  hello world  "));

//! 16. **Task**: Create a function that accepts a string with extra spaces at the start and trims only the leading spaces. For example, the input "  learn JavaScript" should return "learn JavaScript", with a message: "Leading spaces have been removed."
 let startSpace =(val)=>{
    let removeSpace=val.trimStart();
    return `${removeSpace} : Leading spaces have been removed`
 }
 console.log(startSpace(" learn javaScript"));
 
//! 17. **Task**: Write a function that takes a string and trims off any trailing spaces. If the input is "coding is fun   ", it should return "coding is fun" with a message: "Trailing spaces have been removed."
let endSpace =(val)=>{
    let removeSpace=val.trimEnd();
    return `${removeSpace} : Trailing spaces have been removed`
 }
 console.log(endSpace("coding is fun  "));
     

//! 18. **Task**: Write a function that takes a string and checks whether it starts with an uppercase letter. If the first letter is capitalized, return a message like: "The string starts with an uppercase letter." Otherwise, return: "The string starts with a lowercase letter."
    // let str=(value)=>{
    //     let firstChar = value.charAt(0);
    //     if (firstChar === firstChar.toUpperCase()) {
    //         return "The string starts with an uppercase letter.";
    //     } else {
    //         return "The string starts with a lowercase letter.";
    //     }
    // }
    // console.log(str("Hello"));
    // console.log("hello");
    
    
//! 19. **Task**: Write a function that accepts a sentence and converts only the 
//!first letter of the sentence to uppercase, 
//!while the rest of the letters are converted to lowercase. 
//!For example, "hello WORLD" should become "Hello world." 
//!Return the updated sentence with a message.

//   let first =(value)=>{
//       let newLetter = value.toLowerCase().charAt(0).toUpperCase()
//         //let n=newLetter.charAt(0).toUpperCase()

//      return newLetter;
//     }
//     console.log(first("hello WORLD"));
let a = ""
let demo = (str)=>{
    a= str.toLowerCase()
    let uppercasedChar = a[0].toUpperCase()
    console.log(a.replace(a[0], uppercasedChar));
    


}
demo("hello WORLD")
   
//! 20. **Task**: Write a function that takes a sentence and counts how many spaces are in it. The function should return the total number of spaces with a message like: "There are X spaces in the sentence."
// let countSpace=(value)=>{
//     let cnt=0;
//     for(let i=0;i<value.length;i++){
//         if(value[i]===" ")
//             cnt++;
//     }
//     return `There are ${cnt} spaces in the sentence`;
// }
// console.log(countSpace(" so  we have to check it"));
