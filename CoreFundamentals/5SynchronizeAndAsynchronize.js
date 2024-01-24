//DIFFERENCE BETWEEN SNYCHRONIZE AND ASNYCHRONIZE
    //Synchronize: in this the second work had to wait until the first work gets finished
    //Asynchronize: after ajax every work runs simultaneously
        //Synchronize Ex
            const fn12=()=>{
                console.log(`F2 is running`);
            }
            const fn11=()=>{
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