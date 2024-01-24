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
