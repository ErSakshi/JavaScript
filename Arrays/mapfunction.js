//
//TODO  used to make comment orange
//FIXME highlight in red
//NOTE  highlights in blue
//HACK  highlights in purple
//REVIEW  highlights in yellow

//! map method
//! map is an high-order-function which is mostly used in front-end
//? map is same as forEach with one diifference that map can return anything
//? forEach cannot be return

let arr=[10,20,30,40,50,60,70,80]
// let values=arr.forEach((val,ind,wholeArray)=>{
//     console.log(val);
//     return val;
    
// })
// console.log(values);
//? we cannot return anything with forEach because of this problem it is used as v
//?less to overcome this problem we use map function

let values=arr.map((val,ind,wholeArray)=>{
        console.log(val);
        //return val;   //? it is returning the value and storing it 
        return val+100; 
        
    })
    console.log(values); //? it is modifying when we try to change some functionality
    console.log(arr);  //? it is not affecting the original array
    
  //!Task
  //! 1 Double the Numbers
  let numbers =[1,2,3,4,5]
  //let newArr =numbers.map(val=>val*2) //? it is implicit return
  let newNumbers = numbers.map((val)=>{
    return val*2
  })
  console.log(numbers);
  
  console.log(newNumbers);
  
  //! 2.Convert Temperatures
  // formula =(C*(9/5)+32)
  let tempInCel =[0,10,20,30]
  let tempInFah=tempInCel.map((val)=>{
    let f =(val*(9/5)+32)
    console.log(f);
    return f
  })
  console.log(tempInCel);
  console.log(tempInFah);
  
  //! 3.Add Hello to Each Name
  let name =["Alice","Bob","Charlie"]
   let newName=name.map((val)=>{
    let newN ="Hello "+val
    return newN
   })
   console.log(name);
   console.log(newName);
   
  //! 4.Extract Property Values
  let obj =[{name:"Alice",age:25},{name:"Bob",age:30}]
  // let newObj =obj.map((val)=>{
  //   let a=Object.entries(obj)
  //    a.map((val)=>{
  //       console.log(a[0][1]);
  //        })
    
    //return a;
    //})
    let b=obj.map((val)=>{
      return val.name;
    })
    console.log(b);
    

    //! 5. Square the Numbers
    let num1 =[2,3,4]
     let square= num1.map((val)=>{
        return val*val
      })
      console.log(square);
      
 let name1 =["Tinku","Pinku","Rinku"]
 let newArray =[]
 let a=name1.forEach((val)=>{
    newArray.push(`Hello ${val}`)
    
 })
   console.log(newArray);

    //! 6 Create HTML list items
  let list=["Apples","Orange","Bananas"]
  let newList=list.map((val)=>{
    return (`<li>${val}</li>`)
  })
  console.log(newList);

  //! 7.Add Tax to Prices
  let price =[100,200,300]
  let taxArray =price.map((val)=>{
   let tax=(15/100)*val+val
   return tax
   
   
  })
  console.log(taxArray);

  //! 8.Convert Strings to Number
  let newNumberArray=[]
  let stringNumber =["1","2","3"]
  let numberArray=stringNumber.map((val)=>{
    let d=parseInt(val);
    return d
  })
 console.log(numberArray);
 
  
  
   
   

   //TODO filter()
   //! filter is highOrder function
   //! filter() is returns true if the condition is true and if it is true then it returns the element on which iteration is done
   //! if it returns false then it cannot return the element on  which iteration is going on
   //! syntax is filter((val,ind,wholeArray)=>{})
    //! it is used on Array
   let ages =[12,34,55,44,18,19,10,50]
   let newAges =ages.filter((val)=>{
    return val>=18
   })
   console.log(newAges); 


   let data=[{
    "first_name": "Gwenni",
    "last_name": "Arghent",
    "gender": "Agender"
  }, {
    "first_name": "Janka",
    "last_name": "Earpe",
    "gender": "Female"
  }, {
    "first_name": "Garfield",
    "last_name": "Benninck",
    "gender": "Male"
  }, {
    "first_name": "Corbett",
    "last_name": "Placidi",
    "gender": "Male"
  }, {
    "first_name": "Lorinda",
    "last_name": "Deans",
    "gender": "Female"
  }, {
    "first_name": "Julina",
    "last_name": "Kunkler",
    "gender": "Female"
  }, {
    "first_name": "Lindsay",
    "last_name": "Burman",
    "gender": "Female"
  }, {
    "first_name": "Prisca",
    "last_name": "Leynton",
    "gender": "Female"
  }, {
    "first_name": "Anya",
    "last_name": "Haslum",
    "gender": "Female"
  }, {
    "first_name": "Etti",
    "last_name": "Ditzel",
    "gender": "Female"
  }]
 

  let femaleData =data.filter((val)=>{
    return val.gender=="Female"
  })
  console.log(femaleData);
  
  let maleData =data.filter((val)=>{
    return val.gender=="Male"
  })
  console.log(maleData);
  

 