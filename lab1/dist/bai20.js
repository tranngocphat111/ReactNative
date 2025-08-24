"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car = void 0;
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} car is driving at ${this.speed} km/h`);
    }
}
exports.Car = Car;
class Bike {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} bike is riding at ${this.speed} km/h`);
    }
}
exports.Bike = Bike;
