"use strict";
async function Task(id, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
}
async function queueProcess() {
    console.log("Starting queue process...");
    const tasks = [
        () => Task(1, 1000),
        () => Task(2, 1500),
        () => Task(3, 2000),
        () => Task(4, 1200),
        () => Task(5, 1800),
    ];
    for (const task of tasks) {
        const result = await task();
        console.log(result);
    }
    console.log("All tasks completed sequentially!");
}
(async () => {
    await queueProcess();
})();
