//! 1. Targeting element using html
//! 2.Targeting element without eventListener 
//! 3.Targeting element with eventListener
//todo  this keyword points towards current object in event
//? in event listener we get an return event object
let{body}=document
//! 1. targeting html button in html using onclick
// let funct=()=>{
//     console.log("Button clicked");
//     body.style.background="grey"
    
// }

//!2.  Targeting the button in javascript
// let btn=document.querySelector("button")
// let funct2=()=>{
//     body.style.background="Red"
//     console.log("Changing the color");
    
// }
// btn.onclick=funct2;

//! 3. targeting the tag using EventListener

// let funct=()=>{
//     console.log("Button clicked");
//     body.style.background="grey" 
// }
// let btn=document.querySelector("button")
// btn.addEventListener('click',funct)
// btn.addEventListener('click',(e)=>{
//     console.log("Button clicked");
//     body.style.background="grey"
    
// })
//! this points towards current element
// let button=document.querySelector("button")
// button.addEventListener('click',
//      function(){
//        this.style.background="red"
//     }
// )
//? attributes start from "o" are the events
//?mulitple events in js
//?mouse events
//?keyboards events
//?screen events

// let str=""
// let heading =document.querySelector("h1")
// let input=document.querySelector("input")
// let btn=document.querySelector("button")
// input.addEventListener('input',(e)=>{
//     if(e.data!=null){
//    str+=e.data
//    console.log(str);
//    heading.innerText=str;
//     }
//     else{

//     }
// })

//! form and anchor tag will refresh the page so to avoid this 
//! we have to prevent its default behaiviour using preventDefault()

// let userform=document.querySelector("form")
// userform.addEventListener('submit',(e)=>{
//     console.log("form submitted");
//     e.preventDefault();
    
// })
//! form is refreshing
// let userform=document.querySelector("form")
// userform.addEventListener('submit',(e)=>{
//     console.log("form submitted");
    
    
// })