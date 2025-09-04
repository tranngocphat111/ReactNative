async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

async function processAPIs(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid", 
  ];

  const results = await Promise.allSettled(urls.map((url) => fetchData(url)));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} success:`, result.value);
    } else {
      console.error(`API ${index + 1} failed:`, result.reason);
    }
  });
}

(async () => {
  await processAPIs();
})();
