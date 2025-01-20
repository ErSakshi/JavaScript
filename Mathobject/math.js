console.log(Math.sqrt(25));
console.log(Math.ceil(10.0000001));
console.log(Math.ceil(10.11));
console.log(Math.floor(10.01));
console.log(Math.PI);
console.log(Math.cbrt(27)); //! cube root


console.log(Math.abs(20.20));
console.log(Math.abs(20.00001));

console.log(Math.max(10,20,30,40,50));
console.log(Math.min(10,20,30,40,50));

console.log(Math.pow(2,5)); //! power
console.log(Math.random());
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10000));



let num=(Math.floor(Math.random()*10000))
if(num<1000 && num>100)
{
   num=num*10
}
else if(num<100 && num>10)
{
    num=num*100
}
else if(num<10 && num>0){
    num=num*1000
}

console.log(num);


let otp=Math.random()
console.log(Math.round(otp*9000)+999);

let Otp=(Math.floor(Math.random)*10000).toString();
if(Otp.length==4){
    console.log(Otp);
}
else if(Otp.length==3){
    console.log(Otp*10);
    
}else if(Otp.length==2){
    console.log(Otp*100);
    
}
else if(Otp.length==1)
{
    console.log(Otp*1000);
    
}







