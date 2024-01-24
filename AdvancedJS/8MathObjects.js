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