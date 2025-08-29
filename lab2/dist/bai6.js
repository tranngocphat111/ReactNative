"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai4_1 = require("./bai4");
Promise.all([bai1_1.bai1, (0, bai2_1.bai2)(), bai4_1.bai4]).then(values => {
    console.log(values);
});
