//CALLBACK HELL
const cart=["shoes","dress","shirts"];
api.createorder(cart,function(){
    api.paymentprocess(function(){
        api.showsummary(function(){
            api.updatewalletbalance()
        })
    })
})
//code grows vertically
//This type of code is unmaintainable and unreadable.
//Tough to manage

//INVERSION OF CONTROL= We loose control of program. We have given the control of function to another function and we dont know whether it will execute or not 

//Advantages
//Callbacks are superway of handling asynchronous operations in JS. Asynchronous exist because callback exist.

//Issues
//Due to asynchronous JS there are two problems         1. CALLBACK HELL            2. INVERSION OF CONTROL