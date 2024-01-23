//CREATING A OBJECT
    //1st WAY
        let biodata={
            myname: "Sunanda Sadhukhan",
            myage:23,
            getdata: function(){
                console.log(`My name is ${biodata.myname} and age is ${biodata.myage}`);
            }
        }
        console.log(biodata.myname);        //Sunanda Sadhukhan \n Undefined
        console.log(biodata.getdata());    //My name is Sunanda Sadhukhan and age is 23 
    //2nd Way
        let biodata={
            myname: "Sunanda Sadhukhan",
            myage:23,
            getdata(){
                console.log(`My name is ${biodata.myname} and age is ${biodata.myage}`);
            }
        }
        console.log(biodata.getdata());     //My name is Sunanda Sadhukhan and age is 23
    //OBJECT AS A VALUE INSIDE AN OBJECT
        let biodata={
            myname: {
            realname:"Sunanda Sadhukhan",
            myage:23},
            mysub:"ABC",
            getdata(){
                console.log(`My name is ${biodata.myname.realname} and age is ${biodata.myname.myage} and sub is ${biodata.mysub}`);
            }
        }
        console.log(biodata.myname.myage);      //23
        console.log(biodata.getdata());     //My name is Sunanda Sadhukhan and age is 23
//THIS KEYWORD
        console.log(this.alert("Awsome"));
    //ex1
        function myname1() {
            console.log(this);
        }                                
        myname1();
    //ex2
        var names='Sunanda';
        function myname1() {
        console.log(this.names);
        }                                
        myname1();      //Sunanda
    //ex3
        const obj={
            myage:23,
            pri(){
                console.log(this.myage);
            }
        }
        obj.pri();      //23
    //ex4
        const obj={
            pri(){
                console.log(this);
            }
        }
        obj.pri();              //{pri: ƒ}
    //ex5
        const obj={
            pri:()=>{
                console.log(this);
            }
        }
        obj.pri();              //  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        //THE MAIN DIFFERENCE BETWEEN NORMAL FUNCTION AND FAT ARROW FUNCTION
    //ex6
        let biodata={
            myname:{
                name:'Sunanda',
                age:23,
            },
            class:'MCA 2nd',
            getdata(){
                console.log(`Name is ${this.myname.name},${this.myname.age} studying in ${this.class}`);
            }
        }
        biodata.getdata();          //Name is Sunanda,23 studying in MCA 2nd

// Array Destructuring
    //It is a expression that makes it possible to make values from arrays, or properties from objects, into distinct variables.
        const bio=['sunanda',23,'mca'];
        let name=bio[0], age=bio[1],dep=bio[2];
        console.log(dep);       //mca
    //to eliminate the above code
        const bio=['sunanda',23,'mca'];
        let[name,age,dep]=bio;
        console.log(name);      //sunanda
    //we can add values too
        const bio=['sunanda',23];
        let [name, age, dep= "MCA"] = bio;
        console.log(dep);       //MCA
//Object Destructuring
        const mydata={
            name:'sunanda',
            age:23
        }
        let age1=mydata.age;
//         console.log(age1);      //23
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
//Spread Operator[ARRAY]
        const color=['red','blue','yellow'];
        const color1=['red','blue','yellow','green','pink'];
                            //OR
        const mycolor=[...color,'green','pink'];
        console.log(mycolor);           //[ 'red', 'blue', 'yellow', 'green', 'pink' ]
//SHALLOW COPY & DEEP COPY
    //SHALLOW COPY=changing the value of cloned object will reflect into original as well as because both are pointing to same reference object
        const a={id:101, name:"Sunanda"};   //Original Object
        const b=a;                          //Cloned Object
        b.id=102;
        console.log(a);         //{ id: 102, name: 'Sunanda' }
        console.log(b);         //{ id: 102, name: 'Sunanda' }
    //DEEP COPY=changing the value of object will not reflect into original object because both are pointing to different reference object
        //Spread Operator
        const c={...a};
        c.id=103;
        console.log(a);         //{ id: 102, name: 'Sunanda' }
        console.log(c);         //{ id: 103, name: 'Sunanda' }
        //Assign Operator
        const d=Object.assign({},a);
        d.id=104;
        console.log(d);         //{ id: 104, name: 'Sunanda' }
//ES7 FEATURES      2016
    //1. ARRAY INCLUDES
        const color2=['red','blue','yellow','green','pink'];
        const pre=color2.includes('red');
        console.log(pre);       //true
    //2.EXPONENTIATION OPERATOR
        console.log(2**3);
//ES8 FEATURES     2017
    //String Padding
    //Object Values()
    //Object entries()
        const msg="hiiii.... welcome.....";
        console.log(msg);
        console.log(msg.padStart(5));
        console.log(msg.padEnd(10));

        const person={name2:'def',age:45};
        console.log(Object.values(person));     //[ 'def', 45 ]
        console.log(Object.entries(person));    //[ [ 'name2', 'def' ], [ 'age', 45 ] ]
//ES9 FEATURES          2018
    //Spread Operator[OBJECT]
        const sperson={...person};
        console.log(person);
        console.log(sperson);
//ES10 FEATURES          2019
    //Array Prototype (flat, flatMap)
        const arr=[[1,2],[3,4],[5,[6,7]]];
        let flatarr=arr.reduce((accumulator,ele)=>{
            return accumulator.concat(ele);
        })
        console.log(flatarr);       //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
        console.log(arr.flat());    //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
        console.log(arr.flat(2));   //[ 1, 2, 3, 4, 5, 6, 7 ]
//ES11 FEATURES          2020
    //1. BIGINT
        let onum=Number.MAX_SAFE_INTEGER;
        console.log(onum);      //9007199254740991
        console.log(onum+12);   //9007199254741004
        console.log(9007199254740991n+12n);     //9007199254741003n
        let a=9007199254740991n+12n;
        console.log(typeof(a));     //bigint
    //2.Nullish Coalescing
        const foo= null ?? 'hiiiii';
        console.log(foo);       //hiiiii
        const foo1= false ?? 'hiiiii';
        console.log(foo1);       //false
        const foo3= NaN ?? 'hiiiii';
        console.log(foo3);       //NaN
        const foo4= false ?? 'hiiiii';
        console.log(foo4);       //false
        const foo5= undefined ?? 'hiiiii';
        console.log(foo5);      //hiiiii
// ES15             2014
    "use strict";
    let pi=3.14;
    console.log(pi);
    