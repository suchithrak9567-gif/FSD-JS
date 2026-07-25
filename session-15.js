// const companyname="abc";
// function showcompanyname(){
//     console.log("Company Name is: "+companyname);
// }
// showcompanyname();
// console.log(companyname);

// function showtotal(){
//     let total=500;
//     console.log("Total is: "+total);

// }
// showtotal();
// console.log("function outside,total =" + total); // This will throw an error because 'total' is not defined in this scope

// if (10>20){
//     // block scope
//     let city ="New York";
//     console.log("City is: "+city);
// }
// console.log("City outside if block: "+city); // This will throw an error because 'city' is not defined in this scope 

// if(100>20){
//     var city="New York";
//     console.log("City is: "+city);
// }
// console.log("City outside if block: "+city); // This will work because 'var' is function-scoped, not block-scoped


// let country="USA";
// clousure example
// function outfn(){
//     let state="India";
//     function infn(){
//         console.log("Country is: ",country);
//         console.log("state is: ",state); // This will throw an error because 'state' is not defined in the global scope
//     }
// infn();
// }
// outfn();

// function outer(){
//     function inner(){
//         let age=25;
//     }
//     inner();
//     console.log("Age is: ",age); // This will throw an error because 'age' is not defined in the outer function's scope
// }
// outer();

// function counter(){
//     let count=0;
//     return function(){
//         count++; 
//         console.log("Count is: ",count);
//     };
// }
// const counter1=counter();
// counter1();


// function counter(){
//     let count=0;
//     return function(){
//         count++; 
//         console.log("Count is: ",count);
//     };
// }
// const counter1=counter();
// const counter2=counter();
// counter1();
// counter2();

// function counter(){
//     let count=0;
//     return function(){
//         count++; 
//         console.log("Count is: ",count);
//     };
// }
// const counter1=counter();
// const counter2=counter();
// counter1();

// counter2();

// counter1();

// counter2();


// hoisting example
// console.log("Value of x before declaration: ",x); // This will log 'undefined' due to hoisting
// var x=10;
// console.log("Value of x after declaration: ",x); // This will log '10'

// console.log("Value of y before declaration: ",y); // This will throw a ReferenceError because 'y' is not hoisted
// let y=20;

// greeting(); // This will work because function declarations are hoisted
// function greeting(){
//     console.log("Hello, welcome to the session!");
// }
// greeting(); // This will also work because the function is already defined
// const greet = function(){
//     console.log("Hello from the function expression!");
// };