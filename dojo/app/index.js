const express = require('express')
const app = express()
const port = 3000
const rescue = require('express-rescue');
const createToken = require('./auth/createToken');
const validateToken = require('./auth/validateToken');

app.use(express.json());

// const middlewareListUsers = (req, res) => res.json({users: []});



const middlewareValidateEmail = rescue((req, res, next) => {
  // console.log(req.body);
  const { email } = req.body;
  
  if (!email) {
    res.json({message: 'email não pode ficar vazio!'});
  }
  
  next();
})

const middlewareValidatePassword = rescue((req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.json({message: 'senha não pode ficar vazia!'});
  }
  
  next();
});


// app.get('/users', middlewareListUsers);

app.post('/users', 
middlewareValidateEmail,
middlewareValidatePassword,
async (req, res) => {
  res.send("criou usuário!");
}
);

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username !== 'admin' || password !== '12345') {
    return res.status(500).json({message: 'Username ou senha errada'});
  }
  
  const token = createToken({ username });
  
  return res.status(200).json({ token });
});

const validarAutenticidade = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    const { username } = validateToken(token);
    
    req.username = username;
    
    next();
  } catch (_err) {
    res.status(500).json({message: 'token inválido!'})
  }
};

app.put('/users', validarAutenticidade, (req, res) => {
  console.log('middleware final' + req.username);
  res.json({message: `Atualizar usuário ${req.username}`})
});
app.delete('/users', validarAutenticidade, (req, res) => {res.send('Deletar usuário')});

app.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

app.listen(port, () => console.log(`Example app listening on port port!`))