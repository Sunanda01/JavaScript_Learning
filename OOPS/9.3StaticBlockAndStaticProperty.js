class config{
    //static property
    static a1={
        1:'hello'
    }
    //static block
    static{
        console.log("INITIALIZED");
    }
}
console.log(config.a1);
console.log(config.a1);
console.log(config.a1);
//Summary: Static block is called only once when static method or properties are called or accessed.
//OUTPUT
// INITIALIZED
// { '1': 'hello' }
// { '1': 'hello' }
// { '1': 'hello' }
