//fetch()= when the promise is resolved it gives a response object and this body has an object which is a readable stream to covert in json we use response.json that is a promise

const url="https://api.github.com/users/Sunanda01";
async function promise(){
    const data= await fetch(url);
    const jsonvalue= await data.json();
    //fetch()=>Response.json()=>jsonValue
    console.log(jsonvalue);
}
promise();

//ERROR in async-await
const url="https://api.github.com/users/Sunanda01";
async function promise(){
    try{
    const data= await fetch(url);
    const jsonvalue= await data.json();
    console.log(jsonvalue);
    }catch(err){
        console.log(err);
    }
}
promise();

//older way of handling error
const url="https://api.github.com/users/Sunanda01";
async function promise(){
    const data= await fetch(url);
    const jsonvalue= await data.json();
    console.log(jsonvalue);
}
promise().catch((err)=>console.log("ERROR"));