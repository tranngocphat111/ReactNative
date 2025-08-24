import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Employee, Manager } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Student } from "./bai2";
import { Bike } from "./bai20";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";

console.log("============== Bài 1 ==============");
var person = new Person("Tran Ngoc Phat", 21);
console.log(person);

console.log("============== Bài 2 ==============");
var student = new Student("Tran Ngoc Phat", 21, 10);
student.displayInfo();

console.log("============== Bài 3 ==============");
var car = new Car("BWM", "ABCCC", 2025);
console.log(car);

console.log("============== Bài 4 ==============");
var rectangle = new Rectangle(10, 15);
console.log(rectangle);
console.log("Dien tich: ", rectangle.area());
console.log("Chi Vi: ", rectangle.perimeter());

console.log("============== Bài 5 ==============");
var account = new BankAccount(500);
if (account.deposit(300)) {
  console.log("Nap thanh cong");
  console.log(account);
} else {
  console.log("Nap that bai");
}

if (account.withdraw(300)) {
  console.log("Rut thanh cong");
  console.log(account);
} else {
  console.log("Rut that bai!!! Khong du so du");
}

console.log("============== Bài 6 ==============");
var book = new Book("Dragon ball z", "Koriko", 2004);
console.log(book);

console.log("============== Bài 7 ==============");
var user = new User("Tran Ngoc Phat");
console.log(user.name);
user.name = "Nguyen Van A";
console.log(user.name);

console.log("============== Bài 8 ==============");
let products = [
  new Product("Iphone 14", 100),
  new Product("Samsung Galaxy S23", 120),
  new Product("Xiaomi 13", 99),
  new Product("Oppo Find X5", 120),
];
let filtered = products.filter((product) => product.price > 100);
console.log(filtered);

console.log("============== Bài 10 ==============");
var acc = new Account("tranngocphat", "123456", 1);
console.log(acc.username);
console.log(acc.accountId);
console.log("Khong the truy cap vao password:  acc.password");

console.log("============== Bài 11 ==============");
const dog = new Dog("Buddy");
dog.sound();
dog.bark();
const cat = new Cat("Mimi");
cat.sound();
cat.meow();

console.log("============== Bài 12 ==============");
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim(); 

console.log("============== Bài 13 ==============");
const square = new Square(5);
console.log("Dien tich hinh vuong: ", square.area());
const circle = new Circle(3);
console.log("Dien tich hinh tron: ", circle.area());

console.log("============== Bài 14 ==============");
const employee = new Employee("John Doe", 50000);
employee.work();
const manager = new Manager("Jane Smith", 70000, "Sales");
manager.work();
manager.manage();
const developer = new Developer("Alice Johnson", 60000, "JavaScript");
developer.work();
developer.code();

console.log("============== Bài 15 ==============");
const library = new Library();
const book1 = new Book("The Hobbit", "J.R.R. Tolkien",1999);
const book2 = new Book("1984", "George Orwell",1992);
const user1 = new User("Phat");
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.listBooks();
library.listUsers();

console.log("============== Bài 16 ==============");
const stringBox = new Box<string>("Hello world!!!!");
console.log("Box contains: ", stringBox.value);
stringBox.value = "New value";
console.log("Box contains: ", stringBox.value);
const numberBox = new Box<number>(42);
console.log("Box contains: ", numberBox.value);
numberBox.value = 100;
console.log("Box contains: ", numberBox.value);

console.log("============== Bài 17 ==============");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("First message");
logger2.log("Second message");

console.log("============== Bài 18 ==============");
console.log(MathUtil.add(5, 3));      
console.log(MathUtil.subtract(5, 3)); 
console.log(MathUtil.multiply(5, 3)); 
console.log(MathUtil.divide(10, 2));  
