export var bai4 = new Promise((resolve) => resolve(Math.random()));

bai4
  .then((number) => console.log(number))
  .catch((err) => {
    console.log(err.message);
  });
