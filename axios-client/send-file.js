const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const form = FormData();
form.append('arquivo', stream);

console.log(form);

const formHeaders = form.getHeaders();

console.log(formHeaders);

axios.post('http://localhost:3001/upload/simples', form, {
  headers: {
    ...formHeaders
  }
})
.then((response) => response)
.catch((err) => console.log(err));
