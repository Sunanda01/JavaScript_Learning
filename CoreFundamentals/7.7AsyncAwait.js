//always returns a promise
async function getdata(){
    return "HELLO";
}
const data=getdata();
console.log(data);
// Promise {<fulfilled>: 'HELLO'}
data.then((res)=>console.log(res)); //HELLO

//Return a promise
const p=new Promise((resolve, reject) => {
    resolve("PROMISE RESOLVED");
});
async function f(){
    return p;
}
const ret_pro=f();
ret_pro.then((res)=>console.log(res));
// PROMISE RESOLVED

// USING ASYNC WITH AWAIT
// ASYNC AND AWAIT are used to handle promise

//METHOD 1
// handling promise before ASYNC and AWAIT
function get(){
    p.then((res)=>console.log(res));
}
get();              //PROMISE RESOLVED

//METHOD 2
// using async-await
async function handlePromise(){
    const val=await p;
    console.log(val);
}
handlePromise();            //PROMISE RESOLVED
//await can only be used inside an async function

//Difference between METHOD 1 AND METHOD 2
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved");
    },10000)
});
function show(){
    p1.then((res)=>console.log(res));
    console.log("HIIIIIIIIIII");
}
show();
// HIIIIIIIIIII
// promise resolved

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved");
    },10000)
});
async function show(){
       console.log("HIIIIIIIIIII");
    const val= await p1;
    console.log("HIIIIIIIIIII");
    console.log(val);
}
show();
// HIIIIIIIIIII
// Promise {<pending>}
// HIIIIIIIIIII
// promise resolved

// Using 2 await function
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved");
    },10000)
});
async function show(){
       console.log("HIIIIIIIIIII");
    const val= await p1;
    console.log("HIIIIIIIIIII");
    console.log(val);
    const val1= await p1;
    console.log("HIIIIIIIIIII   2");
    console.log(val1);
}
show();
// HIIIIIIIIIII
// Promise {<pending>}
// VM98:9 HIIIIIIIIIII
// VM98:10 promise resolved
// VM98:12 HIIIIIIIIIII   2
// VM98:13 promise resolved

// USING 2 PROMISE WITH 2 TIMING
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1 resolved");
    },10000)
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2 resolved");
    },5000)
});
async function show(){
       console.log("1ST LINE TO BE PRINTED");
    const val= await p1;
    console.log("HIIIIIIIIIII");
    console.log(val);
    const val1= await p2;
    console.log("HIIIIIIIIIII   2");
    console.log(val1);
}
show();
// VM142:12 1ST LINE TO BE PRINTED
// Promise {<pending>}
// VM142:14 HIIIIIIIIIII
// VM142:15 promise1 resolved
// VM142:17 HIIIIIIIIIII   2
// VM142:18 promise2 resolved

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1 resolved");
    },5000)
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2 resolved");
    },10000)
});
async function show(){
       console.log("1ST LINE TO BE PRINTED");
    const val= await p1;
    console.log("HIIIIIIIIIII");
    console.log(val);
    const val1= await p2;
    console.log("HIIIIIIIIIII   2");
    console.log(val1);
}
show();
// VM154:12 1ST LINE TO BE PRINTED
// Promise {<pending>}
// VM154:14 HIIIIIIIIIII
// VM154:15 promise1 resolved
// VM154:17 HIIIIIIIIIII   2
// VM154:18 promise2 resolved