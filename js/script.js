// //1. Declare a variable and assign a number. 
// let numberOne=20;
// // console.log(numberOne);

// //2. Declare a variable and assign a string.
// let country="Bangladesh";
// // console.log(country)

// //3. Declare a variable and assign a boolean. 

// let isTrue=true;
// // console.log(isTrue)

// //4. Check the data type of a variable. 

// let numOne=10;
// // console.log(typeof (numOne))

// //5. Convert a string to a number.

// let str="12";
// console.log(Number(str))
// console.log(str)

// // 6. Convert a number to a string. 
// let strNumber=20;
// // console.log(parseFloat(strNumber))
// console.log(String(strNumber))
// // console.log(strNumber)

// // 7. Swap two variables. 
// let a=10;
// let b=20;
// let c;


// c= a;
// a=b;
// b=c

// // console.log(a,b)

// // 8. Check if a variable is undefined. 

// let numOneCheck;

// // console.log(typeof numOneCheck)

// const  isUndefined = numOneCheck === undefined  


// // 9. Declare a constant and try to reassign it. 
// const digit=10;
// // digit=20;
// // console.log(digit)

// //10. Find the length of a string. 

// let strLength="Bangladesh";

// // console.log(strLength.length);

// //11. Check if a number is positive or negative. 

// let number=-1;

// if(number>0){
//     // console.log("Positive")
// }else{
//     // console.log("negative")
// }

// // 12. Check if a number is even or odd. 

// let checkNumber=3;

// if(checkNumber %2 == 0){
//     // console.log("Even")
// }else{
//     // console.log("Odd")
// }
// //13. Compare two numbers and print the larger one. 
// let num=100;
// let numTwo=20;

// if(num>numTwo){
//     // console.log(num ,"is large")
// }else{
//     // console.log(numTwo, "is Large")
// }
// // Math.max(num, numTwo)

// //14. Check if two values are equal using ==. 

// let valueOne=10;
// let valueTwo=10;

// if(valueOne==valueTwo){
//     // console.log("Value are Equal")
// }else{
//     // console.log("Not Equal")
// }

// //15. Check if two values are equal using ===. 

// let checkValueOne=10;
// let checkValueTwo="10";

// if(checkValueOne===checkValueTwo){
//     // console.log("Equal ")
// }else{
//     // console.log("Not Equal")
// }

// //16. Check if a number is divisible by 5.

// let value=20;

// if(value%5){
// //   console.log("Number is divisible")
// }else{
//     // console.log("Number is not divisible")
// }

// //17. Check if a number is divisible by both 3 and 5. 

// let x=40;

// // if(x%3 && x%5){
// //     console.log("divisible 3 and 5")
// // }else{
// //     console.log("divisible not 3 and 5")
// // }

// //18. Find the largest of three numbers. 
// let m=200;
// let n=60;
// let k=40;
// // if(m>n && m>k){
// //     console.log(m ,"is Large")
// // }else if(n>m && n>k){
// //     console.log(n, "is large")
// // }else{
// //     console.log(k ,"is Large")
// // }
// //19. Check if a year is a leap year

// let year=2024;

// // if((year % 4 === 0 && year % 100 !== 0) || (year ===400)){
// //     console.log("leap Year")
// // }else{
// //     console.log("not Leap year")
// // }

// //20. Check if a number is between 10 and 50. 

// let u=51;

// if(u>=10 && u<=50){
//     // console.log("found") 
// }else{
//     // console.log("Not Found")
// }

// 21. Print numbers from 1 to 10.
// let i=1;

// for(i=1;i<=10;i++){
//     console.log(i);
// }
// 22. Print even numbers from 1 to 20. 
// let i;
// for(i=2;i<=20;i+=2){
//     console.log(i)
// }

// 23. Print odd numbers from 1 to 20. 
// let i;
// for(i=1;i<=20;i+=2){
//     console.log(i)
// }
// 24. Print the multiplication table of 5. 
// let i;
// let n=5;
// for(i=1;i<=10;i++){
//     console.log(`${i}x${n} =`,i*n)
// }
// 25. Find the sum of numbers from 1 to 100. 
// let i;
// let s=0;
// for(i=1;i<=100;i++){
//     s=s+i;
// }
// console.log(s)
// 26. Find the factorial of a number. 
// let i;
// let ans=1
// let n=5
//   for (i = 2; i <= n; i++) {
            
//             ans = ans * i;
//         }
//         console.log(ans)
// 27. Reverse a number using a loop. 
// let i;
// for(i=20;i>=1;i--){
//     console.log(i)
// }
// 28. Count digits of a number. 

// let a=234890;

// let s=a.toString().length
// console.log(s)

// 29. Print Fibonacci series up to n terms.
// let n = 10;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 3; i <= n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// } 
// 30. Find the power of a number using a loop.

// let s=1;
// let p=2;
// let g=5;

// for(let i=1;i<=g;i++){
//     s=s*p;
// }
// console.log(s)

// 31. Create a function to add two numbers. 
// function addTwo(){
//     let a=10;
//     let b=20;
//     let c=a+b;
//     console.log(c)
// }
// addTwo()
// 32. Create a function to subtract two numbers. 
// function subTwo(){
//     let a=10;
//     let b=20;
//     let c=a-b;
//     console.log(c)
// }
// subTwo()
// 33. Create a function to check if a number is even. 
// function check( a=11){
//     if(a%2==0){
//         console.log("number is even")
//     }else{
//         console.log("number is odd")
//     }
// }
// check()
// 34. Create a function to find the square of a number. 
// function square(a){
//   let c=a**2;
//   console.log(c)
// }
// square(5)
// 35. Create a function to convert Celsius to Fahrenheit. 

// function cToF(c){
//    let f=(c*9/5)+32;
//    console.log(f)
// }
// cToF(50)

// 36. Create a function to convert Fahrenheit to Celsius.
// function fToC(f){
//    let c=(f-32)*(5/9)
//    console.log(c)
// }
// fToC(50) 
// 37. Create a function to find the maximum of two numbers.
// function maxNumber(m,n){

//     if(m>n){
//         console.log(m,"is max");
//     }else{
//         console.log(n, "is max")
//     }

// }
// maxNumber(100,30)
// 38. Create a function to find the minimum of two numbers. 
// function minNumber(m,n){

//     if(m>n){
//         console.log(n,"is min");
//     }else{
//         console.log(m, "is min")
//     }

// }
// minNumber(100,300)
// 39. Create a function to check if a number is prime. 

// function isPrime(number) {
//   if (number <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(5))

// 40. Create a function to reverse a string. 

// function reverse(){
//     let a="Bangladesh"; 
//     let str=a.split("").reverse().join("");
//     console.log(str)
// }
// reverse()

// 41. Create an array of numbers.
let array=[1,2,3]; 
// 42. Find the length of an array. 
let a=[2,3,45,6,77]
// console.log(a.length)
// 43. Access the first element of an array. 
// let arr=[1,2,3,4,5];
// console.log(arr[0])
// 44. Access the last element of an array.
// let arr=[1,2,3,4,5];
// console.log(arr[arr.length-1])
// 45. Add an element to the end of an array. 
// let  arr=[2,4,6,8,10];
// arr.push(12);
// console.log(arr)
// 46. Remove the last element of an array. 
// let arr=[2,4,6,8,10];
// arr.pop();
// console.log(arr)
// 47. Add an element at the beginning of an array.
//  let arr=[2,4,6,8,10];
// arr.unshift(1);
// console.log(arr)
// 48. Remove the first element of an array. 
//  let arr=[2,4,6,8,10];
// arr.shift();
// console.log(arr)
// 49. Find the sum of array elements.
// let ab =[2,4,6]; 
// let s=0;
// for(let i=0;i<ab.length;i++){
//     s=s+ab[i];
    
// }
// console.log(s)
// 50. Find the maximum number in an array. 

let arr=[1,3,5,7];
let check=arr[0];
for(let i=0;i<arr.length;i++){
    
    if (arr[i] > check) {
        check = arr[i];
    }
    
}
console.log(check)
