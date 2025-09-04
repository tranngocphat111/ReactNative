const bai21 = fetch("https://jsonplaceholder.typicode.com/todos/1");
bai21.then((response) => response.json()).then((json) => console.log(json));
