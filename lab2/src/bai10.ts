Promise.resolve(10)
  .then((data) => {
    console.log(data * data);
  })
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log("Done");
  });
