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

//REDUCE()= to reduce 3D or 2D array into 1D array
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

//Every()= it can be used to check if all of the values from an array return a truthy value when they are passed through a callback function.
    const arr1=[[1,2,3],[4,5,6]];
    const res=arr1.every(arr => Array.isArray(arr));
    console.log(res);       //true

//Join()= It can be used to join an array of items into a single string separated by a separator.
    const fruit=["Apple","Mango","Lichi"];
    const r= fruit.join('-');
    console.log(r);
        //Apple-Mango-Lichi
    const fruit=["Apple","Mango","Lichi"];
    const r= fruit.join(':');
    console.log(r);
        //Apple:Mango:Lichi

//Some()= It can be used to check if at least one item from the array returns a truthy value when passed to a given callback.
    const n=[1,2,3];
    const res=n.some(gt);
    function gt(a){
    return a>3;
    }
    console.log(res);       //false

//Spread Operator[ARRAY]
    const color=['red','blue','yellow'];
    const color1=['red','blue','yellow','green','pink'];
                    //OR
    const mycolor=[...color,'green','pink'];
    console.log(mycolor);           //[ 'red', 'blue', 'yellow', 'green', 'pink' ]

//OPTIONAL CHAINING
    // Optional Chaining is a feature in JavaScript that allows us to access properties of an object or elements of an array 
    // without having to check whether the object or array is Null or undefined first.
    // It is represented by the ?. operator and can be used to concisely access deeply nested properties without having to 
    // write a long chain of if statement to check for null or undefined values
        const user={
        name:"ram",
            age:30,
            address:{
                street:"main_street",
                city:"Abc",
                state:"D",
                zip:560098,
            },
        }
        console.log(user.address.city?.j?.y);       //undefined

    // Optional chaining can also be used to access elements of an array in JavaScript. It works in a similar way 
    // of accessing properties of an object but using the ?.[] operator instead of the ?. operator.
        const user1=[{n:"Ram",a:20},{n:"Mohan",a:25}];
        console.log(user1[3]?.n);                   //undefined

// Array Destructuring
    //It is a expression that makes it possible to make values from arrays, or properties from objects, into distinct variables.
    const bio=['sunanda',23,'mca'];
    let name=bio[0], age=bio[1],dep=bio[2];
    console.log(dep);       //mca
//to eliminate the above code
    const bio=['sunanda',23,'mca'];
    let[name,age,dep]=bio;
    console.log(name);      //sunanda
//we can add values too
    const bio=['sunanda',23];
    let [name, age, dep= "MCA"] = bio;
    console.log(dep);       //MCA
