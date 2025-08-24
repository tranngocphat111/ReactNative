export class Animal {
    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

export class Dog extends Animal {
    makeSound(): void {
        console.log("Gau Gau!!!");
    }
}

export class Cat extends Animal {
    makeSound(): void {
        console.log("Meo Meo!!!");
    }
}

