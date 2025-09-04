async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`Attempt ${attempt}...`);
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        return await response.json(); 
      } catch (error) {
        console.error(`Error on attempt ${attempt}:`, error);
        if (attempt === retries) {
          throw new Error("All retries failed");
        }
      }
    }
  }
   
  (async () => {
    try {
      const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
      console.log("Success:", data);
    } catch (err) {
      console.error("Final Error:", err);
    }
  })();
  