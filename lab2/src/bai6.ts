import { bai1 } from "./bai1";
import { bai2 } from "./bai2";
import { bai4 } from "./bai4";

Promise.all([bai1, bai2(),bai4]).then(values => {
    console.log(values)
})