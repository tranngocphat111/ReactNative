Promise.resolve([1, 2, 4, 7, 10]).then((array) => {
  setTimeout(() => {
    array.filter((element) => {
      if (element % 2 == 0) console.log(element);
    });
  }, 1000);
});
