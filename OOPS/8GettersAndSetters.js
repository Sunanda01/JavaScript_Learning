class animal{
    constructor(name){
        this._name=name;
    }
    //GETTERS
    get name(){
        return this._name;
    }
    //SETTERS
    set name(newName){
        this._name=newName;
    }
}
let a=new animal("Dog");
console.log(a.name);        //Dog
a.name="Cow";
console.log(a.name);        //Cow
console.log(a instanceof animal);           //InstanceOf
//InstanceOf operator is used to check whether an belongs to a certain class or not.