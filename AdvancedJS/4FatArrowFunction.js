//FAT ARROW FUNCTION
console.log(sum());
function sum()
{
    let a=5,b=5;
    let sum=a+b;
    return `Sum is ${sum}`;
}
console.log(sum());
//use of FAT ARROW =>
const sum=() =>
{
let a=5,b=5;
let sum=a+b;
return `Sum is ${sum}`;
} 
console.log(sum());
//Written As
const sum=() =>`Sum is ${(a=5)+(b=5)}`; 
console.log(sum());      
