const cart=["shirts","pants"];
const promise=createOrder(cart);    //orderId

promise.then(function (orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
});         //to diplay message when error occurs


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