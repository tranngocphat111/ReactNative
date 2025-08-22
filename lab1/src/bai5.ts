export class BankAccount {
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(balance: number): boolean{
        this.balance+=balance;
        return true;
    }

    withdraw(balance: number): boolean{
        if(this.balance < balance){
            return false;
        }

        this.balance-=balance;
        return true;
    }


    
}