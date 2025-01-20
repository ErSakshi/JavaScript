//! dom(Document Object Model)
//?  DOM 1.Dom tree  2.Dom Api
//todo DOM API
//? 1.document.getElementById()
//? convention variable name and id name should be same
//? script tag shold be written at the last of body tag in html
//? 

// let heading=document.getElementById("heading");
// console.log(heading);
// console.log(typeof(heading));
// heading.title="html heading tag";
// console.log(heading);
// heading.style.backgroundColor="Red"


//! getElementsByTagName()
// it will target the element using tagname
// it will tag multiple elements
//it will give us collection and we have to treat it as array
// outputof following code : HTMLCollection(3) [input, input, input] 
// let input=document.getElementsByTagName("input");
// console.log(input);
// input[0].title="Input 1";
// //here we are targeting first input using array index
//   for(let i=0;i<input.length;i++){
//     input[i].style.background="red"
//     input[i].style.color="white"
//   }8


//todo targeting elements by classname
//! getElementsByClassName
// let userInput=document.getElementsByClassName("userInput");
// console.log(userInput);
// for(let i=0;i<userInput.length;i++){
//         userInput[i].style.background="green"
//         userInput[i].style.color="white"
//       }

//! QuerySelecter  it return single element
//! QuerySelecterAll it returns all elements

// let input=document.querySelector(".userInput") //it is selecting only one
// console.log(input);

// let input2=document.querySelector("input") //it is selecting by tagname 
// console.log(input2);

// let input1=document.querySelectorAll(".userInput")//it is selecting all
//console.log(input1);

// 

// let myDiv=document.querySelector('div')
// console.log(myDiv);
// myDiv.setAttribute('class',"myDivClass");    //todo we can add attribute using setAttribute
// console.log(myDiv);
// myDiv.removeAttribute('class')  //todo  we can remove attribute using removeAttribute
// console.log(myDiv);


// //? to disable anything using javaScript
// let input=document.querySelector(".userInput")
// console.log(input);
// input.setAttribute("disabled","")
// console.log(input);

// let myDiv2=document.createElement("div")
// console.log(myDiv2);
// myDiv2.setAttribute('class','myDivClass2')
// console.log(myDiv2);

//? when we have to create the tag in javaScript if it is not present in html then we use createElement tag
//? but it is not display in html ui so we have give them position to set in ui
//? so to give position we have to push into particular tag by using append to put into particular position
//todo multiple ways to target the body tag
// let body=document.querySelector('body');
//let body=document.body
//console.log(body);
//console.log(document.body);
// let {body}=document  //todo we have to use this way
// console.log(body);
// myDiv2.textContent="Hello from javaScript"
// body.append(myDiv2);   //! append is used to push tag created in javaScript to be inserted in html ui


//!19-10-2024

//todo it optional to createElement
// let{body}=document
// let nav=document.createElement("nav")
// nav.innerHTML=`
//  <div>text</div>
//  <div>text</div>
//  <div>text</div>
//  <div>text</div>
//  <div>text</div>
// `
// nav.style.display="flex"
// nav.style.paddingLeft="20px"
// nav.textContent="Hello"
// nav.innerText="Helloooo"  // ? both are used to add text 

// body.append(nav)

//todo we can remove element from html using javascript using remove()
let head=document.querySelector("h2")
head.remove()










