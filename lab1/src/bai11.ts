export class Animal {
    name: string;
    sound(): void  {
        console.log(`${this.name} makes a sound.`) ;
    } ;


    constructor(name: string) {
        this.name = name;
    }

}


export class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} says: Gau Gau!!!`);
    }
}

export class Cat extends Animal {
    meow(): void {
        console.log(`${this.name} says: Meo Meo!!!`);
    }
}

