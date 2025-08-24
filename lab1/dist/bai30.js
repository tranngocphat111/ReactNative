"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Student = void 0;
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
exports.Student = Student;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("Students:");
        this.students.forEach(s => console.log(`${s.name}, Grade: ${s.grade}`));
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(`${t.name}, Subject: ${t.subject}`));
    }
}
exports.School = School;
