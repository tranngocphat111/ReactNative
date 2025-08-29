"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
var bai12 = async () => {
    return await (0, bai5_1.simulateTask)(2000).then((message) => console.log(message));
};
bai12();
