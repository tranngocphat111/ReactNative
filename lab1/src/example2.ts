import { Animal, Cat, Dog } from "./bai19";
import { Bike, Car as CarVehicle } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape } from "./bai25";
import { Order, Product } from "./bai26";
import { Teacher } from "./bai27";
import { Student, School } from "./bai30";
import { Car as CarMovable, Robot } from "./bai29";
import { User } from "./bai7";

console.log("============== Bài 19 ==============");
const animals: Animal[] = [new Dog(), new Cat()];
for (const a of animals) a.makeSound();

console.log("============== Bài 20 ==============");
const carV = new CarVehicle("Toyota", 120);
const bike = new Bike("Yamaha", 80);
carV.drive();
bike.drive();

console.log("============== Bài 21 ==============");
const userRepo = new Repository<User>();
userRepo.add(new User("Alice"));
userRepo.add(new User("Bob"));
console.log(userRepo.getAll());

console.log("============== Bài 22 ==============");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

console.log("============== Bài 23 ==============");
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment("1234-5678-9012-3456");
card.pay(250);

console.log("============== Bài 24 ==============");
const fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();

console.log("============== Bài 25 ==============");
Shape.describe();

console.log("============== Bài 26 ==============");
const order = new Order();
order.addProduct(new Product("Laptop", 1000));
order.addProduct(new Product("Mouse", 50));
console.log("Total Price:", order.calculateTotal());

console.log("============== Bài 27 ==============");
const teacher = new Teacher("Mr. Smith", 40, "Mathematics");
teacher.introduce();

console.log("============== Bài 28 ==============");
const dog = new Dog();
dog.makeSound();
const cat = new Cat();
cat.makeSound();

console.log("============== Bài 29 ==============");
const carM = new CarMovable();
carM.move();
const robot = new Robot();
robot.move();

console.log("============== Bài 30 ==============");
const student1 = new Student("Alice", 10);
const student2 = new Student("Bob", 9);
const teacher1 = new Teacher("Dr. John", 50, "Physics");

const school = new School();
school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(teacher1);
school.displayInfo();
