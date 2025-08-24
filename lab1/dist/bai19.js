"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    makeSound() {
        console.log("Gau Gau!!!");
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    makeSound() {
        console.log("Meo Meo!!!");
    }
}
exports.Cat = Cat;
