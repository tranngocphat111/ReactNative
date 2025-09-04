import { User } from "./bai18";

async function fetchUsers(ids: number[]) {
    const promises =  ids.map(id => new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000)
    }))

    return Promise.all(promises);
}

fetchUsers([1, 2, 3]).then(users => console.log(users));