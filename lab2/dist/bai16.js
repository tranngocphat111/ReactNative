"use strict";
async function delayAndReturnBai16(value, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}
async function runInParallel() {
    console.log("Start");
    const [result1, result2, result3] = await Promise.all([
        delayAndReturnBai16("First result", 1000),
        delayAndReturnBai16(42, 2000),
        delayAndReturnBai16(true, 1500),
    ]);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log("Done");
}
runInParallel();
