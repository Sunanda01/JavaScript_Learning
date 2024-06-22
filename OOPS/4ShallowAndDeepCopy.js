//SHALLOW COPY & DEEP COPY
    //SHALLOW COPY=changing the value of cloned object will reflect into original as well as because both are pointing to same reference object.
    //It doesn't change the value of nested objects.
    const a={id:101, name:"Sunanda", marks: {eng:23, math:30}};   //Original Object
    const b=a;                          //Cloned Object
    b.id=102;
    console.log(a);         //{ id: 102, name: 'Sunanda', marks: {eng:23, math:30}}
    console.log(b);         //{ id: 102, name: 'Sunanda', marks: {eng:23, math:30}}
    b.marks.eng=39;
    console.log(a,b);       //{ id: 102, name: 'Sunanda', marks: {eng:39, math:30}} { id: 102, name: 'Sunanda', marks: {eng:39, math:30}}
    
    //Spread Operator
    const c={...a};
    c.id=103;
    console.log(a);         //{ id: 102, name: 'Sunanda' marks: {eng:39, math:30}}
    console.log(c);         //{ id: 103, name: 'Sunanda' marks: {eng:39, math:30}}

    //Assign Operator
    const d=Object.assign({},a);
    d.id=104;
    console.log(d);         //{ id: 104, name: 'Sunanda' marks: {eng:23, math:30}}

    //DEEP COPY=changing the value of object will not reflect into original object because both are pointing to different reference object
    const a={id:101,name:'sunanda',marks:{math:23,eng:30}};
    const b= JSON.parse(JSON.stringify(a));
    b.id=102;
    b.name='mantu';
    b.marks.math=36;
    console.log(a,b);
    //{ id: 101, name: 'sunanda', marks: { math: 23, eng: 30 } } { id: 102, name: 'mantu', marks: { math: 36, eng: 30 } }
