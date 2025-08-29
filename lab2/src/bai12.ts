import { simulateTask } from "./bai5";

var bai12 = async () => {
  return await simulateTask(2000).then((message) => console.log(message));
};

bai12()


