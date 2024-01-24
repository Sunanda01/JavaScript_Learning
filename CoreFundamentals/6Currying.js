// CURRYING
    //It is a technique of evaluating function with multiple arguments into sequence of function with single argument.
    sum(5)(3)(8)
    function sum(num1){
        // console.log(num1);
        return function(num2){
            // console.log(num2);
            return function(num3){
                console.log(num1+num2+num3);            //16
            }
        }
    }
    //Single Line
    const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);  
    sum1 (10) (10) (10)         //30
