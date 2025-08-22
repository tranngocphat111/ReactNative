import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";

console.log("Bai 1--------------------------");
var person = new Person("Tran Ngoc Phat", 21);
console.log(person);

console.log("Bai 2--------------------------");
var student = new Student("Tran Ngoc Phat", 21, 10);
student.displayInfo();

console.log("Bai 3--------------------------");
var car = new Car("BWM", "ABCCC", 2025);
console.log(car);

console.log("Bai 4--------------------------");
var rectangle = new Rectangle(10, 15);
console.log(rectangle);
console.log("Dien tich: ", rectangle.area());
console.log("Chi Vi: ", rectangle.perimeter());

console.log("Bai 5--------------------------");
var account = new BankAccount(500);
if (account.deposit(300)) {
  console.log("Nap thanh cong");
  console.log(account)
}else {
  console.log("Nap that bai");
}

if (account.withdraw(300)) {
  console.log("Rut thanh cong");
  console.log(account)
}else {
  console.log("Rut that bai!!! Khong du so du");
}

console.log("Bai 6--------------------------");
var book = new Book("Dragon ball z", "Koriko", 2004)
console.log(book)



