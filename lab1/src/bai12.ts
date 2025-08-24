export interface Flyable {
    fly(): void;
}

export class Bird implements Flyable {
    fly(): void {
        console.log("Con chim dang bay");
    }
}


export interface Swimmable {
    swim(): void;
}

export class Fish implements Swimmable {
    swim(): void {
        console.log("Con ca dang boi");
    }
}
