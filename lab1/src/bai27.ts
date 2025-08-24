export class Person {
    constructor(public name: string, public age: number) {}
}

export class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`I am ${this.name}, I teach ${this.subject}.`);
    }
}