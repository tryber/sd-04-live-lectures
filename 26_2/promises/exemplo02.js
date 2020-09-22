const fs = require("fs");
const path = require("path");
const util = require("util");

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

function readFileWithName(folderPath, fileName) {
  return readFile(path.join(folderPath, fileName)).then((fileContent) => ({
    [fileName]: fileContent.toString("utf8"),
  }));
}

function readFolder(folderPath) {
  return new Promise((resolve, reject) => {
    readDir(folderPath)
      .then((fileNames) =>
        fileNames.map((fileName) => readFileWithName(folderPath, fileName))
      )
      .then((filePromises) => Promise.all(filePromises))
      .then((files) => {
        console.log(files);
        const result = files.reduce((file, result) => {
          return { ...result, ...file }; //
        }, {});

        resolve(result);
      });
  });
}

readFolder('./arquivos').then((res) => console.log(res));

module.exports = readFolder;
