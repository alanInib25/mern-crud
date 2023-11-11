const Image = require("../models/image.model");
const fs = require("fs/promises");
const path = require("path");

const previusImageDelete = async (req, res, next) => {
  try {
    const imageDelete = await Image.findOneAndDelete({ user: req.user.id });
    const files = await fs.readdir(path.join(`${__dirname}/../public/uploads`));
    files.forEach(async (image) => {
      if (image === imageDelete?.filename) {
        await fs.unlink(path.join(`${__dirname}/../public/uploads/${image}`));
      }
    });
    next();
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

module.exports = previusImageDelete;
