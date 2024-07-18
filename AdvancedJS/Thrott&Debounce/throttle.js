const btn=document.querySelector("#btn");
const bc=document.querySelector("#bc");
const tc=document.querySelector("#tc");

var c_count=0, t_count=0;

function mythrottle(cb,d){
    let last=0;
    return(...args)=> {
        let now=new Date().getTime();
        if(now-last<d) return;
        last=now;
        return cb(...args); //we can remove return keyword
    }
}

const throttle_apply=mythrottle((...args)=>{
    tc.innerHTML=++t_count;
    console.log(...args);
},4000);

btn.addEventListener("click",()=>{
    bc.innerHTML=++c_count;
    throttle_apply(2,7);
})