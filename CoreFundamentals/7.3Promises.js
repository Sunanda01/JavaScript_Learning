// A Promise is an object that represents the eventual completion or failure of an asynchronous operations.
// Importance of promise is that we do not loose the control of the program, a promise object is immutable and 
// can be send anywhere without worrying about changes, also it resolves only once either to success or failure.
// A promise has 3 states: pending | fulfilled | rejected.
// As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
// A promise resolves only once and it is immutable. 
// Using .then() we can control when we call the cb(callback) function.

// To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

//PROMISE
const promise="link";
const user=fetch(promise);
console.log(user);

user.then(function(data){
    console.log(data);
});
//Before executing line 15 the status will be Promise: Pending after execution the status becomes Promise: Fulfilled
//Line 17 is used to get the data to be used in our program

//PROMISE CHAINING
    const order=["pant","shirt","dress"];
    createorder(cart,function(orderid){
        Payment(orderid,function(payinfo){
            showorder(payinfo,function(){
                update balance();
            });
        });
    });
    
    //The above code is written as shown below to avoid Invasion of Callback
    createorder(cart)
    .then(function (orderid){
       return  Payment(orderid);
    })
    .then(function (payinfo){
        return showorder(payinfo)
    })
    .then(function (payinfo){
        return balance(payinfo);
    });

    //Using Fat Arrow the above code can be written as
    createorder(cart)
    .then((orderid) =>  Payment(orderid))
    .then((payinfo) =>  showorder(payinfo))
    .then((payinfo) =>  balance(payinfo));