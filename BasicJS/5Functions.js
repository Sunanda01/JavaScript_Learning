//FUNCTIONS
function sum(a,b)
{
    var s=a+b;
    console.log(s);
}
sum(10,20);

function sum(a,b)
{
    var s=a+b;
    return s;
}
var ans=sum(10,20);
console.log(ans);
//Anonymous Fx
var myfunc=function(a,b){
    return a+b;
}
console.log(myfunc(15,15));
