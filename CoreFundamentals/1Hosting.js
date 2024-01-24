//HOSTING
    //Hosting in JavaScript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.
        //Creation Phase
        var myname=undefined;
        console.log(myname);
        myname="Sunanda";
        //In ES6 Hosting is avoided by using the let keyword instead of var
        //The Other difference is that the variable declared with let are local to the surrounding block not the entire function
        console.log(myname1);
        let myname1;
        myname1="abc";
