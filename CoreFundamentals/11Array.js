//ARRAY.MAP
//Synatx: Array.map((num,i,arr));
let a1=[1,2,3,4];
let a2= a1.map((num,i,arr)=>{
     return num*3;
});
console.log(a2);
//[3, 6, 9, 12]

//ARRAY.FILTER
let a1=[10,20,30,40,50,60,70,80,90,100];
let a2=a1.filter((num,i,arr)=>{
    return num>50;
})
console.log(a2);    
//60,70,80,90,100

//ARRAY.REDUCE
let a2=a1.reduce((acc,curr,i,arr)=>{
return acc+curr;
 },0)
console.log(a2);    //550
