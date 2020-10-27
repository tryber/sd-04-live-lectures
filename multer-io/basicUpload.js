const multer = require('multer');

const upload = multer({dest: 'uploads'});

module.exports = [
  upload.single('arquivo'), 
  (req, res) => {
    const file = req.file;

    console.log(file);

    res.json({ message: 'enviado com sucesso!' });
  }
]