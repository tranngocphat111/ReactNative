async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "This is a test post",
        userId: 1,
      }),
    });
  
    const data = await response.json();
    return data;
  }
  
  (async () => {
    console.log("Sending POST request...");
    const result = await postData();
    console.log("Response:", result);
  })();
  