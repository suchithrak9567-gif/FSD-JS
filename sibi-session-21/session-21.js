
// console.log("b");
// var b=10;
// console.log("entri");
// function greet() {
//     var a=10;
//     console.log(a)

// };
// greet();
// setTimeout(()=>{
// console.log("hello");
// }, 1000);
// setTimeout(()=>{
// console.log("hello1");
// }, 2000);
// setTimeout(()=>{
// console.log("hello2");
// }, 2000);
// setTimeout(()=>{
// console.log("hello3");
// }, 1000);
//set interval

//first work greet next 5 next time out

//  function greet() {
//     var a=10;
//     console.log(a)

// };
// setTimeout(()=>{
// console.log("hello3");
// }, 1000);
// consile.log(5);

// function call(name) {
//     console.log(name);
// }
// function greet(fun){
// fun("hello");
// }
// greet(call);

// function download(url, callback) {
//     console.log(`Downloading from ${url}...`);
//     setTimeout(() => {
//         console.log(`Downloaded from ${url}`);
//         callback(url);
//     }, 2000);         
// }
// download("server.com",greet)
// function getuser(){
//     //api call
//     console.log("get user");
//     function getuorders(id){
//         //got order
//         function orderdeeetails(orderid){
//             //got order details
//             console.log(`Getting details for order ${orderid}`);
//         }
//          applyDiscount()
//     }
//    orderdeeetails(123)
// }
//         getorders(1)



//callhell

//promise 
//stage/state of promise
//pending
//resolve
//reject

// const mypromise = new Promise((resolve, reject) => {
//     // const data = true;  
//     let data ={ "name=John";} // Simulating a successful operation
//     if (data) {
//         resolve("Data fetched successfully");
//     } else {
//         reject("Failed to fetch data");
//     }
// });
// //.then() is used to handle the resolved state of the promise, while .catch() is used to handle the rejected state. In this example, if the promise resolves successfully, it will log "Data fetched successfully" to the console. If it rejects, it will log "Failed to fetch data" to the console.
// //catch() is used to handle the rejected state of the promise. If the promise is rejected, the error message will be logged to the console.
// console.log("Before promise");

// mypromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });


// const promise1=new promis((resolve)=>resolve("promise1 resolved 1"));
// const promise2=new promis((resolve)=>resolve("promise1 resolved 2"));
// const promise3=new promis((resolve,reject)=>resolve("promise1 resolved 3"));{
// }

// promise1.all([promise1,promise2,promise3]).then((Response)=>{
//     console.log(Response);

// }).catch((err)=>{
// console.log(err);
// })
//async /await

// async function greet(){
//     return "hello"
// }
// greet().then((val)=>{
// console.log(val);
// })
// console.log(greet());

function getdata(){
    return new promise1((resolve,reject)=>{
        //user data
        setTimeout(() => resolve({name:"data koaded"}),2000)
            
        });
    }


    function getdata1(name){
    return new promise1((resolve)=>{
        //user data
        setTimeout(() => resolve({name:"data koaded"}),2000)
            
        });
    }
    async function show(){
        console.log("feting..");
        try{
 const data=await getdata()
        // const data1= await getsata1(data?.name)
        const data1= await fetch("https://hvgfg")
        console.log(data);
        // console.log(data?.name);
        // console.log(data1?.name);
        console.log("completed");

        }
        catch(error){
            console.log(error,"ERRPOR")
        }finally{
            console.log("called finaly ")
        }
       
    }
    show()

    //try catch methode