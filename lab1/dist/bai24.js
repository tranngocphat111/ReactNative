"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = exports.Appliance = void 0;
class Appliance {
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is spinning...");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner is cooling...");
    }
}
exports.AirConditioner = AirConditioner;
