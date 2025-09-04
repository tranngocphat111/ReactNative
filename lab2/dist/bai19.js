"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUsers(ids) {
    const promises = ids.map(id => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    }));
    return Promise.all(promises);
}
fetchUsers([1, 2, 3]).then(users => console.log(users));
