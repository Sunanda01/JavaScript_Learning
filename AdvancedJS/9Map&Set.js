//>  Map
// Map->Collection of unique Data , Map is object Constructor (update new value or override new player)
let mymap=new Map([[-1,"RM-1"],[0,"RM0"]]);
mymap.set(1,"RM1");//always in key value paits
mymap.set(2,"RM2");
mymap.set(3,"RM3");
console.log(mymap);
// Map(5) {-1 => 'RM-1', 0 => 'RM0', 1 => 'RM1', 2 => 'RM2', 3 => 'RM3'}
// [[Prototype]]:Map

// We can use for loop and there are many other methods and key word also
for(let [key,value] of mymap){
    console.log(key + " " + value);

}
mymap.delete(2);//delete
console.log(mymap);

mymap.clear();//clear
console.log(mymap.get(-1));//return value of that index



// Weak MAP-> only store obj and cant be iterated

let wm=new WeakMap();
let ob1={};
let ob2={};

wm.set(ob1,"private");
wm.set(ob2,"Private data");
----------------------------------------Set------------------------------
Set  -> Collection of unique Data , Set is object Constructor

var arr=[1,4,7,2,5,4];
let objSet=new Set(arr);
console.log(objSet);

objSet.add(value);//add value
objSet.delete(value);//delete value
objSet.clear();//clear
objSet.has();//check




//Weak Set -> we can store only object here but we cant iterate it
let ws=new WeakSet();
let ob1={};
let ob2={};
ws.add(ob1);
ws.add(ob2);

console.log(ws);

#Note-> All set Functions are available here but cant do iteration
