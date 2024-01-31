//EXPRESSIONS AND OPERATORS
console.log(20+5);  //ADDITION
console.log(20-5);  //SUBTRACTION
console.log(20*5);  //PRODUCT
console.log(20/5);  //QUOTIENT
console.log(20%5);  //REMAINDER
    //POST INCREMENT
    var num=15;
    var num1=num++;
    console.log(num,num1);  //16 15
    //PRE INCREMENT
    var num=15;
    var num1=++num;
    console.log(num,num1);  //16 16
     //POST INCREMENT
    var num=15;
    var num1=num++;


----------------------------------------------------------------
//> Nullish_coalescing.js

function r(){
    return{
        difficulty: "Easy",
        s:0
    }
}
const ans=r().s || 500;
console.log(cash);  // here it print 500 bcz here s is 0 although it is present but it makes the value false so for that we use nullish coalescing
const ans=r().s ?? 500;//r().s===undefined? 500:r().s;
console.log(cash); // return 0; as it is not undefines
