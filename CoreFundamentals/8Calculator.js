 // <!-- CALCULATOR -->
 const add=(a,b)=>{
    return a+b;
}
const mul=(a,b)=>{
    return a*b;
}
const sub=(a,b)=>{
    return a-b;
}
const divide=(a,b)=>{
    return a/b;
}
const calculator=(num1,num2,operator)=>{
    return operator(num1,num2);
}
console.log(calculator(10,20,mul));
//calculator() is high order and operator() is call back