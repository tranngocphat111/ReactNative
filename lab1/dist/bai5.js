"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(balance) {
        this.balance += balance;
        return true;
    }
    withdraw(balance) {
        if (this.balance < balance) {
            return false;
        }
        this.balance -= balance;
        return true;
    }
}
exports.BankAccount = BankAccount;
