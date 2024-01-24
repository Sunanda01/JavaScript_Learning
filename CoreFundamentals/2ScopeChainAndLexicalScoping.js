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
