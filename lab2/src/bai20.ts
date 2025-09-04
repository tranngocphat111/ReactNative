async function getData(): Promise<string> {
    const apiCall = new Promise<string>(resolve => {
      setTimeout(() => resolve("Success: data loaded"), 3000);
    });
  
    const timeout = new Promise<string>((_, reject) => {
      setTimeout(() => reject(new Error("Timeout: request took too long")), 2000);
    });
  
    return Promise.race([apiCall, timeout]);
  }
  
  (async () => {
    try {
      console.log("Fetching...");
      const data = await getData();
      console.log("Result:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  })();
  