// try, catch, throw, e

//ex 1
try{
    console.log("this is try block");
    Uin;
    console.log("end of try block");
}
catch(err){
    console.log("Error Occured"+ err.stack);
}finally{
    console.log("Always Runs");
}
console.log("This is ERROR HANDLING");

// this is try block
// Error OccuredReferenceError: Uin is not defined
//     at <anonymous>:4:5   
// Always Runs
// This is ERROR HANDLING

//ex 2
let json='{"age":30}';
try{
    let user=JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete Data: no name");
    }
    console.log(user.name);
}catch(e){
    console.log("JSON ERROR "+e.name);      //JSON ERROR SyntaxError
    console.log("JSON ERROR "+e);           //JSON ERROR SyntaxError: Incomplete Data: no name
}
//Use the JavaScript function JSON.parse() to convert text into a JavaScript object: