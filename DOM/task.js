//!### DOM Manipulation Tasks:

//!1. **Change Background Color:**
   //!- Create a button with a label like “Change Background”. Write a function that will change the background color of the entire page when this button is clicked. You can allow the user to choose a random color or pick a predefined color.
   
   // let {body}=document
   // let color=prompt("Enter the color")
   // let btn=document.querySelector("button")
   // let funct=()=>{
   //   body.style.background=color
     
   // }
   // btn.addEventListener('click',funct)

// let button=document.querySelector("button");
// let color=["red","yellow","green","blue","pink","aqua","purple","orange","salmon","grey"]
// let randomNo=Math.floor(Math.random()*10)
// button.addEventListener('click',(e)=>{
//   console.log("Button clicked");
//   body.style.backgroundColor=color[random]
  
// })

//!2. **Text Update:**
   //!- Add a paragraph element to your HTML with some initial text (e.g., “Click the button to change this text.”). Create a button labeled “Update Text”. Write a function that, when the button is clicked, changes the paragraph text to something else (e.g., “Text updated!”).
   //  let {body}=document
   //  let btn=document.createElement("button")
   //  body.append(btn)
   //  btn.style.marginTop="20px"
   //  btn.textContent="Update text"
   //  let p=document.createElement("p")
   //  body.append(p);
   //  console.log(body);
   //  console.log(p);
   //  p.textContent="Hello from javaScript"
   
    
   //  let funct=()=>{
   //    p.textContent="JavaScript is a Scripting and programing language"
   //  }
   //  btn.addEventListener('click',funct)

    

//!3. **Hide/Show Element:**
   //!- Add a div with some content and a button labeled “Hide/Show”. Write a function that hides the div when the button is clicked for the first time, and shows it again when clicked the second time. Use a boolean or toggle to keep track of whether the div is visible or hidden.
//    let {body}=document
//    let btn=document.createElement("button")
//    body.append(btn)
//    btn.style.marginTop="20px"
//    btn.textContent="Hide/Show"
//    let div=document.createElement("div")
//    div.textContent=`Features of javaScript :
//    1.Scripting Language
//    2.HighLevel 
//    3.Interpreted
//    4.Synchronous
//    5.Object-Based
//    6.Object-Oriented
//    7.Loosly Typed
//    8.Dynamically typed
//    9.Single Threaded`
    
// div.style.display = "none";
// body.append(div);

// let isVisible = false; // Track visibility

// // Function to toggle visibility
// btn.addEventListener('click', () => {
//     isVisible = !isVisible; // Toggle the boolean value
//     div.style.display = isVisible ? "block" : "none"; // Show or hide the div based on the boolean value
// });

//!4. **Add New Item to List:**
   //!- Create an input field and an empty unordered list (ul) in your HTML. Below the input, add a button labeled “Add Item”. Write a function that, when the button is clicked, adds the value from the input field as a new list item (li) to the unordered list. Make sure to clear the input field after adding the item.
      
      // let{body}=document
      // let ul=document.querySelector("ul")
      // let button=document.querySelector("#btn")
      // let input=document.querySelector("input")
      // btn.addEventListener('click',(ele)=>{
      //     let val=input.value.trim();
      //     if(val){
      //       let li=document.createElement("li")
      //       li.textContent=val
      //       ul.append(li)
      //       input.value="";
      //     }
      // })

//!5. **Remove Last Item from List:**
   //!- Add an unordered list with a few predefined list items (li). Below the list, add a button labeled “Remove Last Item”. Write a function that, when the button is clicked, removes the last item from the list. Make sure the function works even when the list is empty (i.e., it shouldn’t break).
   //   let {body}=document
   //   let ul=document.querySelector("ul")
   
   // ul.innerHTML=`
   // <li>Java</li>
   // <li>JavaScript</li>
   // <li>AdvanceJava</li>
   // <li>Sql</li>`
   //   let btn1=document.createElement("button")
   //   btn1.textContent="Remove last Item"
   //   body.append(btn1)
     
   //    btn1.addEventListener('click', () => {
   //       let cnt=0;
   //       if (ul.lastElementChild) {
   //           ul.removeChild(ul.lastElementChild); 
   //           cnt++;
   //           console.log(cnt);
             
   //       } 
   //   })
     
//!6. **Toggle Class:**
   //!- Create a div element with some initial style, like a background color or border. Add a button labeled “Toggle Style”. Write a function that toggles a specific class on the div when the button is clicked. The class should change the div’s appearance (e.g., different color or border style).
   //  let{body}=document
   //  let div=document.createElement("div")
   //  body.append(div)
   //  div.style.background="Pink"
   //  div.style.border=" 1px solid blue"
   //  div.style.height="200px"
   //  div.style.width="200px"
   //  let click_me=document.createElement("button")
   //  click_me.textContent="Click me"
   //  div.append(click_me)
   //  click_me.style.height="70px"
   //  click_me.style.width="70px"
   //  click_me.addEventListener('click',()=>{
   //     div.style.background="purple"
   //     div.style.border="5px solid black"
   //     div.style.borderBlockStyle="dashed"
   //  })

//!7. **Change Image Source:**
   //!- Add an image element with an initial source. Below the image, add two buttons labeled “Change to Image 1” and “Change to Image 2”. Write functions for both buttons that change the image’s source to a different URL when clicked.
   //   let {body}=document
   //   let img=document.querySelector("img")
     
   //   let btn1=document.createElement("button")
   //     btn1.textContent="Change to image1"
   //     body.append(btn1)
   //   let btn2=document.createElement("button")
   //   btn2.textContent="Change to image2"
   //   body.append(btn2)
    
   //   btn1.addEventListener('click',()=>{
   //      img.src="data:image/jpeg;base64,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"
   
   //   })
   //   btn2.addEventListener('click',()=>{
   //     img.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUPDw8PDxUVDw8PDw8PDQ8PDw8PFRUWFhUVFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OFQ8QFy0dFR4vKzcrKystLS0rLSs3LS03Ny0tLSstKy0tKzctLS8tKysrLS4tKy4rKy0rMDcrNTcrLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAICAQIDBgMDCQYHAQAAAAABAhEDBBIhMUEFBhMiUWEUMnFSgcEVFiMkQkNikaEzRFNysdEXNJOy0uHwB//EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACsRAQEAAgECBAQGAwAAAAAAAAABAhEDEiEEMUFhUbHR8AUTInHB4TJSgf/aAAwDAQACEQMRAD8A/HQADk7AAAEBpAhkgADBABjBBIKGNIEVDoaHQbJUFFUOi2kUOiqCg2U0Ki6BothFCouhUO0loTRQmhSaEUJiEiKEKKhNFBRJA0woBSkUiClIyjTGpC2saiCYgAHSoAA0CMAGSAxFIyghoEUgQQ6BIpBaSSHQ0iqM7JUFFUOg2k0FFUOg2kUKi6Ci2mdBRdCodpnQmjSiWjUqQ0SW0JjsIaEUxM0EjAaJJHtCQWSJoSL2h4bLaVELFXQKAsQADbJoYkNETGkIaBHQ0CGjKNIpISKSCkJFJAUkYtISGkNIpIzaiodFUOg2U0FF0FBtIoVGlCotrTOhNGlEtDsM2iaNGiWjUqQ0S0WSzUqQyaLaJZuBNDGKiBBEY0iSwlyFH3NGjBc5okG0pGrVpyFEoo6A6AAQI0hghoEaRVCKRmo0ikhIpGK0aRaQkUjNRpFJAkUkZtISGkNIqjOymgoujTT6aeR7cWPJlf2ceOWSX8opsLdFhQmj1/zc1tX8HqP+jK/5czz9Rp8mN7cmPJif2cmOWOX8pJMzjyY5f42Vasc7RLRoyWjpKGbRDRq0S0agZNEtGjRLRqUI2i2GsYjmh2mCiDiW0NDtMtg1A12g0XUNJSHQmxNgQyG/cZDNQMhgCOgA0FDAGhoSKSAmikJFwVtJulaTdN0urpczNQRaPal3cblsw5lnk9JHWRhjw5VKWKTxqCVrm1kv22uzih2TqHkeFYMu9R3ShsdxjwqT6KPFceXFepx/Nwvr/Hzb1XKikaPBsn4ebdhadZN+Oe7H9YVf3Hs5u7c1LLDFNZ54fB8SGPFkT/SW+b6JK2+XEzlyY4+d+/uqS14qKR0/kzOlNvDlSxyccreOSWOaryyvk+K4c+JWp7Nz4tviYcuPc9sd2OS3S+yuHzfw8zPXj5bOnMkUdGr0GbDXjYsmO7274OKdc0vddV0Oru92d8TqMWB3tlO51/hxTlLj04Rav1aMZcmMxue+0Mlt097ud3P+IS1GptYv3eNNxlm/ib5qH9X7Ln9Z2j3h0PZ68CKVx/u+nhHy/wCblGL+rs17y694YRw4pLDLJHJ+kUb+H0+HG55ckY9Woqor1kvQ/MoafBmezCtRDJJ3jefLhnjyLi5OTUY7HVu/Mr5tcz4nFxZePy/M5bej0xnzv3v9o9WWU4ZrHz9a+v8A+I8L/wCUnXr48d1f5dv4nr9nd49D2gvAmlcv3Gpxx87/AIecW/o7PzX8k5+NwrbzTnB15nHjTdK1LzOotRk74EfkvPt8Tw/L5pKayY3Go3bTT4/K+K51ws9Of4V4fX6d45fGX6sTxGfr3j6Hvl3P+GT1Gm3SxfvMbblLD7p85Q/qvdcvjWe72n3n1efFHBkyeVR2zcbUs/o8j68K4cnzds8Xae3wuPLhx9PNd5T19vf3cuS427xnZm0QzbZ6kyxnqlYYikuhps6iRrYJIbRW0loNpDiJotkmgRnMc2JX1NRM5EqTs0kZr+huMqkxFUTZFiNCGjoyYAhggigQAVIpCRRip7b7XhxqORX2Vi7P5R/tI+FufP5Gscl68eR04O28fh+A04p6XSYXklpdPqksmCeaVeFkdSg1l52mnFcKPnkUjjlxY2ab3Xd2xq1nyOUXJpY8eKDnDDjlthBRVxxpRjy4JXSpW6PQ7R7Whl+L2xmlqHpXFSUeCxc9/H1qqvl0PERaM3DHt7f19Ft7+o7dg5QnGEm8es0uqUZ7VGXg6fBiptN8XLFLj6S+43w9u48U1PHuyfrUNROL0ej0vljupN403kyed+d0uHJ3w+bR06LMoTjOUFkSu4S207TXVNWrtWmrStNcDleDC6lnZrqrv12sg8Sw45SkvFeaX6npNJFVHavLivdKm7k2lyVdT2P/AM3S+Md9NPlr67ofhZwaXvF4eXxVgx0tPkwRxJqMIqWo8fdwjVp0qSS68OR2djdvwWq0+R4ceBR3Ys84bf0viJReSdRT+bzO2+vLkY8Vwy+H5Mcb3svo1x5frlvk+i7xyn+UtOo038HneJTvw3lcM6W+v2OEb9jztS5qOR5PFlDeviN+TtLfGfm2rTPLBV5uDa3Pbz8tnu99NI0oapQeRYo58Woxp1KWlywcMji/WN37W2z4HFqcOFrJjy6jLOKawqeKGOGNNNPdU5NunwUaVq76P534f054cWX+up5fC1259y2NviNOv77qmlNbUsuVPa5y4u8dKltlafFt8IkRz4WpKWt1HyeWp5mpzknvUls8qt1Vy+Z+b1T7fnxrHiTc1NtKXPfKTpXSvc031VBl7c8nhww41eNwk5LdVxUWofZjwuvV+3H6eU73s4SvK1cYKcljk5QUmoSapyj0b4Lj9xkkda0M0oyyJ4oTi545zi6yRXPZ9rly+/kKWtaW2CjjV29qtt9eL41/650jcvwDLwJv9mXT9l8U7r/R/wAiJRrg1X14FLJL7UuVfM/l9PpxN/i5Phk86963L1p+vuScMokqJ15sarfFqm2tu5OUfqc7NShBMi5MzUrNQEQy2TI3AzXH2EuVF2SzSRONmM+ZvKRhkZvFmm5cBfeGLmF+lmkhAgQ0aAGgBGUoYhkVIolFIxUpFohFozStFxIRaMUrSLRKKRzrSki6JRRlP0Huj3ljljDBqMmzLFKGLLKnHNDkoSb/AGunv9Rds9y8WSTlhl8LJtt4pRc8EurcGuMF1fNL0R8Aev2d3l1eBKMM8nFcoZEssUvRbraXsmfOz8Jnhnc+DLVvp6fz8v207zklms5t2/mPqrpZdJ9fHn/4Hs9kdyMWOSlqJ/EvmsONbcX1m3xlHh6L3tM8b89tX/h6S/X4eW7/ALjzu0e8mrzpxyZpKLu8eNRxQf1Uacl9bC8fjM+1ymM9vP7/AOxb4p5Tb6Xvp3hxvHLSQ2ZZypZGts8OnUeShwrf04cvWz4Ogr/YEj2eH4MeHDpxc88rld06OvstYfFj8Q6x+be1v+y9vy8fm28jj6Amd52Ye5qFoErw5ZqUnjhLFKMnjUPDW+W6Sv51fPhdJcFI87wtKklLLn3cN7jhxuMeFPb5/NT62rXRHDJkSZve7vQdzx6NV+m1D4vd+r448KbSXnfFuio6fRNP9Z1CdXXwsZOT4cFU64e7XtfXywRvfsASOTIsojExpCYpm4+39DLIjdvqc7dvgbxZqVKi076IzlERvQMYgNAxoQIyVDQhoqlFIlDRkrRaM0WjFTSJomYplJmLGmyZdmKZopGLDtaZUWZJlpmbC0cgTIGg0lNksdCf4EiQxRYxQIbol5PQlIZBtMrsByM2bgUmTKYNEM1IhN//AHoKKCzOTNaG2zYmzDeyt3QelbXRKglyRUWNgmLj60vf3M5I3fqYzXE3jWagYAbAGIYExoSAkpFIlDMlaGmSUjNS0ykyEUjNK0y0zJFpmaWqY0zNMdmNFqBCkNMNJpZMmJMIhokgul/oKTFZoCidwNmdjIFNktkykRZuQbVuE5dP5ktkyka0thyJkxNiZuRkWDkSBrSaqdlfXiZJlxMWE5Mxkzo5kbClVYgAHRgIYhkQMQ0BMpEgCWmUiENAmiZRmikzGitMaZCZSCwrRSITKizNhUi4kob4GUuxSZluEpF0pUiLDcKTNSINikyWyZM1INhslsCWzcgDYmFhQgqEy0yJDEkYCsUZpiZk2OLCxOkngRGY2zGiwAAOzABAAIwEMCYyRkTKRI0wqWikiIs0RmlW0GqCx8zBBcEKi0ZqWjGUuJWSdcDGyxi2vcKybFuN6SmyWxWDLQKxWJsRoGxA2TZrSMpEBZWJTkS2IQ6QExs6I6Juqnhe5cF40E06umnyfT6jGXMB0S0bXOeFeaMf7aLpt1brikurEtK9zg5Y01HdcssVF8uCfK+PUdJhY7NVpuXnxcXSbyRSXPjLrFcOvqvVGkNDd/ptPGpOPmzVddVS5FpOUAAkAACRIYAZRggAmlIAAko0QgMUrLj+IAZqNcy4/gAGKWE+YgA2KTEAClPkD5fcwAkzEAGgTEAGkQCAkAQAQoJYwGAL/YSABRsTACT/2Q=="
     
   //    })
      
      
     



//!8. **Create Elements Dynamically:**
   //!- Add a button labeled “Add Paragraph”. Write a function that, when the button is clicked, creates a new paragraph element and appends it to the document body. The paragraph should contain some text (e.g., “This is a new paragraph!”).
      //  let{body}=document
      //  let button=document.createElement("button")
      //  button.textContent="Add Paragraph"
      //  body.append(button)
      //  button.addEventListener('click',()=>{
      //    let p=document.createElement("p")
      //    p.textContent="This is new paragraph"
      //    body.append(p)
      //  })

//!9. **Disable Button After Click:**
  //! - Add a button labeled “Click Me”. Write a function that disables the button (i.e., makes it unclickable) after it’s been clicked once. You can change the button’s text to indicate that it’s been disabled (e.g., “Button Disabled”).
   //   let{body}=document
   //   let button=document.createElement("button")
   //   button.textContent="Click Me"
   //   body.append(button)

   //   button.addEventListener('click',()=>{
   //     button.disabled=true
   //     console.log("Button is disabled");
     
       
   //   })
    

//!10. **Display Input Text:**
    //!- Create an input field and a div below it. Write a function that, as the user types into the input field, displays the same text in the div In real-time. This can be achieved by listening for the input event and updating the div’s inner text with the input’s current value.
   //  let{body}=document
   //  let input=document.createElement("input")
   //  body.append(input)
   //  let div=document.createElement("div") 
   //  body.append(div) 
   //  input.addEventListener('input',(e)=>{
   //    div.textContent=e.target.value
       
   //  })
   //  console.log(div);
    

//!11. **Change Text Color on Hover:**
   //! - Add a paragraph element with some text. Write a function that changes the text color when the mouse hovers over the paragraph and reverts the color back to its original state when the mouse leaves.
   //  let{body}=document
   //  let p=document.createElement("p")
   //  p.textContent="This is a paragraph"
   //  p.style.color="black"
   //  body.append(p)
   //  p.addEventListener('mouseover',()=>{
   //     p.style.color="red"
   //  })
   //  p.addEventListener('mouseleave',()=>{
   //    p.style.color="black"
   // })
   
//!12. **Display Current Date and Time:**
    //!- Add a button labeled “Show Date and Time”. Write a function that, when the button is clicked, displays the current date and time in a div below the button. You can use JavaScript’s `Date` object to get the current date and time.
   //   let{body}=document
   //   let button=document.createElement("button")
   //   button.textContent="Show Date and time"
   //   body.append(button)
   //   button.addEventListener('click',()=>{
   //       let div=document.createElement("div")
   //       let currentDate=new Date()
   //       let dateTimeString = currentDate.toLocaleString();

   //       div.textContent = dateTimeString;
   //       body.append(div)
        
   //   })

//!13. **Remove Element:**
    //!- Add a div or any other element with some content. Below it, add a button labeled “Remove Element”. Write a function that removes the element from the DOM when the button is clicked.
// let {body}=document
// let div=document.createElement("div")
// div.textContent="This is div content"
// body.append(div)
// let button=document.createElement("button")
// button.textContent="Remove Element"
// body.append(button)
// button.addEventListener('click',()=>{
//     div.remove()
// })

//!14. **Count Button Clicks:**
    //!- Create a button labeled “Click Counter”. Below the button, add a paragraph that displays the number of times the button has been clicked (e.g., “Button clicked 0 times”). Write a function that increments the count every time the button is clicked.
   // let{body}=document
   // let button=document.createElement("button")
   // button.textContent="Click Counter"
   // body.append(button)
   
   // let p=document.createElement("p")
   // let cnt=0;
   //    body.append(p)
   //     p.textContent=`The button clicks ${cnt} times`

   // button.addEventListener('click',()=>{
   //     cnt++;
   //    p.textContent=`The button clicks ${cnt} times` 
   //    })
     
    
   

//!15. **Display Window Width:**
    //!- Add a div that will display the current window width. Write a function that updates the width in the div whenever the user resizes the window. You can listen for the `resize` event and use `window.innerWidth` to get the current width.
     //let{body}=document


//!16. **Add Class to All Elements:**
    //!- Add a few paragraph elements to the page. Below them, add a button labeled “Add Class”. Write a function that, when the button is clicked, adds a specific class (e.g., a class that changes the text color) to all the paragraph elements on the page.
   //   let{body}=document
   //   body.innerHTML=`
   //   <p>Hello1</p>
   //   <p>Hello2</p>
   //   <p>Hello3</p>
   //   <p>Hello4</p>
   //   <p>Hello5</p>
   //   `
   //  let button=document.createElement("button")
   //   button.textContent="Add class"
   //   body.append(button)
   //   button.addEventListener('click',()=>{
   //    let p=document.querySelectorAll("p")
   //    p.setAttribute('class','c')
   //      for(let i=0;i<p.length;i++){
         
         
   //       //   p[0].style.color="red"
   //       //   p[1].style.color="blue"
   //       //   p[2].style.color="green"
   //       //   p[3].style.color="red"
   //       //   p[4].style.color="blue"
   //         p[i].style.color="red"
   //      }
   //   })
     
//!17. **Input Validation:**
    //!- Create a form with a text input field and a submit button. Write a function that validates the input field when the form is submitted. If the field is empty, display an error message below the form and prevent the form from being submitted.
   //? not complete pending
    //  let{body}=document
   //  let form=document.createElement("form")
   //  body.append(form)
   //  let input=document.createElement("input")
   //  form.append(input)
   //  let button=document.createElement("button")
   //  button.textContent="Submit"
   //  form.append(button)
   //  let p=document.createElement("p")
    
   //  button.addEventListener('submit',(event)=>{
   //    event.preventDefault();
      
   //  })
//!18. **Change Font Size:**
   //! - Add a paragraph with some text. Below the paragraph, add a button labeled “Increase Font Size”. Write a function that increases the font size of the paragraph by 2px every time the button is clicked.

   // let{body}=document
   // let p=document.createElement("p")
   // p.textContent="this is paragraph with some content"
   // body.append(p)
   // let button=document.createElement("button")
   // button.textContent="Increase font size"
   // body.append(button)
   // button.addEventListener('click',()=>{
       
   //    let currentSize = window.getComputedStyle(p).fontSize;
   //    let newSize = parseFloat(currentSize) + 2;
   //    p.style.fontSize = newSize + "px"
       
   // })


