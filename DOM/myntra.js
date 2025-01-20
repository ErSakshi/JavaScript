let {body}=document
console.log(body);
let nav=document.createElement("nav")
console.log(nav);
body.append(nav);


nav.style.height = "50px"; 
nav.style.display = "flex";
nav.style.alignItems = "center"; 
nav.style.border = "1px solid #ccc"; 
nav.style.padding = "10px"; 
nav.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; 

let div1=document.createElement("div")
nav.append(div1);

div1.style.display = "flex";
div1.style.alignItems = "center"; 
div1.style.width = "500px";




let img=document.createElement("img")
img.src="data:image/jpeg;base64,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"
img.style.height="50px";
div1.append(img) 
// div1.style.width="50px"
img.style.height="60px"



let ul=document.createElement("ul")
div1.append(ul)
let li1=document.createElement("li")
ul.append(li1)
li1.textContent="MEN"
let li2=document.createElement("li")
ul.append(li2)
li2.textContent="WOMEN"
let li3=document.createElement("li")
ul.append(li3)
li3.textContent="KIDS"
let li4=document.createElement("li")
ul.append(li4)
li4.textContent="HOME&LIVING"
let li5=document.createElement("li")
ul.append(li5)
li5.textContent="BEAUTY"
let li6=document.createElement("li")
ul.append(li6)
li6.textContent="STUDIO"


div1.style.display="flex"
ul.style.display="flex"
ul.style.listStyleType="none"

ul.setAttribute('class',"ulname")

li1.setAttribute('class',"list")
li2.setAttribute('class',"list")
li3.setAttribute('class',"list")
li4.setAttribute('class',"list")
li5.setAttribute('class',"list")
li6.setAttribute('class',"list")

let searchBar=document.createElement("input")
searchBar.type="text"
searchBar.placeholder="search for products brand and more";
div1.append(searchBar)
// searchBar.style.display="inline-block"
// searchBar.style.height="10px"
searchBar.style.width="500px"
// searchBar.style.padding="5px"
searchBar.style.marginLeft="20px"
// searchBar.style.marginTop="10px"

let div2=document.createElement("div")
nav.append(div2)
div2.style.display = "flex";
 div2.style.display="flex"


let ul2 = document.createElement("ul");

ul2.style.display = "flex";
ul2.style.listStyleType = "none";



let lis1=document.createElement("li")
ul2.append(lis1)
lis1.textContent="Profile"
lis1.setAttribute('class','list2')
let lis2=document.createElement("list")
ul2.append(lis2)
lis2.textContent="Wishlist"
lis2.setAttribute('class','list2')
let lis3=document.createElement("list")
ul2.append(lis3)
lis3.textContent="Bag"
lis3.setAttribute('class','list2')
div2.append(ul2)
ul.style.display="flex"
ul.style.listStyleType="none"

div2.append(ul2); 
div2.style.paddingLeft="400px"

// let div2 = document.createElement("div");
// nav.append(div2);
// div2.style.display = "flex";



// // Create list items using 'li'
// let lis1 = document.createElement("li");
// ul2.append(lis1);
// lis1.textContent = "Profile";
// lis1.setAttribute('class', 'list2');

// let lis2 = document.createElement("li"); // Use 'li' here
// ul2.append(lis2);
// lis2.textContent = "Wishlist";
// lis2.setAttribute('class', 'list2');

// let lis3 = document.createElement("li"); // Use 'li' here
// ul2.append(lis3);
// lis3.textContent = "Bag";
// lis3.setAttribute('class', 'list2');

// // Style ul2

// // Optionally, you can add some spacing or styling
// ul2.style.marginLeft = "20px"; // Add some margin if needed

// div2.append(ul2)







