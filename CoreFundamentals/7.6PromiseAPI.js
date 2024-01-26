// 1. Promise.all = It takes arrays of promises.
//                  Waits for other promise in array until it finishes.
//     FAILURE
//     As soon as any element in array gets rejected then Promise.all will throw an ERROR. 
//     It will not wait for other promise in array to finish.
//     We cannot cancel any promise in between. It gets rejected if any other promise gets rejected
// 2. Promise.allSettled = Same as Promise.all the only difference is in failure 
//                         When any one promise fails it still waits for other promise to get finish
//                         It returns an array of result of the promises alongwith ERROR result.
// 3. Promise.race = It will give the result of first settled promisea
//                   In case of failure of the first settled promise it will return ERROR.
//                   It will not wait for other promise to get settled.
// 4. Promise.any=   Same as Promise.race but it Waits only for first success result
//                   If all the promises fails they the result would be AGGREGATED ERROR
//                   Gives the list of all error
// Promise.all SUCCESS
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 SUCCESS"),1000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
});
// [ 'P1 SUCCESS', 'P2 SUCCESS', 'P3 SUCCESS' ]

// Promise.all FAILURE
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P2 FAILED"),1000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
// P2 FAILED

// Promise.allsettled SUCCESS
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 SUCCESS"),1000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
// 0:{status: 'fulfilled', value: 'P1 SUCCESS'}
// 1:{status: 'fulfilled', value: 'P2 SUCCESS'}
// 2:{status: 'fulfilled', value: 'P3 SUCCESS'}
// length:3

// Promise.allsettled FAILED
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P2 FAILED"),1000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
// 0:{status: 'fulfilled', value: 'P1 SUCCESS'}
// 1:{status: 'rejected', value: 'P2 FAILED'}
// 2:{status: 'fulfilled', value: 'P3 SUCCESS'}
// length:3

// Promise.race SUCCESS
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),1000);
})
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
//P3 SUCCESS

// Promise.race FAILED
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
// P3 FAILED

// Promise.any SUCCESS
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 SUCCESS"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
//P3 SUCCESS

// Promise.any SUCCESS
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P2 FAILED"),2000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);
});
//P1 SUCCESS

// Promise.any FAILED
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P1 FAILED"),3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P2 FAILED"),2000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=> {
    console.error(err);         //AggregateError: All promises were rejected
    console.log(err.errors);    //['P1 FAILED', 'P2 FAILED', 'P3 FAILED']
});


// PROMISE SETTLED
// RESOLVE--------SUCCESS-------------FULFILLED
// REJECT---------FAILURE-------------REJECTED