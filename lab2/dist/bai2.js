"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai2 = bai2;
function bai2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
bai2().then(data => console.log(data));
