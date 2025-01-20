//! Array Literal way
// let arr =[10,20,30,40]
// console.log(arr);

//! Using Array class and new Keyword
// let arr2 =[50,60,70]
// console.log(arr2);

//? Dynamically typed language
//? 1. we can add any size of Array
//? 2. we can add any type of data in Array 
 //! In this Array we add multiple values in single array
// let arr =[10,"hello",true,20n ,undefined,null,NaN ,function(){let a=10},[10,20,30[40,[50,[60,['last']]]]]]
// console.log(arr);

// let arr =[10,"hello",true,20n ,undefined,null,NaN ,()=>{console.log("function inside the array");
// },function(){let a=10},[10,20,30[40,[50,[60,['last']]]]]]
// console.log(arr);
// arr[7]()   //here we are calling fuction directly using index 

//!
// let arr =[10,"hello",true,20n ,undefined,null,NaN ,()=>{console.log("function inside the array");
// },function(){let a=10},{name:"Tinku"},[10,20,30[40,[50,[60,['last']]]]]]
// console.log(arr[9].name);   //

// let arr =[10,"hello",true,20n ,undefined,null,NaN ,()=>{console.log("function inside the array");
// },function(){let a=10},[10,20,30,[40,[50,[60,['last']]]]]]
// console.log(arr[9]);
// console.log(arr[9][3]);
// console.log(arr[9][3][0]);
// console.log(arr[9][3][1][1][1]);
// console.log(arr[9][3][1][1][1][0]);

// let arr1 =[10,20,30,40]
// console.log(arr1);
// //arr1.push(50);   //? it push the element at the last index
// //arr1.pop(40)     //? it remove the element from the last index
// //arr1.unshift(0);  //? it add new element at the 0th index
// //arr1.shift(10);   //? it remove new element from the 0th element
// console.log(arr1.indexOf(20));  //? it represents index at which the element is presesnt
// console.log(arr1.at(3)); //? it represendts element which is present at given index 
// console.log(arr1);
// console.log(arr1.includes(20)); //? it checks element is present in array or not
//it will return true if element is present in array 
//it will return false if element is not present in array

// let array =[10,20,30,40]
// console.log(array);
// //let newArray = array.slice(0,1);
// let newArray = array.slice(2,3); // it has arguments as start index and end index
// //? it runs the array till last index but not includes the last element
// //? does not modify original array
// console.log(newArray);
// console.log(array);

// let newArray2 =array.splice(0,1);  //? splice() will affect the original array
// console.log(newArray2);       //? here first argument is starting index and second argument is length of element

// console.log(array);

// let newArray3 = array.splice(0,0,100);
// console.log(newArray3);
// console.log(array);
// let newArray4 = array.splice(3,0,300);
// console.log(newArray4);
// console.log(array);

//! 28-09-2024
// let arr =[10,20,30,40,50,60,70,80]
// //? arr.splice()
// let newArr=arr.splice(4,3)
// console.log(newArr);
// console.log(arr);
// let num=4000
// let new1 =arr.splice(arr.length,0,num)
// console.log(arr);

// // let new2=arr.splice(1,1,num)
// // console.log(arr);

// let ne3=arr.splice(0,arr.length-1) //when we want only last element
// console.log(arr);

let data =[
    [
        {
          "name": "Ronald Huels",
          "address": "Ebertburgh",
          "contact": "(811) 785-5972 x86489",
          "id": "1"
        },
        {
          "name": "Elizabeth McClure",
          "address": "McKenzieshire",
          "contact": "1-370-293-1490 x676",
          "id": "2"
        },
        {
          "name": "Carlton Treutel",
          "address": "Port Edison",
          "contact": "607.543.5128 x95223",
          "id": "3"
        },
        {
          "name": "Colleen Berge",
          "address": "South Janet",
          "contact": "1-785-831-1992 x4876",
          "id": "4"
        },
        {
          "name": "Jennie Frami",
          "address": "Sylvesterborough",
          "contact": "726-707-0464 x028",
          "id": "5"
        },
        {
          "name": "Rick Gleichner",
          "address": "East Johnathan",
          "contact": "421.656.7807 x93721",
          "id": "6"
        },
        {
          "name": "Rosemary Cummings",
          "address": "Port Mathiasfield",
          "contact": "540.911.4441 x611",
          "id": "7"
        },
        {
          "name": "Lorenzo Zemlak",
          "address": "Merced",
          "contact": "290.959.8463 x84032",
          "id": "8"
        },
        {
          "name": "Sarah Cassin",
          "address": "New Margotton",
          "contact": "594-623-7400 x4865",
          "id": "9"
        },
        {
          "name": "Darrel Hegmann",
          "address": "The Villages",
          "contact": "(411) 909-0095 x910",
          "id": "10"
        },
        {
          "name": "Jorge Schimmel",
          "address": "Dooleyton",
          "contact": "(771) 239-3464 x038",
          "id": "11"
        },
        {
          "name": "Louis Fritsch",
          "address": "Daxhaven",
          "contact": "1-390-567-5271 x20048",
          "id": "12"
        },
        {
          "name": "Lynn Erdman",
          "address": "East Granville",
          "contact": "232.677.8793 x6741",
          "id": "13"
        },
        {
          "name": "Terrance Lynch",
          "address": "Doyleberg",
          "contact": "(271) 680-4947 x315",
          "id": "14"
        },
        {
          "name": "Miss Lauren Nicolas",
          "address": "Spinkahaven",
          "contact": "662.993.0963",
          "id": "15"
        },
        {
          "name": "Mildred Davis",
          "address": "Kulasfort",
          "contact": "(580) 961-5553 x6536",
          "id": "16"
        },
        {
          "name": "Wilbur Lakin",
          "address": "Kuvaliston",
          "contact": "(276) 530-0182 x0425",
          "id": "17"
        },
        {
          "name": "Hilda Yundt",
          "address": "West Julia",
          "contact": "(292) 756-5241",
          "id": "18"
        },
        {
          "name": "Tracy O'Connell",
          "address": "Kearny",
          "contact": "957-813-4470 x4163",
          "id": "19"
        },
        {
          "name": "Grace Kertzmann",
          "address": "Clearwater",
          "contact": "1-871-448-0240 x628",
          "id": "20"
        },
        {
          "name": "Iris Swaniawski",
          "address": "Lake Samsonworth",
          "contact": "417.468.4472 x9943",
          "id": "21"
        },
        {
          "name": "Mr. Joanna Dach",
          "address": "New Amiyaland",
          "contact": "487-988-0446",
          "id": "22"
        },
        {
          "name": "Marty Hodkiewicz",
          "address": "Altoona",
          "contact": "882-689-0077",
          "id": "23"
        },
        {
          "name": "Wade Thompson",
          "address": "Murraymouth",
          "contact": "940.801.1379",
          "id": "24"
        },
        {
          "name": "Jacquelyn Grady",
          "address": "South Clint",
          "contact": "(684) 722-6015",
          "id": "25"
        },
        {
          "name": "Cassandra Romaguera",
          "address": "Framiville",
          "contact": "797.877.1274 x849",
          "id": "26"
        },
        {
          "name": "Bryan Hintz DVM",
          "address": "Raeworth",
          "contact": "1-962-500-2430 x7178",
          "id": "27"
        },
        {
          "name": "Vivian Dickinson",
          "address": "Macicester",
          "contact": "729.515.0777",
          "id": "28"
        },
        {
          "name": "Lucas Kris",
          "address": "Port Cole",
          "contact": "642.782.7534",
          "id": "29"
        },
        {
          "name": "Candice Kutch",
          "address": "Larsonhaven",
          "contact": "(407) 687-9271",
          "id": "30"
        },
        {
          "name": "Charlotte Altenwerth",
          "address": "Legrosshire",
          "contact": "871.498.6697",
          "id": "31"
        },
        {
          "name": "Chris Dicki",
          "address": "Fort Filiberto",
          "contact": "1-656-297-1483 x5658",
          "id": "32"
        },
        {
          "name": "Aaron Pfannerstill",
          "address": "West Cali",
          "contact": "(380) 597-5688 x279",
          "id": "33"
        },
        {
          "name": "Miss Anthony Schmidt DVM",
          "address": "Westoncester",
          "contact": "1-847-777-2245 x151",
          "id": "34"
        },
        {
          "name": "Ida Ruecker",
          "address": "West Jeremie",
          "contact": "(696) 710-9887 x89748",
          "id": "35"
        },
        {
          "name": "Janice McDermott",
          "address": "New Vivian",
          "contact": "1-273-508-5801 x0523",
          "id": "36"
        },
        {
          "name": "Edmund Carter",
          "address": "Rohanland",
          "contact": "620-593-3144",
          "id": "37"
        },
        {
          "name": "Miss Jennifer Zemlak",
          "address": "Considineton",
          "contact": "721-498-5473 x5326",
          "id": "38"
        },
        {
          "name": "Carl Thompson",
          "address": "Mooreshire",
          "contact": "940-890-3731 x65591",
          "id": "39"
        },
        {
          "name": "Peggy Bauch",
          "address": "West Pattie",
          "contact": "(593) 595-1040 x21428",
          "id": "40"
        },
        {
          "name": "Krista Ledner",
          "address": "Maverickville",
          "contact": "252-298-1164 x0666",
          "id": "41"
        },
        {
          "name": "Owen Balistreri DVM",
          "address": "North Nicoleworth",
          "contact": "(626) 622-6349 x9520",
          "id": "42"
        },
        {
          "name": "Blanche Walker",
          "address": "Fort Elliot",
          "contact": "579-324-1878 x890",
          "id": "43"
        },
        {
          "name": "Fredrick Kuvalis",
          "address": "Griffinborough",
          "contact": "1-409-214-6024 x343",
          "id": "44"
        },
        {
          "name": "Jerry McGlynn",
          "address": "Tinley Park",
          "contact": "(632) 847-6216",
          "id": "45"
        },
        {
          "name": "April Hickle MD",
          "address": "Fort Elaina",
          "contact": "598.379.9229 x039",
          "id": "46"
        },
        {
          "name": "Mr. Stacey Nicolas",
          "address": "Gilesstead",
          "contact": "(376) 527-0653",
          "id": "47"
        },
        {
          "name": "Kelli Hoppe",
          "address": "South Wilmer",
          "contact": "208.290.3236",
          "id": "48"
        },
        {
          "name": "Alton Kerluke",
          "address": "South Clotilde",
          "contact": "(859) 493-2014 x063",
          "id": "49"
        },
        {
          "name": "Cesar Kozey",
          "address": "Marquardttown",
          "contact": "1-809-991-4529 x03357",
          "id": "50"
        }
      ]
]
   let jsonData =JSON.stringify(data[0]);
   let newData =JSON.parse(JSON.stringify(data[0]))
   console.log(newData);

//    let name=prompt("enter name");
//    let address=prompt("enter address");
//    let contact=prompt("enter contact");
//    let userObj = {name,address,contact};
//    newData.push(userObj);
//  console.log(newData.push(userObj));
  
 console.log(data);
//  data.forEach(console.log((val,ind,wholeArray)=>{console.log();val.name
//  });
//  )
 //data.forEach((val)=>{console.log(val.name);
 //})

 
//  let a="Java"
//  let b="Script"
//  let c=Document.write(a,b)
//  console.log(c);
 
// for(let i=0;i<data.length;i++)
// {
//   console.log(data[i]);
  
// }
// console.log('---------------------------------------------------------------');

// for(let i=0;i<data.length;i++)
//   {
//     console.log(data[i].address)
    
//   }

 let arr =[10,20,30,40,50,60,70]
//   arr.forEach((val)=>{console.log(val);  //! We can call directly inside console statemenet
//   })

//   //! we can declare first then we call it
//   let funct=(val)=>{
//     console.log(val);
    
//   }
//   arr.forEach(funct)
arr.forEach((val,ind,wholeArray)=>{console.log(wholeArray);  //forEach loop syntax
})

//! sort() is an higher order function

let numbers =[10,30,10,500,665,300]
// console.log(numbers.sort());    //? it performs sorting with first digit only
  //? sort(currentvalue,nextvalue)
// console.log(numbers.sort((a,b)=>{
//   return a-b;                       //? it performs sorting with whole digit
// })); //? for ascending
// console.log(numbers.sort((a,b)=>{  
//   return b-a;
// }));//? for descending
  let sortArray = numbers.sort((val)=>{
    return (val+100);
  })
  console.log("soreted-array",sortArray);
  console.log("original array",numbers); //? it modifies the original array
  
  


let Array =[70,500,330,90,50,10,10];
let newArr =Array.forEach((val)=>{
  return val+100;
})
console.log(newArr);   //? forEach cannot return any thing
                       //? if it is returning anything check it is array
                       //? original array is not modified 
console.log(Array);

//! iterating over array elements using forof loop
let arr3=[10,20,30,40,50]
for(val of arr3){
  console.log(val+100);
  
}
//! using forin loop
let arr4=[10,20,30,40,50]
for(val in arr3){
  console.log(val+100);
  
}
//? if we are using forin loop in array we get indexes
//! when we have to remove first level of array then we use flat method
//! means we are combining whole array
let arr6=[[10,20],[30,40],50]
console.log(arr6.flat());



  



 

















