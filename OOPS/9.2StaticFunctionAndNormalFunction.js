class config{
    static a1={
        1:'hello'
    };
    //using this keyword for accessing a static property inside a static method
    static show(){
        console.log('static show');
        console.log(this.a1);
    }
    //accessing a static function inside a normal fuction
    display(){
        console.log('display show 1');
        config.show();
    }
}
config.show(); //calling static fx
const a=new config(); //calling normal function
a.display();

// //OUTPUT
// static show
// { '1': 'hello' }
// display show 1
// static show
// { '1': 'hello' }
