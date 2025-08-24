export class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work(): void {
        console.log(`${this.name} is working.`);
    }
}

export class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    manage(): void {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}

export class Developer extends Employee {
    programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    code(): void {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}
