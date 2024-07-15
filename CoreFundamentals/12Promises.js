//PROMISE.ALL 
//SUCCESS CASE
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 success"),2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),1000);
})
Promise.all([p1,p2,p3]).then(res=>{console.log(res)});

//FAILURE CASE
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 fails"),2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),1000);
})
Promise.all([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.error(err)});

//PROMISE.ALLSETTLED
//FAILURE CASE
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 fails"),2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),1000);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.error(err)});

//PROMISE.RACE
//SUCCESS CASE
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 success"),2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),1000);
})
Promise.race([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.error(err)});

//FAILURE CASE
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 fails"),2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),2000);
})
Promise.race([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.error(err)});

//PROMISE.ANY
//ALL FAILED
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p1 fails"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 fails"),1000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p3 fails"),2000);
})
Promise.any([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.error(err)});

//ONE FAILED
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 fails"),1000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),2000);
})
Promise.any([p1,p2,p3]).then((res)=>{console.log(res);})
.catch((err)=>{console.log(err.errors)});
