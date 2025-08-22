"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
console.log("Bai 1--------------------------");
var person = new bai1_1.Person("Tran Ngoc Phat", 21);
console.log(person);
console.log("Bai 2--------------------------");
var student = new bai2_1.Student("Tran Ngoc Phat", 21, 10);
student.displayInfo();
console.log("Bai 3--------------------------");
var car = new bai3_1.Car("BWM", "ABCCC", 2025);
console.log(car);
console.log("Bai 4--------------------------");
var rectangle = new bai4_1.Rectangle(10, 15);
console.log(rectangle);
console.log("Dien tich: ", rectangle.area());
console.log("Chi Vi: ", rectangle.perimeter());
console.log("Bai 5--------------------------");
var account = new bai5_1.BankAccount(500);
if (account.deposit(300)) {
    console.log("Nap thanh cong");
    console.log(account);
}
else {
    console.log("Nap that bai");
}
if (account.withdraw(300)) {
    console.log("Rut thanh cong");
    console.log(account);
}
else {
    console.log("Rut that bai!!! Khong du so du");
}
console.log("Bai 6--------------------------");
var book = new bai6_1.Book("Dragon ball z", "Koriko", 2004);
console.log(book);
