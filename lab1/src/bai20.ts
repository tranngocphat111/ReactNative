export interface Vehicle {
    brand: string;
    speed: number;
    drive(): void;
  }
  
  
  export class Car implements Vehicle {
    brand: string;
    speed: number;
  
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    drive(): void {
      console.log(`${this.brand} car is driving at ${this.speed} km/h`);
    }
  }
  
  export class Bike implements Vehicle {
    brand: string;
    speed: number;
  
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    drive(): void {
      console.log(`${this.brand} bike is riding at ${this.speed} km/h`);
    }
  }
  

  
  
  
  