// // let a="hi"
// // let A="Achu"
// // console.log(a,A)
// // alert("hi hello")
// let x=4
// let y=5
// console.log("x+y=",x+y)
// console.log("x-y=",x-y)
// console.log("x*y=",x*y)
// console.log("x/y=",x/y)
// console.log("x%y=",x%y)
// console.log("x**y=",x**y)
// console.log("y++=",y++)
// console.log("++y=",++y)
// console.log("--y=",--y)
// console.log("y--=",y--)
// let a=20
// let b=10
// result=(a==b)
// console.log(result)
// result=(a===b)
// console.log(result)
// result=(a!=b)
// console.log(result)
// result=(a!==b)
// console.log(result)
// result=(a>b)
// console.log(result)
// result=(a>=b)
// console.log(result)
// result=(a<b)
// console.log(result)
// result=(a<=b)
// console.log(result)
// result=a=b
// console.log(result)
// result=a+=b
// console.log(result)
// result=a-=b
// console.log(result)
// result=a*=b
// console.log(result)
// result=a/=b
// console.log(result)
// result=a%=b
// console.log(result)
// let c=true
// let d=false
// result=c&&d
// console.log(result)
// result=c||d
// console.log(result)
// result=!d&&c
// console.log(result)
// let a=20
// if(a%2==0){
//     console.log("a is even number")
// }
// else{
//     console.log("a is odd number")
// }
// let a=0;
// if(a>0){
//     console.log("a is positive number")
// }
// else if(a<0)
//     {
//         console.log("a is negative number")
//     }
//     else{
//         console.log("a is Zero")
//     }
// let m=68;
// if(m<=100 && m>=75){
//     console.log("A Grade")
// }
// else if(m<=74 && m>=50){
//     console.log("B Grade")
// }
// else if(m<=49 && m>=25){
//     console.log("C Grade")
// }
// else 
//     {
//         console.log("Failed")
//     }
let a="Tuesday";
switch(a)
{
    case "Monday":console.log("Monday")
    break;
    case "Tuesday":console.log("Tuesday")
    break;
    case "Wednesday":console.log("Wednesday")
    break;
    case "Thursday":console.log("Thursday")
    break;
    case "Friday":console.log("Friday")
    break;
    case "Saturday":console.log("Saturday")
    break;
    case "Sunday":console.log("Sunday")
    break;
}
// for(i=0;i<=10;i++){
//     if(i%2==0){
//     console.log(i)}
// }
// for(i=0;i<=10;i++){
//     if(i%2!=0){
//     console.log(i)}
// }
// let i=0;
// while(i<=10){
//     console.log(i)
//     i++;
// }
console.log("Even numbers")
let i=0;
while(i<=10){
    if(i%2==0){
        console.log(i)
    }
    i++;
}
console.log("Odd numbers")
let j=0;
while(j<=10){
    if(j%2!=0){
        console.log(j)
    }
    j++;
}
console.log("numbers")

var c=10
do{
console.log(c)
c++
}while(c<=20)
console.log("Even numbers")    
var d=10
do{
    if(d%2==0)
console.log(d)
d++
}while(d<=20)

 for (i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz",i)
    }
    else if(i%5==0){
        console.log("buzz",i)    

    }else if(i%3==0){
        console.log("fizz",i)   
    }
 }   
 document.write("Hi")
 for(i=1;i<=10;i++){
    result=i*10
    console.log(i+"*10=",result)
 }

 for(i=1;i<=10;i++){
    if (i%2==0){
        continue;
    }
    console.log(i)
 }
 function myfun(){
    console.log("Hi hloo")
 }
 myfun()
 function getcube(number){
    alert(number*number*number);
    }
    getcube(5);
    