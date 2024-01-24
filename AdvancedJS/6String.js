//STRINGS
let name=new String("skyward book");
console.log(name);  //[String: 'skyward book']
let name1=("skyward book");
console.log(name1);
//LENGTH
    console.log(name1.length);
//ESCAPE CHARACTER
    let name2="skyward book" is a "nice book";
    console.log(name12;
    let name3="skyward book\" is a \"nice book";
    console.log(name3); //skyward book" is a "nice book
    let name4="skyward book' is a 'nice book";
    console.log(name4); //skyward book' is a 'nice book
    let name5='skyward book\' is a \'nice book';
    console.log(name5); //skyward book' is a 'nice book
//INDEX OF
    console.log(name.indexOf("book"));  //8
    console.log(name.lastIndexOf("k",5));   //1
//SEARCH
    console.log(name.search("book"));   //8
    console.log(name.search("Book"));   //-1
//SLICE
    var str='apple,mango,lichi';
    let res=str.slice(3,9);
    console.log(res);   //le,man
    let res1=str.slice(7,-2);
    console.log(res1);  //ango,lic
//SUBSTRING= cannot use negative index
    let res2=str.substr(0,4);
    console.log(res2);  //appl
    //to print character from last
    let res3=str.substr(-5);
    console.log(res3);  //lichi
    //TO PRINT ONLY 280 CHARACTERS
    // let res=arr.slice(0,280);
    // console.log(res);
//REPLACE
    let data="mantu sadhukhan";
    let rdata=data.replace("mantu","sunanda");
    console.log(rdata); //sunanda sadhukhan
    //replaces the first occurrence
    console.log(data.charAt(3));    //t
    //returns the unicode of the character
    console.log(data.charCodeAt(1));    //97
//PROPERTY ACCESS
    console.log(data[0]);   //m
//CHANGE CASE
    data1=rdata.toUpperCase();
    console.log(data1);
    console.log(data1.toLowerCase());
//CONCAT
    let fname="Sunanda", lname="Sadhukhan";
    console.log(fname + lname);             //Sunand Sadhukhan
    console.log(fname.concat(lname));       //SunandaSadhukhan
    console.log(fname.concat(" ",lname));   //Sunanda Sadhukhan
    console.log(`${fname} ${lname}`);       //Sunanda Sadhukhan
//TRIM Fx
    let newstr="                 APPLE MANG0              ";
    console.log(newstr.trim());         //APPLE MANG0
//CONVERTING A STRING TO ARRAY
//SPLIT METHOD
    var txt='a,b,c,d,e';
    console.log(txt.split(" "));    //split on space    //[ 'a,b,c,d,e' ]
    console.log(txt.split(","));    //split on comma    //[ 'a', 'b', 'c', 'd', 'e' ]
    console.log(txt.split("|"));    //split on pipe     //[ 'a,b,c,d,e' ]
