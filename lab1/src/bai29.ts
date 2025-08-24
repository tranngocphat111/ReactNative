export interface Movable {
    move(): void;
}

export class Car implements Movable {
    move(): void {
        console.log("Car is driving...");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot is walking...");
    }
}
