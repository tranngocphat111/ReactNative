"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
Promise.race([bai1_1.bai1, (0, bai2_1.bai2)()]).then(values => {
    console.log(values);
});
