//MEMOIZATION
    //It is an optimization technique that can be used to reduce  time consuming calculations by saving previous input to something called cache and returning the 
    //result from it.
        //Example
        let sum=0;
        const cal=(n)=>{
            for(let i=0;i<n;i++){
                sum+=i;
            }
            return sum;
        }       
        const memo=(fun)=>{
            let cache={};
            return function(...args){
                let n=args[0];
                if(n in cache){
                    console.log("Cache");
                    return cache[n];
                }
                else{
                    console.log("1st time calculation");
                    let result=fun(n);
                    cache[n]=result;
                    return result;
                }
            }
        }
        console.time();
        const eff=memo(cal);
        console.log(eff(5));
        console.timeEnd();

        console.time();
        console.log(eff(5));
        console.timeEnd();

        //Output
        // 1st time calculation
        // 10
        // 8.048ms
        // Cache
        // 10
        // 0.568ms
