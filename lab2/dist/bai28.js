"use strict";
async function fakeTask(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
}
async function batchProcess() {
    console.log("Starting batch process...");
    const tasks = [
        fakeTask(1, 1000),
        fakeTask(2, 1500),
        fakeTask(3, 2000),
        fakeTask(4, 1200),
        fakeTask(5, 1800),
    ];
    const results = await Promise.all(tasks);
    console.log("All tasks completed:");
    results.forEach((r) => console.log(r));
}
(async () => {
    await batchProcess();
})();
