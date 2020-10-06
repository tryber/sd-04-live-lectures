const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
};

let schema; /* Aqui entra a variável que salva à conexão, começa como undefined */

const connection = () => {
  return schema /* Se schema já existir: */
    ? Promise.resolve(schema) /* Retorna o schema numa Promise: */
    : mysqlx
        .getSession(config)
        .then((session) => {
          /* Quando terminamos de abrir a conexão: */
          schema = session.getSchema('real_state'); /* Armazenamos a conexão na variável `schema`*/
          return schema; /* E retornamos o schema de dentro da Promise */
        })
        .catch((_err) => {
          /* Caso um erro ocorra: */
          process.exit(1); /* E encerramos o processo */
        });
};

module.exports = connection;
