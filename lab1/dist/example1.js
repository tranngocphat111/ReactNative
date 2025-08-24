"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
console.log("Bai 1------------------------------------------------------------");
var person = new bai1_1.Person("Tran Ngoc Phat", 21);
console.log(person);
console.log("Bai 2------------------------------------------------------------");
var student = new bai2_1.Student("Tran Ngoc Phat", 21, 10);
student.displayInfo();
console.log("Bai 3------------------------------------------------------------");
var car = new bai3_1.Car("BWM", "ABCCC", 2025);
console.log(car);
console.log("Bai 4------------------------------------------------------------");
var rectangle = new bai4_1.Rectangle(10, 15);
console.log(rectangle);
console.log("Dien tich: ", rectangle.area());
console.log("Chi Vi: ", rectangle.perimeter());
console.log("Bai 5------------------------------------------------------------");
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
console.log("Bai 6------------------------------------------------------------");
var book = new bai6_1.Book("Dragon ball z", "Koriko", 2004);
console.log(book);
console.log("Bai 7------------------------------------------------------------");
var user = new bai7_1.User("Tran Ngoc Phat");
console.log(user.name);
user.name = "Nguyen Van A";
console.log(user.name);
console.log("Bai 8------------------------------------------------------------");
let products = [
    new bai8_1.Product("Iphone 14", 100),
    new bai8_1.Product("Samsung Galaxy S23", 120),
    new bai8_1.Product("Xiaomi 13", 99),
    new bai8_1.Product("Oppo Find X5", 120),
];
let filtered = products.filter((product) => product.price > 100);
console.log(filtered);
console.log("Bai 10------------------------------------------------------------");
var acc = new bai10_1.Account("tranngocphat", "123456", 1);
console.log(acc.username);
console.log(acc.accountId);
console.log("Khong the truy cap vao password:  acc.password");
console.log("Bai 11------------------------------------------------------------");
const dog = new bai11_1.Dog("Buddy");
dog.sound();
dog.bark();
const cat = new bai11_1.Cat("Mimi");
cat.sound();
cat.meow();
console.log("Bai 12------------------------------------------------------------");
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
console.log("Bai 13------------------------------------------------------------");
const square = new bai13_1.Square(5);
console.log("Dien tich hinh vuong: ", square.area());
const circle = new bai13_1.Circle(3);
console.log("Dien tich hinh tron: ", circle.area());
console.log("Bai 14------------------------------------------------------------");
const employee = new bai14_1.Employee("John Doe", 50000);
employee.work();
const manager = new bai14_1.Manager("Jane Smith", 70000, "Sales");
manager.work();
manager.manage();
const developer = new bai14_1.Developer("Alice Johnson", 60000, "JavaScript");
developer.work();
developer.code();
console.log("Bai 15------------------------------------------------------------");
const library = new bai15_1.Library();
const book1 = new bai6_1.Book("The Hobbit", "J.R.R. Tolkien", 1999);
const book2 = new bai6_1.Book("1984", "George Orwell", 1992);
const user1 = new bai7_1.User("Phat");
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.listBooks();
library.listUsers();
console.log("Bai 16------------------------------------------------------------");
const stringBox = new bai16_1.Box("Hello world!!!!");
console.log("Box contains: ", stringBox.value);
stringBox.value = "New value";
console.log("Box contains: ", stringBox.value);
const numberBox = new bai16_1.Box(42);
console.log("Box contains: ", numberBox.value);
numberBox.value = 100;
console.log("Box contains: ", numberBox.value);
console.log("Bai 17------------------------------------------------------------");
const logger1 = bai17_1.Logger.getInstance();
const logger2 = bai17_1.Logger.getInstance();
logger1.log("First message");
logger2.log("Second message");
console.log("Bai 18------------------------------------------------------------");
console.log(bai18_1.MathUtil.add(5, 3));
console.log(bai18_1.MathUtil.subtract(5, 3));
console.log(bai18_1.MathUtil.multiply(5, 3));
console.log(bai18_1.MathUtil.divide(10, 2));
