"use strict";
Promise.resolve(10)
    .then((data) => {
    var result = data * data;
    console.log(result);
    return result;
})
    .then((data) => {
    var result = data * 2;
    console.log(result);
    return result;
})
    .then((data) => {
    var result = data + 5;
    console.log(result);
    return result;
});
