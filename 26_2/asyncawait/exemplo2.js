// vamos transformar o exemplo2 de promises usando async/await


const fs = require("fs");
const path = require("path");
const util = require("util");

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);


async function readFileWithName(folderPath, fileName) {
  const file = await readFile(path.join(folderPath, fileName));

  return {
    [fileName]: file.toString("utf8"),
  };
}

// readFileWithName('arquivos', 'arquivo1.txt').then((res) => console.log(res));

async function readFolder(folderPath) {
  const fileNames = await readDir(folderPath);
  
  const filePromises = await fileNames.map((fileName) =>
    readFileWithName(folderPath, fileName)
  );
  
  const files = await Promise.all(filePromises);
  
  return await files.reduce((file, result) => ({ ...result, ...file }), {});
}

async function runAsync() {
  const result = await readFolder("./arquivos");
  console.log(result);
}

runAsync();

// module.exports = readFolder;
