export type User = {
  id: number;
  name: string;
};

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

(async () => {
  console.log("Fetching user...");
  const user = await fetchUser(1);
  console.log("Result:", user);
})();