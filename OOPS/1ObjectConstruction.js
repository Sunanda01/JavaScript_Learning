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
