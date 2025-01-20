try{
    console.log(a)
    
}
catch{
    console.log("a is not defined");
    
}

try{
    console.log(a);
    throw new Error("a is not defined ")
    
}catch(err){
    console.log(err);
    
}