const Image = require("../models/image.model");
const { PORT } = require("../libs/handleConfig");

//carga una imagen de perfil del usuario
const uploadImage = async (req, res) => {
  try {
    const image = new Image();
    image.filename = req.file.filename;
    image.path = `http://127.0.0.1:${PORT}/uploads/${req.file.filename}`;
    image.originalname = req.file.originalname;
    image.size = req.file.size;
    image.isProfile = req.file.isProfile;
    image.user = req.user.id;
    const imageProfile = await image.save();
    return res.status(200).send(imageProfile);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//envia imagen del perfil del usuario
const getUpload = async (req, res) => {
  try {
    const image = req.user.id
      ? await Image.findOne({ user: req.user.id })
      : false;
    if (!image)
      return res
        .status(200)
        .send({ path: `http://127.0.0.1:${PORT}/uploads/user.png` });
    return res.status(200).send(image);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

module.exports = { uploadImage, getUpload };
