const fs = require("fs");

const getBetterMessage = (error) => {
  if (error.code === "ENOENT") return `Arquivo não encontrado: ${error.path}`;

  return error.message;
};

fs.readFile("./arquivo2.txt", (err, content) => {
  console.log(err);
  if (err) {
    console.error(`Erro ao ler o arquivo: ${getBetterMessage(err)}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString("utf8")}`);
});

console.log("fim do script");