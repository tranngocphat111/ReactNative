async function delayAndReturn<T>(value: T, ms: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

async function runSequentially(): Promise<void> {
  console.log("Start");

  const result1: string = await delayAndReturn<string>("First result", 1000);
  console.log(result1);

  const result2: number = await delayAndReturn<number>(42, 1000);
  console.log(result2);

  const result3: boolean = await delayAndReturn<boolean>(true, 1000);
  console.log(result3);

  console.log("Done");
}

runSequentially();
