const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(false,)
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage });

module.exports = [
  upload.single('documento'),
  (req, res) => {
    res.json({ file: req.file });
  }
]