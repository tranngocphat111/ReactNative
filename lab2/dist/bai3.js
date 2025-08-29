"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai3 = bai3;
function bai3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
bai3().catch(data => console.log(data));
