"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai4 = void 0;
exports.bai4 = new Promise((resolve) => resolve(Math.random()));
exports.bai4
    .then((number) => console.log(number))
    .catch((err) => {
    console.log(err.message);
});
