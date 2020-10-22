const express = require('express');

const router = express.Router();

router.post('/', (req, res) => { res.send('Cadastrar filme') } )

module.exports = router;