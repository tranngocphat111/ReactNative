async function bai17() {
  const promises = [
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
  ];

  for await (const result of promises) {
    console.log(result);
  }
}

bai17();
