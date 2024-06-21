class result{
    name;
    marks;
    constructor(name,marks=0){
        this.name=name;
        this.marks=marks;
    }
    total(num){
        this.marks+=num;
    
};
let a=new result('shyama',100);
a.total(200);
console.log(a);
