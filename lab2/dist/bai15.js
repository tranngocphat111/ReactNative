"use strict";
async function delayAndReturn(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}
async function runSequentially() {
    console.log("Start");
    const result1 = await delayAndReturn("First result", 1000);
    console.log(result1);
    const result2 = await delayAndReturn(42, 1000);
    console.log(result2);
    const result3 = await delayAndReturn(true, 1000);
    console.log(result3);
    console.log("Done");
}
runSequentially();
