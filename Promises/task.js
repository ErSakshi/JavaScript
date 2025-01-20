//!### 1. **Create a Simple Promise**
   //!- Create a promise that resolves with the message “Data loaded successfully”.
   //!- Use `.then()` to log the result when the promise resolves.

   //!**Example Goal**: You should see “Data loaded successfully” in the console when the promise resolves.
   
//    let p1=new Promise((resolve,reject)=>{
//       resolve()
//    })
//    p1.then(()=>{console.log("Data Loaded Successfully");
//    });
   

//!### 2. **Basic Promise Rejection**
   //!- Write a promise that rejects with an error message “Error: Failed to load data”.
   //!- Use `.catch()` to handle the rejection and log the error message to the console.

  //! **Example Goal**: The console should show the error message “Error: Failed to load data” when the promise rejects.
    //  let p2=new Promise((resolve,reject)=>{
    //     reject()
    //  })
    //  p2.catch(()=>{console.log("Failed to load data");
    //  })

 //!### 3. **Promise with `.then()` for Math Operations**
   //!- Create a promise that resolves with the number `10`.
   //!- In the `.then()` block, multiply the number by 2 and log the result.

   //!**Example Goal**: The console should show `20` as the final result after the promise resolves.
      
//    let p3=new Promise((resolve,reject)=>{
//         let a=10*2
//         resolve(a)
//       })
//       p3.then((val)=>{console.log(val)})
    
//!### 4. **Chain Multiple `.then()` Calls**
  //! - Create a promise that resolves with the number `5`.
  //! - Chain two `.then()` blocks. In the first block, add `3` to the number. In the second block, multiply the result by `2`.
  //! - Log the final result after all `.then()` blocks have executed.

  //! **Example Goal**: The final result logged to the console should be `16`.
    //  let p4=new Promise((resolve,reject)=>{
    //     let b=5
    //     resolve(b)
    //  })
    //  p4.then((val)=>{return val+3}).then((val2)=>{return val2*2}).then((result)=>{console.log(result);})

//!### 5. **Fetch Data from an API**
  //! - Use `fetch` to retrieve data from the API `https://jsonplaceholder.typicode.com/posts/1`.
   //!- In the `.then()` block, convert the response to JSON and log the post title to the console.

   //!**Example Goal**: The console should display the title of the post you fetched.
    // let p5=fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    // console.log(p5);
    // p5.then((val)=>{
    //     console.log(val);
    //     let data=val.json()
    //     return data
        
    // }).then((val1)=>{console.log(val1);
    // }).catch((err)=>{console.log("Something went wrong",err);
    // })

    

//!### 6. **Handle Fetch Errors**
  //! - Use `fetch` to request data from a non-existent API endpoint (e.g., `https://jsonplaceholder.typicode.com/nonexistent`).
  //! - In the `.catch()` block, log an error message to the console, such as “Error: Could not retrieve data.”

   //!**Example Goal**: You should see “Error: Could not retrieve data” logged to the console if the request fails.
    // let p6=fetch(`https://jsonplaceholder.typicode.com/nonexistent`)
    // p6.then((val)=>{
    //     console.log(val);
    //     let data=val.json()
    //     return data
        
    // }).then((val2)=>{console.log(val2);
    // }).catch((err)=>{console.log("Error: Could not retrieve data",err);
    // })


//!### 7. **Conditional Promise Resolution**
  //! - Create a promise that uses a random number (between 0 and 1) to decide whether to resolve or reject.
   //!- If the number is greater than 0.5, resolve with the message “Success!”.
  //! - If the number is less than or equal to 0.5, reject with “Failure!”.
   //!- Handle both cases using `.then()` and `.catch()`.

   //!**Example Goal**: Depending on the random number, you should either see “Success!” or “Failure!” in the console.
    // let p6=new Promise((resolve,reject)=>{
    //     let c=Math.random()
    //     if(c>0.5){
    //         resolve()
    //     }
    //     else{
    //         reject()
    //     }
    // })
    // p6.then(()=>{console.log("Success!");
    // })
    // p6.catch(()=>{console.log("Failure!");
    // })

//!### 8. **Fetch and Convert Response to JSON**
  //! - Use `fetch` to get data from `https://jsonplaceholder.typicode.com/users`.
   //!- In the `.then()` block, convert the response to JSON and log the full JSON object to the console.

   //!**Example Goal**: The console should display the list of users in JSON format.
    // let p7=fetch("https://jsonplaceholder.typicode.com/users")
    // p7.then((val)=>{
    //     console.log(val);
    //     let d=val.json()
    //     return d
        
    // }).then((val2)=>{console.log(val2);
    // }).catch((err)=>{console.log(err);
    // }


//!### 9. **Chain Fetch Requests**
  //! - Use `fetch` to retrieve a post from `https://jsonplaceholder.typicode.com/posts/1`.
   //!- Once you get the post’s `userId`, use another `fetch` request to get the details of the user from `https://jsonplaceholder.typicode.com/users/{userId}`.
   //!- Chain both fetch requests using `.then()` and log both the post and user details.

   //!**Example Goal**: The console should first show the post data, then the user details associated with that post.
    // let p8=fetch("https://jsonplaceholder.typicode.com/posts/1")
    // p8.then((val)=>{console.log(val);
    // let data=val.json()
    // return data
    // }).then((val2)=>{console.log(val2);
    // return val.userId }).then((id)=>{console.log{id}}).then(()=>{fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((val3)=>{console.log(val3);})
    // })
    



//!### 10. **Promise that Resolves or Rejects Based on Input**
   //!- Create a promise that accepts a number as input.
   //!- If the number is greater than `5`, resolve with “Valid number!”.
   //!- If the number is less than or equal to `5`, reject with “Invalid number!”.
   //!- Handle both success and error cases using `.then()` and `.catch()`.

   //!**Example Goal**: If you input a number greater than 5, you should see “Valid number!”. Otherwise, “Invalid number!” will appear.

    // let p9=new Promise((resolve,reject,num=6)=>{
    //     if(num>5){
    //       resolve()
    //     }
    //     else{
    //       reject()
    //     }
    // })
    // p9.then(()=>{console.log("Valid number");
    // })
    // p9.catch(()=>{console.log("Invalid Number");
    // })

//!### 11. **Propagate Errors Through Multiple `.then()`**
  //! - Create a promise that either resolves or rejects based on a random number.
  //! - If it rejects, log an error message and propagate the error to the next `.then()` block.
  //! - Continue propagating the error and handle it in a final `.catch()` block.

  //! **Example Goal**: The console should display the error message, and it should be handled correctly at the end.
  // let p10=new Promise((resolve,reject)=>{
  //    let num=Math.random()*20
  //    if(num>10){
  //     resolve("Successfull...")
  //    }
  //    else{
  //     reject("Something is wrong")
  //    }
  // })
  // p10.then((val)=>{console.log(val);
  // }).catch((err)=>{console.log("Invalid",err);
  // })

//!### 12. **Transform Fetched Data**
  //! - Use `fetch` to get a list of users from `https://jsonplaceholder.typicode.com/users`.
  //! - In the `.then()` block, transform the data to only include usernames.
  //! - Log the array of usernames to the console.

  //! **Example Goal**: The console should display an array of usernames, extracted from the fetched user data.



//!### 13. **Resolve or Reject Based on Boolean**
   //!- Create a promise that uses a Boolean flag (e.g., `true` or `false`) to decide whether to resolve or reject.
   //!- If the flag is `true`, resolve with “Action successful!”.
   //!- If the flag is `false`, reject with “Action failed!”.
   //!- Handle both cases using `.then()` and `.catch()`.

  //! **Example Goal**: Depending on the flag value, you should see either “Action successful!” or “Action failed!” in the console.
  //  let p11= new Promise((resolve,reject)=>{
  //   let flag=true;
  //   if(flag){
  //     resolve("Action Successful")
  //   }
  //   else{
  //     reject("Action Failed")
  //   }
  //  })
  //  p11.then((val)=>{console.log(val);
  //  })
  //  p11.catch((val2)=>{console.log(val2);
  //  })
//!### 14. **Fetch and Return Specific Data**
   //!- Use `fetch` to get a list of posts from `https://jsonplaceholder.typicode.com/posts`.
   //!- In the `.then()` block, return only the title of the first post and log it to the console.

   //!**Example Goal**: The console should display the title of the first post.
   let p14=fetch("https://jsonplaceholder.typicode.com/posts")
   p14.then((val)=>{
    let data=val.json()
   }).then((val2)=>{console.log(val2);
   })
   

//!### 15. **Chain Fetch Requests with User and Posts**
  //! - Fetch user data from `https://jsonplaceholder.typicode.com/users/1`.
   //!- Once you get the user’s ID, fetch the posts of that user from `https://jsonplaceholder.typicode.com/posts?userId=1`.
   //!- Chain both fetch requests and log both the user details and the user’s posts.

   //!**Example Goal**: The console should first display the user data, followed by the posts associated with that user.




