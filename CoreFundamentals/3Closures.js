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
