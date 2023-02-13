var events= require('events');
var listeners=require('../listener');


var emitter=new events.EventEmitter();

var Account = function(amount){
    var balance=amount;

    var monitor=function(){

        if(balance <=10000){
            // just raise an event
            // Event Firing 
            emitter.emit("underbalance");
        }
        else if (balance>=250000){
            emitter.emit("overbalance");
        }
    }

    var getBalance=function(){
        return balance;
    }
    var deposit=function(amount){
        balance=balance+amount;
        monitor();
    }
    
    
    var withdraw=function(amount){
        balance=balance - amount;
        monitor();
    }
    return{
        getBalance:getBalance,
       deposit:deposit,
       withdraw:withdraw

    }
};



//Before performing any operation 
//First resister event with eventHandler
//attach event handler with its event
//Event Binding
//Event Resistration


emitter.on("underbalance",listeners.blockAccount);
emitter.on("underbalance",listeners.sendEmail);
emitter.on("underbalance",listeners.sendSMS);

emitter.on("overbalance",listeners.payIncomeTax);
emitter.on("overbalance",listeners.payMetroTax);


//inline function


emitter.on("underbalance",
()=>{
    console.log("account operation transaction history is updated...")
});



var acct123=new Account(65000);
console.log("Balance = "+acct123.getBalance());

//acct123.withdraw(60000);
acct123.deposit(200000);
console.log("Balance="+acct123.getBalance());

