function balance(name, balance=0){
    this.name=name;
    this.balance=balance;
}
let rajeshacc = new balance('rajesh',1000);
let sopnoacc= new balance('sopno',2000);
//STORED IN PROTOTYPE OF OBJECT, NEW MEMORY WILL NOT BE ASSIGNED.
balance.prototype.deposit=function (amount){
    this.balance+=amount;
}
sopnoacc.deposit(5000);
rajeshacc.deposit(3000);
console.log(rajeshacc,sopnoacc);
