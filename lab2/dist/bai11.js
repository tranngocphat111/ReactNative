"use strict";
var bai11 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};
bai11().then(message => console.log(message));
