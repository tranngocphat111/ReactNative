"use strict";
async function bai13() {
    try {
        let result = await fakeApi();
        console.log("Kết quả:", result);
    }
    catch (error) {
        console.error("Có lỗi xảy ra:", error.message);
    }
}
function fakeApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Dữ liệu trả về từ server");
            }
            else {
                reject(new Error("Server bị lỗi"));
            }
        }, 1000);
    });
}
bai13();
