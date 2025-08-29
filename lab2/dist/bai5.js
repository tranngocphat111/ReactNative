"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = simulateTask;
function simulateTask(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(2000).then(message => console.log(message));
