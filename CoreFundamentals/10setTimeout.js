function x(){
    for(i=1;i<=5;i++)
    {
        function close(x){
            setTimeout(function(){
                console.log(x);
            },i*1000);
        }
        close(i);
    }
}
x();
//1 2 3 4 5

function a(){
    for(i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
a();
// 6 6 6 6 6

function a(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
a();
// 1 2 3 4 5
