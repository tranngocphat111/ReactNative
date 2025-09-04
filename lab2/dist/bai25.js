"use strict";
async function downloadFile(filename) {
    console.log(`Starting download: ${filename}...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`Download complete: ${filename}`);
}
(async () => {
    await downloadFile("example.zip");
})();
