let a={
         fname:"raj" ,
         lname:"kumar",
         mname:"G"
    }
       
    let b=function(){
         mname="A";
    }
    b.__proto__={
        fname:"sunanda", 
        lname:"sadhukhan",
        mname:"___",
        run:()=>{
            alert("__proto__.run");
        }
    }

    b.prototype={
        run1:()=>{
            alert("prototype.run");
        },
        country:"india",
    }
    
    a.__proto__= b;
    // b.run1();        //not a function
    b.run();
    console.log(a)
    console.log(a.fname+" "+a.mname+" "+a.lname+" "+a.country);     //raj G kumar undefined
    let a1=new b();
    a1.run1();
    console.log(a.fname+" "+a.mname+" "+a.lname+" " +a1.country);       //raj G kumar india
    
    

    let stu=function(a,b){
       this.a=a;
       this.b=b;
       console.log(this.a);
       console.log(a);
    }
    stu.prototype.display=function(state){
        console.log(this.a+" "+this.b+" residing in "+state);
    }
    let s=new stu("sunanda","sadhu");
    s.display("bihar");
