// 1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument. 
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error 
// that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, 
// catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then 
// in the promise chain is attached to the promise returned by the current callback function.
const cart=["shirts","pants"];
createOrder(cart)
    .then(function (orderId){
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })                                      //checks for the error on the top of it
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentinfo){
        console.log(paymentinfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(){
        console.log("No matter what it will always be called");             //anythig after the catch will be executed
    })
    .catch(function(err){
        console.log(err.message);
    });

//Producer
function createOrder(cart){
    //creating a promise constructor
    const pr=new Promise(function(resolve, reject){
        //createorder
        //validcart
        //orderid
        if(!validcart(cart)){
            const err=new Error("Cart is not valid");       //will display if false
            reject(err);
        }
        //logic for orderid
        const orderId="10001";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);       //10001 if true
            },5000);                    //will display orderId after 5sec 
        }
    });
    return pr;
}
function validcart(){
    return false;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}

//if true
// Payment Successfull
// No matter what it will always be called

//if false
// Cart is not valid
// Payment Successfull
// No matter what it will always be called