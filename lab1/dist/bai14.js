"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    manage() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    code() {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}
exports.Developer = Developer;
