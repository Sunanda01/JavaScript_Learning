//STATIC METHOD
class Car {
  static a=10;
    constructor(name) {
      this._name = name;
    }
    
    static hello(x) {
      return "Hello " + x._name;
    }
  }
  const myCar = new Car("Ford");
  // console.log(myCar.hello(Ford));   //Error Message
  console.log(Car.hello(myCar));       //Hello Ford
  console.log(Car.a); 