"use strict";
async function waitFiveSeconds() {
    console.log("Waiting 5 seconds...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Done waiting!");
}
(async () => {
    await waitFiveSeconds();
})();
