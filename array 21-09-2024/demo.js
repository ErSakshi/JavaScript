//! 1:Print Each Element
const food =["Pizza" ,"Burger","Sushi","Pasta","Tacos"];
console.log(food);
food.forEach(food => console.log(food));

//! 2:Square each Element
const number =[1,2,3,4,5];
console.log(number);
number.forEach(number => console.log(number));

//!3:Concatenate Strings
const hobbies =["Reading","Coding","Hiking","Gaming"];
console.log(hobbies);
hobbies.forEach(hobbies => console.log(hobbies.concat(" is awesome!")));

//!4:Sum of Array Elements
const numbers =[10,20,30,40,50];
let totalSum=0;
numbers.forEach(numbers =>totalSum+=numbers);
console.log(`Total sum : ${totalSum}`);

//!5:Capitalize each String
const words =["apple","banana","cherry","date"];
words.forEach(word =>console.log(word.charAt(0).toUpperCase()+word.slice(1)));

//!6 :Add Index to Each Element
const items =["Book","Pen","Laptop","Phone"];
items.forEach((item , index)=>console.log(`${item}  ${index}`));

//!7 :Check Even or Odd
const number1 =[13,22,35,40,51];
number1.forEach(number1 =>{
    const type =number1 %2===0 ?"Even" :"Odd";
    console.log(`${number1} is ${type}`);
    });

//!8: Filter Out Short Names
const names =["John","Amy","Alexander","Zoe","Chris"];
names.forEach(name =>{
    if(name.length > 4){
        console.log(name);
        
    }
});

//!9:Count Vowels
const letters =["a","b","e","i","o","p","u"];
let vowelCount =0;
letters.forEach(letter =>{
    if("aeiou".includes(letter)){
        vowelCount++;
    }
});
console.log("Number of Vowels :"+vowelCount);





