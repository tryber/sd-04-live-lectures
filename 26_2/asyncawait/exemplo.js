const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function runAsync(folderPath) {
  try {
    const fileNames = await readFile(folderPath);
    console.log(fileNames);
  } catch (err) {
    console.log(err);
  }
}

console.log("hello");

runAsync('./arquivos/hello.txt');
