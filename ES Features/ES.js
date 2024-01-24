//ES7 FEATURES      2016
    //1. ARRAY INCLUDES
    const color2=['red','blue','yellow','green','pink'];
    const pre=color2.includes('red');
    console.log(pre);       //true
//2.EXPONENTIATION OPERATOR
    console.log(2**3);
//ES8 FEATURES     2017
//String Padding
//Object Values()
//Object entries()
    const msg="hiiii.... welcome.....";
    console.log(msg);
    console.log(msg.padStart(5));
    console.log(msg.padEnd(10));

    const person={name2:'def',age:45};
    console.log(Object.values(person));     //[ 'def', 45 ]
    console.log(Object.entries(person));    //[ [ 'name2', 'def' ], [ 'age', 45 ] ]
//ES9 FEATURES          2018
//Spread Operator[OBJECT]
    const sperson={...person};
    console.log(person);
    console.log(sperson);
//ES10 FEATURES          2019
//Array Prototype (flat, flatMap)
    const arr=[[1,2],[3,4],[5,[6,7]]];
    let flatarr=arr.reduce((accumulator,ele)=>{
        return accumulator.concat(ele);
    })
    console.log(flatarr);       //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
    console.log(arr.flat());    //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
    console.log(arr.flat(2));   //[ 1, 2, 3, 4, 5, 6, 7 ]
//ES11 FEATURES          2020
//1. BIGINT
    let onum=Number.MAX_SAFE_INTEGER;
    console.log(onum);      //9007199254740991
    console.log(onum+12);   //9007199254741004
    console.log(9007199254740991n+12n);     //9007199254741003n
    let a=9007199254740991n+12n;
    console.log(typeof(a));     //bigint
//2.Nullish Coalescing
    const foo= null ?? 'hiiiii';
    console.log(foo);       //hiiiii
    const foo1= false ?? 'hiiiii';
    console.log(foo1);       //false
    const foo3= NaN ?? 'hiiiii';
    console.log(foo3);       //NaN
    const foo4= false ?? 'hiiiii';
    console.log(foo4);       //false
    const foo5= undefined ?? 'hiiiii';
    console.log(foo5);      //hiiiii
// ES15             2014
"use strict";
let pi=3.14;
console.log(pi);