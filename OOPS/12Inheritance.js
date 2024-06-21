class balance{
    name;
    accountnumber;
    balance;
    constructor(name,accountnumber,balance=0){
        this.name=name;
        this.accountnumber=Date.now();
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
}
class savingacc extends balance{
    transactionlimit=2000;
    constructor(name,balance=0){
        super(name,balance);
        this.balance=balance;
    }
}
class curracc extends balance{
    transactionlimit=5000;
    constructor(name,balance=0){
        super(name,balance);
        this.balance=balance;
    }
    display(amount){
        console.log('withdrawn amount is '+amount);
    }
}
let a=new curracc('swapno',2000);
a.deposit(5000);
a.withdraw(3000);
console.log(a);
a.display(3000);
let b=new savingacc('shubho',10000);
b.deposit(10000);
console.log(b);
