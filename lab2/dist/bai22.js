"use strict";
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
}
async function callMultipleFetches(times) {
    for (let i = 1; i <= times; i++) {
        const todo = await fetchTodo();
        console.log(`Fetch ${i}:`, todo);
    }
}
(async () => {
    console.log("Start fetching...");
    await callMultipleFetches(3);
    console.log("Done");
})();
