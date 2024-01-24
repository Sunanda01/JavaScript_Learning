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

        const mydata={
            name:'sunanda',
            age:23
        }
        let age1=mydata.age;
//         console.log(age1);      //23
