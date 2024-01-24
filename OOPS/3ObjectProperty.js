//Object Properties
    //we can now use dynamic properties
    let name="vinod";
    const bio={
        [name]:"hello",
        [20+6] : "is age"
    }        
    console.log(bio);       //{ '26': 'is age', vinod: 'hello' }
//no need to write key and value if both are same
    let name1="ABC" ,age=26;
    const data={name1,age};
    console.log(data);      //{ name1: 'ABC', age: 26 }
