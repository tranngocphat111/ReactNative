"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai1 = void 0;
exports.bai1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
exports.bai1.then(message => console.log(message));
