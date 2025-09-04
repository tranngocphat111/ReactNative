"use strict";
async function bai14(number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return number * 3;
}
bai14(5).then((result) => console.log(result));
