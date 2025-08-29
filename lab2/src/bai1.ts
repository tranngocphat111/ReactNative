export var bai1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000)

})


bai1.then(message => console.log(message))
