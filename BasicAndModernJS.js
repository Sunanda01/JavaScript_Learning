// to print a line
console.log('HELLO WORLD');

// values and variables
var myname='Sunanda';
var myAge=24;
console.log(myname,myAge);

// TYPES OF OPERATORS
var op1= true;
console.log(typeof(myname));
console.log(typeof(myAge));
console.log(typeof(op1));
console.log(typeof(op2));

// BUGS
console.log('Sunanda'-'Sadhukhan'); //NaN
console.log(5-'2'); //3 ~~ bug

console.log(true + true);   //2 true=1 false=0

//NaN= Not-A-Number
// >Property of the Global Object
// >Variable in the Global Scope

//EXPRESSIONS AND OPERATORS
console.log(20+5);  //ADDITION
console.log(20-5);  //SUBTRACTION
console.log(20*5);  //PRODUCT
console.log(20/5);  //QUOTIENT
console.log(20%5);  //REMAINDER
    //POST INCREMENT
    var num=15;
    var num1=num++;
    console.log(num,num1);  //16 15
    //PRE INCREMENT
    var num=15;
    var num1=++num;
    console.log(num,num1);  //16 16
     //POST INCREMENT
    var num=15;
    var num1=num++;
    
//CONDITIONAL STATEMENTS
    //IF-ELSE
    var year=200;
    if (year%4==0) 
        if(year%100!=0 || year%400==0)
    {
        console.log('is leap year');
    }
    else
    {
        console.log('is not leap year');
    }
    //Falsy Values in JC
    // ' ', 0, undefined, null, false

    //Conditional Operator
    var age=17;
    (age>18)?console.log('Eligible to VOTE'):console.log('NOT Eligible to VOTE');
//lOOPS
    //FOR
    var num=8,i;
    for(i=1;i<=10;i++)
    {
        console.log(num +' * ' + i + ' = ' + num*i );
    }

    //WHILE
    var num=9,i=1;
    while(i<=10)
    {
        console.log(num+' * '+i+' = '+num*i);
        i++;
    }
//FUNCTIONS
    function sum(a,b)
    {
        var s=a+b;
        console.log(s);
    }
    sum(10,20);

    function sum(a,b)
    {
        var s=a+b;
        return s;
    }
    var ans=sum(10,20);
    console.log(ans);
    //Anonymous Fx
    var myfunc=function(a,b){
        return a+b;
    }
    console.log(myfunc(15,15));



//  MODERN JAVASCRIPT
    //LET,VAR.CONST
        let myage=16;
        console.log(myage);
        myage=23;
        console.log(myage);

        const myage=16;
        console.log(myage);
        myage=23;
        console.log(myage);
        //var=>function scope
        //let and const=> block scope
    //TEMPLATE STRING
    var num=8,i;
    for(i=1;i<=10;i++)
    {
        //console.log(num +' * ' + i + ' = ' + num*i );
        console.log(`${num} * ${i} = ${num*i}` );   //template literals
    }
    //DEFAULT PARAMETERS
        function mul(a,b=3) //default 
        {
            return(a*b);
        }
        console.log(mul(5));
    //FAT ARROW FUNCTION
        console.log(sum());
        function sum()
        {
            let a=5,b=5;
            let sum=a+b;
            return `Sum is ${sum}`;
        }
        console.log(sum());
        //use of FAT ARROW =>
       const sum=() =>
       {
        let a=5,b=5;
        let sum=a+b;
        return `Sum is ${sum}`;
       } 
       console.log(sum());
        //Written As
        const sum=() =>`Sum is ${(a=5)+(b=5)}`; 
        console.log(sum());      
    //ARRAYS
         var names=['rekha','suresh','mahesh','suresh'];  //array definition
        //Array Traversal
            console.log(names[2]); 
        //Array Length 
            console.log(names.length); 
        //Using For Loop
            for(var i=0;i<names.length;i++){
                console.log(names[i]);
            }
        //For in loop
            for(let i in names){
                console.log(i);
            }//returns index
        //For of loop
            for(let i of names){
                console.log(i);
            }//returns elements
        //For Each
            names.forEach(function(element,index, array){
                console.log(element+" index: "+index+);
            });
        //Fat arrow
            names.forEach((element,index,array)=>{console.log(element);})
        //IndexOf
            console.log(names.indexOf('suresh'));
            console.log(names.lastIndexOf('suresh'));
        //FIND INDEX
            const ages = [3, 10, 18, 20];
                console.log(ages.findIndex(checkAge));
            function checkAge(age) {
                return age > 18;
            }//3
        //FILTER
            const ages = [32, 33, 16, 40];
            const result = console.log(ages.filter(checkAdult));
            function checkAdult(age) {
                    return age >= 18;
            }
                [ 32, 33, 40 ]
        //SORTING
            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            console.log(fruits.sort());
            //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

            const num=[5,3,9,8,1,0];
            console.log(num.sort());
            //[ 0, 1, 3, 5, 8, 9 ]

            const months = ["Jan", "Feb", "Mar", "Apr"];
            const sorted = console.log(months.toSorted());
            //[ 'Apr', 'Feb', 'Jan', 'Mar' ]

        //INSERT IN ARRAY
            //PUSH AT THE END OF THE ARRAY    SINGLE OR MULTIPLE
            const months = ["Jan", "Feb", "Mar", "Apr"];
            const count=months.push("May");
            console.log(months);
            console.log(count);
            //[ 'Jan', 'Feb', 'Mar', 'Apr', 'May' ]           5

            //UNSHIFT=INSERT AT THE BEGINNING OF THE ARRAY    SINGLE OR MULTIPLE
            const months = ["Feb", "Mar", "Apr"];
            const count=months.unshift("Jan");
            console.log(months);
            console.log(count);
        //DELETE IN ARRAY

            //POP=DELETE FROM THE BEGINNING OF THE ARRAY    SINGLE OR MULTIPLE
            const months = ["Feb", "Mar", "Apr"];
            months.pop();
            console.log(months);
             //[ 'Feb', 'Mar', 'Apr' ]

            //SHIFT=DELETE FROM THE BEGINNING OF THE ARRAY    SINGLE OR MULTIPLE
            const months = ["Feb", "Mar", "Apr"];
            months.shift();
            console.log(months);
            //[ 'Mar', 'Apr' ]

            const months = ["Jan","Feb", "Mar", "Apr"];
            //to add at the end\
            const newmon= months.splice(months.length,0,"Dec");
            console.log(months);
            //output of splics
            console.log(newmon);
            //update Mar to MAr
            const index=months.indexOf("Mar");
            console.log(index);
            if(index != -1)
            {
                months.splice(index,1,"MAr");
                console.log(months);
            }
            else{
                console.log("NOT FOUND");
            }
            //Delete Apr
            const index1=months.indexOf("Apr");
            console.log(index1);
            if(index1 != -1)
            {
                months.splice(index1,Infinity);
                console.log(months);
            }
            else{
                console.log("NOT FOUND");
            }
        //MAP()=returns a new array containing the results of calling a function oln every element in this array
            const num=[5,3,9,8,1,0];
            let newnum=num.map((ele,index,arr)=>{
                return ele>5;
            })
            console.log(num);   [ 5, 3, 9, 8, 1, 0 ]
            console.log(newnum);    //[ false, false, true, true, false, false ]
            
            let num1=num.map((ele,index,arr)=>{
                return `index no= ${index} and the value is ${ele} belong to ${arr}`
            })
            console.log(num1);
            // OUTPUT  [
            //     'index no= 0 and the value is 5 belong to 5,3,9,8,1,0',
            //     'index no= 1 and the value is 3 belong to 5,3,9,8,1,0',
            //     'index no= 2 and the value is 9 belong to 5,3,9,8,1,0',
            //     'index no= 3 and the value is 8 belong to 5,3,9,8,1,0',
            //     'index no= 4 and the value is 1 belong to 5,3,9,8,1,0',
            //     'index no= 5 and the value is 0 belong to 5,3,9,8,1,0'
            // ]
            let num2=num.forEach((ele,index,arr)=>{
                return `index no= ${index} and the value is ${ele} belong to ${arr}`
            })
            console.log(num2);  //undefined
            //difference between map and foreach
            //we can use different methods with map
            //map returns value

            //FIND SQRT OF NUMBERS IN ARRAY
            const num=[4,9,16,25,36];
            let arrsq=num.map((ele)=>Math.sqrt(ele));
            console.log(arrsq); //[ 2, 3, 4, 5, 6 ]
            //MULTIPLY BY 2 AND RETURN ELEMENT GREATER THAN 10
            const num1=[2,3,4,6,8];
            let arrmul=num1.map((ele)=>{
                return ele*2;
            }).filter((ele)=>{
                return ele>10;
            })
            console.log(arrmul);    //[ 12, 16 ]
        
        //REDUCE= to reduce 3D or 2D array into 1D array
            //takes four argument= ACCUMULATOR, CURRENT VALUE, CURRENT INDEX, SOURCE ARRAY
            let arr=[5,6,2];
            let arrsum=arr.reduce((accumulator,ele,index, arr)=>{
                return accumulator+=ele;
            })
            console.log(arrsum);    //13

            const num1=[2,3,4,6,8];
            let arrmul=num1.map((ele)=>ele*2).filter((ele)=>ele>10).reduce((accumulator,ele)=>{
                return accumulator+=ele;
            })
            console.log(arrmul);    //28

            let arr=[5,6,2];
            let arrsum=arr.reduce((accumulator,ele,index, arr)=>{
                debugger;
                return accumulator+=ele;
            })
            console.log(arrsum);    //20
        
        //FLATTEN ARRAY
            const arr=[[1,2],[3,4],[5,6]];
            let flatarr=arr.reduce((accumulator,ele)=>{
                return accumulator.concat(ele);
            })
            console.log(flatarr);
            //[ 1, 2, 3, 4, 5, 6 ]
    
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
    //DATE AND TIME
        //platform independent format.
        //data objects contain a number that represents milliseconds since 1st JAN 1970 UTC
    
        //4 ways to create new date object
            // new Date();
            // new Date(year, month, day, hours, minutes, seconds, milliseconds);
            // new Date(milliseconds);
            // new Date(date String);
            //USING CONSTRUCTOR
            let curdate=new Date();
            console.log(curdate);       //2024-01-05T16:41:47.707Z
            console.log(new Date());    //2024-01-05T16:42:38.959Z
            console.log(new Date().toLocaleDateString());   //5/1/2024
            console.log(new Date().toLocaleString());   //5/1/2024, 10:14:36 pm
            console.log(new Date().toString());   //Fri Jan 05 2024 22:15:58 GMT+0530 (India Standard Time)
            console.log(Date.now());        //1704473207758
            //returns the nos of ms elapsed since 1 January 1970 00:00:00 UTC
            let d=new Date(2001,00,21,22,30,00,00);
            console.log(d.toLocaleString());        //21/1/2001, 10:30:00 pm
            let d1=new Date(2021,0);
            console.log(d1.toLocaleString());      //1/1/2021, 12:00:00 am
        //new Date(dateString)=creates a new date object from date string
            var d3=new Date("August 31, 2006 17:30:00");
            console.log(d3.toLocaleString());      //31/8/2006, 5:30:00 pm
            var d4=new Date(16045455988743);
            console.log(d4.toLocaleString());       //17/6/2478, 12:36:28 pm
        //INDIVIDUAL DATE
            const cdate=new Date();
            console.log(cdate.toLocaleString());    //5/1/2024, 11:25:27 pm
            console.log(cdate.getFullYear());       //2024
            console.log(cdate.getDate());           //5
            console.log(cdate.getDay());            //5
            console.log(cdate.getMonth());          //0
        //set individual date
            const cdate1=new Date();
            console.log(cdate1.setFullYear(2022, 0, 21));       //1642788277068
            console.log(cdate1.setFullYear(2022));              //1642788277068
            console.log(cdate1.setDate(21));                    //1642788277068    
            console.log(cdate1.setMonth(0));                    //1642788277068

        //TIME METHODS
            const curtime=new Date();
            console.log(curtime.getTime());     //1704478106574
            console.log(curtime.getHours());    //23
            console.log(curtime.getMinutes());  //38
            console.log(curtime.getSeconds());  //26
            console.log(curtime.getMilliseconds()); //574
        //set individual time
            const curtime1=new Date();
            console.log(curtime1.setTime());     //NaN
            console.log(curtime1.setHours(5));    //NaN
            console.log(curtime1.setMinutes(5));  //NaN
            console.log(curtime1.setSeconds(5));  //NaN
            console.log(curtime1.setMilliseconds(5));   //NaN

    //MATH OBJECT
        //MATH.PI
                console.log(Math.PI);       //3.141592653589793
        //MATH.ROUND
                let a=10.561;
                console.log(Math.round(a));     //11
        //MATH.POW
                console.log(Math.pow(2,3));     //8
                console.log(2**3);              //8
        //MATH.SQRT
                console.log(Math.sqrt(625));        //25
        //MATH.ABS()= RETURNS THE ABSOLUTE(+VE) VALUE
                console.log(Math.abs(-10.001));     //10
                console.log(Math.abs(4-6));     //2
        //MATH.CEIL()= RETURNS THE VALUE OF X ROUNDED UP TO ITS NEAREST INTEGER
                console.log(Math.ceil(5.5));        //6
                console.log(Math.ceil(2.3));        //3
                console.log(Math.ceil(5-8));     //-3
                console.log(Math.ceil(-8));     //-8
                //DOES NOT CHECK THE NUMBER AFTER DECIMAL
        //MATH.FLOOR()
                console.log(Math.floor(55.678));    //55
                console.log(Math.floor(-55.678));   //-56
        //MATH.MAX()
                console.log(Math.max(-2,0,8,1,7,10));       //10
        //MATH.RANDOM()= RETURNS A RANDOM NUMBER BETWEEN 0 TO 9
                console.log(Math.floor(Math.random()*10));      //8
                console.log(Math.random()*10);      //5.307580223908088
        //MATH.TRUNC()=RETURNS THE INTEGER PART
                console.log(Math.trunc(55.678));    //55    floor()
                console.log(Math.trunc(-55.678));      //55  ceil()
// ----------------------------------------------------------------------------------------------------------------------------------------------------