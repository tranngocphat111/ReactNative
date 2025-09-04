"use strict";
async function getData() {
    const apiCall = new Promise(resolve => {
        setTimeout(() => resolve("Success: data loaded"), 3000);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout: request took too long")), 2000);
    });
    return Promise.race([apiCall, timeout]);
}
(async () => {
    try {
        console.log("Fetching...");
        const data = await getData();
        console.log("Result:", data);
    }
    catch (err) {
        console.error("Error:", err);
    }
})();
