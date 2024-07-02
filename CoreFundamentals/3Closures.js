//CLOSURES
    //A closure is the combination of a function bundle together with references to its surrounding state
    //In other words a closer gives us access to an outer function scope from an inner function
    //In JavaScript, closures are created every time a function is created, at the function creation time
    const outer=(a)=>{
        const b=20;
        const inner=()=>{
            let sum=a+b;
            console.log(`Sum is ${sum}`);
        }
        inner();
    }
    outer(10);      //Sum is 30
    //Here a is not a variable it is a parameter, because of closure the execution was possible
    const of=(a1)=>{
        const b1=20;
        const inf=()=>{
            let s=a1+b1;
            console.log(`Sum is ${s}`);
        }
        return inf;
    }
    of(30);     //blank
    let check=of(30);
    console.log(check);     //[Function: inf]
    console.log(check());       //Sum is 50
    console.dir(check);     //[Function: inf]


function x(){
    var a=7;
    return function y(){
        console.log(a);
    }
    a=100;
    console.log("hello");
}
var z=x();
z(); //7


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
z(); //100

//DOUBLE PARENTHESIS
function outer(){
    var a=30;
    return function inner(){
        console.log(a);
    }
}
outer()();        //30

//This also forms a closure
function outer(){
    
    function inner(){
        console.log(a);
    }
    var a=30;
    return inner;
}
outer()();        //30
//As closure in not dependent on the style of declaration. it binds function and lexical scope.

//It also works with let and const
function outer(){
    function inner(){
        console.log(a);
    }
    let a=200;
    return inner;
}
outer()();        //200

//If we add more function the the inner fx can acess the variable and fx of its outest parent also.
//We can also pass a parameter...
function a(){
    var x=20;
    function b(d){
        var y=30;
        function c(){
          console.log(x, y, d);
        }
        return c;
    }
    return b;
}
a()("hello")();        //20 30 hello

//If there is confliction name in global scope and block scope it will result in block scope, as the reference is at local scope declaration 
function a(){
    var x=20;
    function b(d){
        let y=30;
        function c(){
          console.log(x, y, d);
        }
        return c;
    }
    return b;
}
let y=500;
a()("hello")();

//In this case it would result 20 500 hello c() searches for the value of y in itz scope then finds in lexical evironment of parents if still 
// not found the goes deep down in hierarchy and searches in Global Execution Context.
function a(){
    var x=20;
    function b(d){
        // let y=30;
        function c(){
          console.log(x, y, d);
        }
        return c;
    }
    return b;
}
let y=500;
a()("hello")();

