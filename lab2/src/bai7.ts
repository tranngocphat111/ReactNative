import { bai1 } from "./bai1";
import { bai2 } from "./bai2";

Promise.race([bai1, bai2()]).then(values => {
    console.log(values)
})