"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
}
(async () => {
    console.log("Fetching user...");
    const user = await fetchUser(1);
    console.log("Result:", user);
})();
