async function delayAndReturnBai16<T>(value: T, ms: number): Promise<T> {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), ms);
    });
  }
  
  async function runInParallel(): Promise<void> {
    console.log("Start");
  
    const [result1, result2, result3] = await Promise.all([
        delayAndReturnBai16<string>("First result", 1000),
        delayAndReturnBai16<number>(42, 2000),
        delayAndReturnBai16<boolean>(true, 1500),
    ]);
  
    console.log(result1); 
    console.log(result2); 
    console.log(result3); 
  
    console.log("Done");
  }
  
  runInParallel();
  