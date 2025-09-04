async function fetchCompletedTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json(); 
  
    return todos.filter((todo: any) => todo.completed);
  }
  
  (async () => {
    console.log("Fetching completed todos...");
    const completed = await fetchCompletedTodos();
    console.log("Completed Todos:", completed);
  })();
  