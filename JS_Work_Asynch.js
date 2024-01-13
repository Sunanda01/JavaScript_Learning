//HOSTING
    //Hosting in JavaScript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.
        //Creation Phase
        var myname=undefined;
        console.log(myname);
        myname="Sunanda";
        //In ES6 Hosting is avoided by using the let keyword instead of var
        //The Other difference is that the variable declared with let are local to the surrounding block not the entire function
        console.log(myname1);
        let myname1;
        myname1="abc";
//SCOPE CHAIN AND LEXICAL SCOPING
    //The Scope Chain is used to resolve the value of variable names in JS. 
    //Scope Chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at the code
    //At the top we have the Global scope, which is the window object in the browser.
    //Lexical scoping means now, the inner function can get access to their parent function variables but the vice-versa is not true.
        //Ex
        let a="hello";
        const first=()=>{
            let b="dear";
            const second=()=>{
                let c="Welcome";
                console.log(a+b+c);
            }
            second();
            // console.log(a+b+c);      //cannot access c
        }
        first();        //hellodearWelcome
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
//STRICT MODE
       "use strict"
       let n="vinod";
       console.log(n); 
//DIFFERENCE BETWEEN SNYCHRONIZE AND ASNYCHRONIZE
    //Synchronize: in this the second work had to wait until the first work gets finished
    //Asynchronize: after ajax every work runs simultaneously
        //Synchronize Ex
            const fn2=()=>{
                console.log(`F2 is running`);
            }
            const fn1=()=>{
                console.log(`F1 is running`);
                fn2();
                console.log(`F1 is running`);
            }
            fn1();
            // F1 is running
            // F2 is running
            // F1 is running
        //Asynchronize Ex
            const fn2=()=>{
                setTimeout(()=>{
                    console.log(`F2 is running`);
                },2000);
            }
            const fn1=()=>{
                console.log(`F1 is running`);
                fn2();
                console.log(`F1 is running`);
            }
            fn1();
            // F1 is running
            // F1 is running
            // F2 is running