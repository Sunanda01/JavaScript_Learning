class balanceacc{
    name;
    accountnumber;
    #balance=0; //private variable
    constructor(name,balance=0){
        this.name=name;
        this.accountnumber=Date.now();
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        this.#balance-=amount;
    }
    
    //SETTER
    set balance(amount){
        if(isNaN(amount)){
            throw new Error('ENTER A VALID NUMBER');
        }
        this.#balance=amount;
    }
    
    //GETTER
    get balance(){
        return this.#balance;
    }
}
class savingacc extends balanceacc{
    transactionlimit=2000;
    constructor(name,balance=0){
        super(name,balance);
     }
}
class curracc extends balanceacc{
    transactionlimit=5000;
    constructor(name,balance=0){
        super(name,balance);
    }
    display(amount){
        console.log('withdrawn amount is '+amount);
    }
}
let a=new curracc('swapno',5000);
console.log(a);
a.display(10000);
let b=new savingacc('shubho',10000);
console.log(b);
