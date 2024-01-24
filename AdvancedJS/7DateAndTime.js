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
