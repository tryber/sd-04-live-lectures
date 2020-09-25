const express = require('express');

const app = express();

const { logMiddleware } = require('./middlewares'); 

app.use(logMiddleware);

const usuarios = [
  { id: 1, nome: 'Renato', cargo: 'Especialista'},
  { id: 2, nome: 'Vinícius', cargo: 'Instrutor' }
]

app.get('/usuarios', (req, res, next) => {
  console.log("Listando usuários...");
  res.json(usuarios);
});

app.use(express.json());

app.post('/usuarios', (req, res, next) => {
  const { nome, cargo } = req.body;
  console.log(req.body);
  usuarios.push({ nome, cargo });
  // 
  res.json(`salvando novo usuário ${nome}`);
});

app.get('/pesquisa', (req, res, next) => {
  const { nome } = req.query;

  const usuario = usuarios.find(usuario => usuario.nome === nome);

  if (usuario) return res.send({ message: 'Usuário encontrado!', usuario });

  res.status(500).send({message: 'Usuário não encontrado!'  });
});

app.get('/usuario/:id', (req, res, next) => {
  const { id } = req.params;

  const usuario = usuarios.find(usuario => usuario.id === parseInt(id));

  res.send(usuario);
});


app.listen(3000);