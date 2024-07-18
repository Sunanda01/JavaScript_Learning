const btn=document.querySelector("#btn");
const bc=document.querySelector("#bc");
const tc=document.querySelector("#tc");

var c_count=0, t_count=0;

const mydebounce=(cb,d)=>{
    let timer;
    return(...args)=>{
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },d);
    }
}

const debounce_apply=mydebounce((...args)=>{
    tc.innerHTML=++t_count;
    console.log(args[0]+args[4]);
},1000);

btn.addEventListener("click",()=>{
    bc.innerHTML=++c_count;
    debounce_apply(5,6,7,8,9);
})