//1.**Function Declaration (Say Hello)**:  
//Write a function named `sayHello`. This function should print the message “Hello, world!” when you call it. 
//Call the function once, then call it two more times to say hello three times.  

let sayHello=function() {
  
console.log("Hello,World....!");
  
}
sayHello();
sayHello();
sayHello();

//2.**Function Expression (Say Goodbye)**:  
  // Create a function that says “Goodbye!” but don’t use the normal function syntax. 
   //Instead, assign it to a variable named `farewell`. 
   //Then, call this variable like a function to say goodbye.  


   let farewell = function() {
    console.log("GoodBye!");
    }
    farewell();

//3.**Arrow Function (Cheer Up)**:  
   //Create an arrow function called `cheerUp`. This function should print the message “Cheer up, buddy!”. 
   //Call this function to give yourself some motivation.  
   
   let cheerUp =()=>{
    console.log("Cheer up,buddy!");
    
   }
   cheerUp()

   //4.Function with a Name (Introduce Yourself)**:  
   //Write a function named `introduce`. It should take one thing: your name (as a word). 
    //but replace “[your name]” with the actual name you give it. 
    //When you call this function, it should print “Hello, my name is [your name]!” 

     
    //  let introduce =()=>{
    //   let name=prompt("what is your name ")
    //   console.log(`Hello my name is ${name}`);
      
    //  }
    //  introduce()

     //5.**Function Expression (Order Pizza)**:  
   //Write a function that orders pizza by saying “Ordered a [flavor] pizza!”, 
   //but don’t use the regular function syntax.
    //Assign the function to a variable called `placeOrder`, 
    //and it should accept a flavor like “cheese” or “pepperoni”. Call the function with your favorite flavor.  

     
    // let placeOrder =()=>{
    //   let flavor=prompt("Ordered a flavor pizza !")
    //   console.log(`Your favorite ${flavor} pizza is here..
    //       keep ordering ....`);
      
   // }
   // placeOrder();

    //6.*Arrow Function (Greet a Person)**:  
  // Create an arrow function called `greetPerson`. This function should accept one thing: the name of a person.
    //When you call it, it should say “Hi, [name]!” with the person’s name. Call it with different names.  

    // let greetPerson =()=>{
    //   let name=prompt("what is your name ....")
    //   console.log(`Hi,${name} !`);
    // }
    // greetPerson();

    //7.**Function Calling Another Function (Morning Routine)**:  
   //Write a function called `startMorning` that calls another function called `makeCoffee`. 
   //`makeCoffee` should print “Making coffee…”. Call `startMorning` to pretend you’re getting ready for the day. 

  //  let startMorning =(makeCoffee)=>{
  //     console.log("I am getting ready but firstly ...");
  //     makeCoffee();
      
  //  }

  //  let makeCoffee=()=>{
  //    console.log("Making coffee...");
     
  //  }
  //  startMorning(makeCoffee);

   //8.**Higher-Order Function (Morning Routine)**:  
   //Create a function called `morningRoutine`. This function should take two other functions as input: `brushTeeth` and `getDressed`. 
   //When you call `morningRoutine`, it should call both of these functions in order. 
   //Call `morningRoutine` to simulate getting ready for the day.

  //  let morningRoutine=(brushTeeth,getDressed)=>{
  //   console.log("Good morning...");
  //   brushTeeth();
    
  //  }
  //  let brushTeeth=()=>{
  //   console.log("Brushing teeth...");
  //   getDressed();
  //  }
  //  let getDressed=()=>{
  //   console.log("Getting  Well Dress-up ....");
    
  //  }
  //  morningRoutine(brushTeeth,getDressed);


   //9.**Callback Function (Take Action)**:  
   //Write a function called `takeAction` that takes a callback function. 
   //When `takeAction` is called, it should print “Action in progress!” and then run the callback function,
   // which prints “Action completed!”.  

   let takeAction = ()=>{
    console.log("Action in progress!");
     callback();
    
   }
   let callback =()=>{
    console.log("Action completed !");
    }
    takeAction(callback);


    //10.	**Arrow Function (Calculate Area)**:  
  // Create an arrow function called `calculateArea`. 
   //Call it with different numbers to see the area of various rectangles.
   //It should take two numbers, length and width, and print “The area is [length * width]”. 

   let calculateArea=(length,width)=>{
     console.log(`The area of rectangle is ${length*width}`);
     
   }
   calculateArea(5,5);
   calculateArea(70,5);
   calculateArea(3,4);
   calculateArea(25,20);
   calculateArea(5,6);


   //11.**Higher-Order Function (Lunch Break)**:  
  //  Write a function called `lunchBreak` that accepts two functions: `eatLunch` and `takeNap`.
  //   `lunchBreak` should call both functions in order.
  //   Call `lunchBreak` to simulate your relaxing lunch break.  /

  let lunchBreak=()=>{
    console.log("It's a lunch break time ....");
    eatLunch();
    
  }
  let eatLunch=()=>{
    console.log("Everyone is taking their Lunch ...");
    takeNap();
  }
  let takeNap=()=>{
    console.log("Everyone is taking Nap after lunch ? ");
    
  }
  lunchBreak(eatLunch)


  //12.**Function Declaration (Support Team)**:  
  // Write a function called `supportTeam` that prints “Go, team!” every time you call it.
    //Call it a few times to pretend you’re cheering at a game.  

    let supportTeam =()=>{
      console.log("Go, team!");
      console.log("Go, team!");
      console.log("Go, team!");
      console.log("Go, team!");
     
    }
    supportTeam();
    supportTeam();

    //13.	**Arrow Function (Weather Update)**:  
   //Create an arrow function called `weatherUpdate`. 
   //This function should print “The weather is great today!”. 
   //Call it to enjoy a fake weather report.  

   let weatherUpdate =()=>{
      console.log("The weather is great today...");
      
   }
   weatherUpdate();

   //14.**Function Expression (Talk to Pet)**:  
   //Create a function expression called `talkToPet` that prints “Who’s a good pet?”. 
   //Assign it to a variable `petTalk` and call it when you feel like talking to your pet.  

   function talkToPet(){
    console.log("Who's a good pet");
    
   }
   let petTalk = talkToPet();


   //	15.**Function with Multiple Parameters (Favorite Movie)**:  
   //Write a function called `favoriteMovie` that takes two things: a movie name and the year it came out.
    //When you call it, it should say “My favorite movie is [movie] from [year]”
   
    // let favoriteMovie=()=>{
    //    let name=prompt("Your favorite movie...");
    //    let year=prompt("Year of movie released");
    //    console.log(`My favorite movie is ${name} from ${year}`);
       
    // }
    // favoriteMovie()
  
    //iifc
    // (()=>{
    //   let name=prompt("Your favorite movie...");
    //   let year=prompt("Year of movie released");
    //   console.log(`My favorite movie is ${name} from ${year}`);
     
    // })();

    //16.	**Function Calling Another Function (Daily Schedule)**:  
   //Create a function called `dailySchedule` that calls three other functions: `morningRoutine`, `work`, and `eveningChill`. 
   //Each of these should print a message. Call `dailySchedule` to go through your fake day.
  
    let dailySchedule=(morningRoutine,work,eveningChill)=>{
      morningRoutine();
      work();
      eveningChill();
    }
    let morningRoutine=()=>{

      console.log("Good morning everyone ...");
      
    }
    let work=()=>{
      console.log("Today I am very busy in my work .");
      

    }
    let eveningChill=()=>{
      console.log("Let's have a evening chill.....");
       
    }

   dailySchedule(morningRoutine,work,eveningChill)

   //	**Higher-Order Function (Exercise Routine)**:  
  //  Write a function called `exerciseRoutine` that takes two other functions: `stretch` and `run`. 
  //  Each function should print what you’re doing (stretching and running). 
  //  Call `exerciseRoutine` to start your workout

  let exerciseRoutine= (stretch,run)=>{
    console.log("starting my exercise...");
    stretch();
    run();
  }
  let stretch=()=>{
    console.log("I am Stretching my body ....");
    
  }
  let run=()=>{
   console.log("I am running....");
   
  }
  exerciseRoutine(stretch,run);

  //18.	**Arrow Function (Motivational Speaker)**:  
  //  Create an arrow function called `motivateMe` that prints “You can do it!”. 
  //  Call it every time you feel like giving up.  
    
  let motivateMe = ()=>{
    console.log("You can do it!");
    }
    motivateMe()
    motivateMe()

    //19.	**Function Expression (Order Ice Cream)**:  
  //  Create a function expression called `orderIceCream` that takes one thing: a flavor of ice cream. 
  //  It should say “Ordering [flavor] ice cream!”. Assign this function to a variable `iceCreamTime` 
  //  and call it with your favorite ice cream flavor.  
   let orderIceCream=function(){
      let name=prompt("Your favorite ice-flavor is ....")
      console.log(`Ordering ${name} ice cream !`);
      
  } 
  let iceCreamTime = orderIceCream();
  console.log(iceCreamTime);

  //20.	**Function Declaration (Night Routine)**:  
  //  Write a function called `nightRoutine`. 
  //  This function should print “Brushing teeth” and “Going to bed” when you call it.
  //  Call it to pretend you’re getting ready for bed.  
  
  let nightRoutine=function(){
     console.log('"Brushing teeth" and "Going to bed"');
     
  }
  console.log("Getting ready for bed ");
  
  nightRoutine()