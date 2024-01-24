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
