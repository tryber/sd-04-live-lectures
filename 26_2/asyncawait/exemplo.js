const { RSA_NO_PADDING } = require("constants");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function runAsync(folderPath) {
  try {
    const fileNames = await readFile(folderPath).then((res) => res.byteLength);
    console.log(fileNames);
  } catch (err) {
    console.log(err);
  }
}

console.log("hello");

runAsync('./arquivos/arquivo1.txt');
