const multer = require('multer');

const upload = multer({dest: 'uploads'});

module.exports = [
  upload.array('arquivos'), 
  (req, res) => {
    const files = req.files;

    console.log(files);

    res.json({ message: 'enviado com sucesso!', files });
  }
]