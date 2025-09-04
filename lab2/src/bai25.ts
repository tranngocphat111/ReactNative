async function downloadFile(filename: string): Promise<void> {
  console.log(`Starting download: ${filename}...`);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(`Download complete: ${filename}`);
}

(async () => {
  await downloadFile("example.zip");
})();
