
   //!### Event Handling Tasks:

  //! 21. **Button Hover Event:**
      //! - Add a button labeled “Hover Me”. Write a function that changes the background color of the button when the user hovers over it and reverts the color when the mouse leaves.
        // let{body}=document
        // let button=document.createElement("Button")
        // button.textContent="Hover me"
        // body.append(button)
        // button.addEventListener('mouseover',()=>{
        //     button.style.background="pink"
        // })
        // button.addEventListener('mouseleave',()=>{
        //     button.style.background="grey"
        // })
   //!22. **Form Submission Event:**
       //!- Create a simple form with an input field and a submit button. Write a function that prevents the form from being submitted if the input is empty, and display an error message below the form. Use `event.preventDefault()` to prevent form submission.
      
   //!23. **Keyboard Event:**
       //!- Add an input field. Write a function that listens for the “Enter” key and triggers an alert when it’s pressed inside the input field. Make sure the function only works for the “Enter” key.
        //  let{body}=document
        //  let input=document.createElement("input")
        //  body.append(input)
        //  input.addEventListener('keypress',(event)=>{
        //      if(event.key==="Enter"){
        //         alert("Enter key  pressed");
        //      }
        //  })
   //!24. **Double-Click Event:**
       //!- Create a div with some content and write a function that changes its background color when it’s double-clicked. The background should change every time a double-click event occurs.
       //?Pending 
       //   let {body}=document
        //   let div=document.createElement("div")
        //   div.textContent="This is div"
        //   body.append(div)
          
        //   div.addEventListener('dblclick',()=>{
        
        //     div.style.background="purple" 
        //   })
   //!25. **Key Press Counter:**
      //! - Add an input field and a paragraph that displays the number of times a key has been pressed inside the input field. Write a function that increments the count with every keypress and updates the paragraph.
   
   //!26. **Mouse Movement Tracker:**
       //!- Write a function that tracks the mouse’s position on the page in real-time and displays the current x and y coordinates in a div. Update the coordinates every time the mouse moves.
   
   //!27. **Right-Click Event:**
       //!- Add an element to your page, like a button or div. Write a function that triggers an alert when the user right-clicks on the element. Use the `contextmenu` event to handle the right-click.
   
   //!28. **Mouse Over Event:**
       //!- Create a div or paragraph with some text. Write a function that changes its text or color when the mouse is moved over the element and changes it back when the mouse leaves.
   
   //!29. **Focus Event:**
       //!- Add an input field. Write a function that changes the input field’s border color when it gains focus and reverts the color when it loses focus. Use the `focus` and `blur` events for this.
   
       //! 21. *Button Hover Event:*
       //? Add a button labeled “Hover Me”. Write a function that changes the background color of the button when the user hovers over it and reverts the color when the mouse leaves.
       // let btn = document.createElement("button")
       // btn.textContent="Hover Me"
       // console.log(btn);
       // body.append(btn)
       
       // let func = ()=>{
       //     btn.style.backgroundColor = "blue"
       // }
       // let func2=()=>{
       //     btn.style.backgroundColor = ""
       // }
       // btn.addEventListener("mouseover",func)
       // btn.addEventListener('mouseout',func2)
       
       //! 22. *Form Submission Event:*
       // let form = document.createElement("form")
       // let input = document.createElement("input")
       // let btn = document.createElement("button")
       // btn.textContent = "submit"
       
       // body.append(form);
       // form.append(input);
       // form.append(btn);
       // let error = document.createElement("p");
       // let func = () => {
       //   if (input.value.trim() == "") {
       //     event.preventDefault(); // Prevent the form from being submitted
       //     error.textContent = "Error: The input field cannot be empty.";
       //     error.style.color= "red"
       //     body.append(error);
       // }
       // };
       // btn.addEventListener("click", func);
       
       //! 23. *Keyboard Event:*
       //? Add an input field. Write a function that listens for the “Enter” key and triggers an alert when it’s pressed inside the input field. Make sure the function only works for the “Enter” key.
       // let ip = document.createElement("input")
       // body.append(ip)
       // let func=(event)=>{
       //     if (event.key === 'Enter')
       //     alert("Enter key pressed and Alert triggered")
       // }
       // ip.addEventListener("keypress",func)
       
       //! 24. *Double-Click Event:*
    //    //? Create a div with some content and write a function that changes its background color when it’s double-clicked. The background should change every time a double-click event occurs.
    //    let div = document.createElement("div");
    //    div.textContent = "This is a div";
    //    body.append(div);
    //    let colors = ["blue", "pink", "green", "maroon", "yellow", "purple", "grey"];
    //    let colorInd = -1;
    //           let func = () => {
    //      colorInd = (colorInd + 1) % colors.length;
    //      div.style.backgroundColor = colors[colorInd];
    //    };
    //    div.addEventListener("dblclick", func);
       
       //! 25. *Key Press Counter:*
       //? Add an input field and a paragraph that displays the number of times a key has been pressed inside the input field. Write a function that increments the count with every keypress and updates the paragraph.
       // let ip = document.createElement("input")
       // let p = document.createElement("p")
       // body.append(ip)
       // body.append(p)
       // let count = 0
       // let func=()=>{
       //     count++
       //     p.textContent = count
       // }
       // ip.addEventListener("keypress",func)
       
       //! 26. *Mouse Movement Tracker:*
       //? Write a function that tracks the mouse’s position on the page in real-time and displays the current x and y coordinates in a div. Update the coordinates every time the mouse moves.
       // body.textContent = "Move mouse anywhere on the page"
       // let div = document.createElement("div")
       // body.append(div)
       // document.addEventListener('mousemove', function(event) {
       //     // Get the mouse's x and y coordinates
       //     const x = event.clientX;
       //     const y = event.clientY;
       
       //     // Update the content of the div with the current coordinates
       //     div.textContent = X: ${x}, Y: ${y};
       // });
       
       //! 27. *Right-Click Event:*
       //? Add an element to your page, like a button or div. Write a function that triggers an alert when the user right-clicks on the element. Use the contextmenu event to handle the right-click.
       // let div = document.createElement("div");
       // div.style.backgroundColor = "yellow";
       // div.style.height = "200px";
       // body.append(div);
       // let func = (event) => {
       //   alert("You right-clicked on the div!");
       // };
       // div.addEventListener("contextmenu", func);
       
       //! 28. *Mouse Over Event:*
       //?Create a div or paragraph with some text. Write a function that changes its text or color when the mouse is moved over the element and changes it back when the mouse leaves.
       // let div = document.createElement("div");
       // body.append(div)
       // div.textContent= "This is a div"
       // div.style.padding = "50px"
       // div.style.backgroundColor = "pink";
       // let func1=()=>{
       //     div.style.backgroundColor= "yellow"
       // }
       // let func2=()=>{
       //     div.style.backgroundColor= "pink"
       // }
       // div.addEventListener("mouseover",func1)
       // div.addEventListener('mouseleave',func2)
       
       //! 29. *Focus Event:*
    //    //? Add an input field. Write a function that changes the input field’s border color when it gains focus and reverts the color when it loses focus. Use the focus and blur events for this.
    //    let input = document.createElement("input");
    //    body.append(input);
    //    input.style.border = "2px solid blue";
    //    let func1 = () => {
    //      input.style.border = "5px solid red";
    //    };
    //    let func2 = () => {
    //      input.style.border = "2px solid blue";
    //    };
       
    //    input.addEventListener("focus", func1);
    //    input.addEventListener("blur", func2);
   
   