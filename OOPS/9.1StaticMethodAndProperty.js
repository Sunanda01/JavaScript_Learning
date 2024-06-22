class student{
    static id=1;         //STATIC PROPERTIES
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
        this.id=student.id++;
    }
    
    //STATIC METHODS
    static sort_age(s1,s2){
        return s1.age-s2.age;
    }
    static sort_marks(s1,s2){
        return s1.marks-s2.marks;
    }
}
const a=new student('rakesh',20,89);
const b=new student('shyama',21,96);
const c=new student('raju',19,85);
const stu=[a,b,c];
// stu.sort(student.sort_age);
stu.sort(student.sort_marks);
console.log(stu);
