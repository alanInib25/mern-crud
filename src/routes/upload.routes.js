const { Router } = require("express");
const multerMiddleware = require("../libs/handleUpload");
const authRequired = require("../middlewares/validateToken");
const previusImageDelete = require("../middlewares/deleteUpload");
const {uploadImage, getUpload} = require("../controllers/upload.controller");
const uploadRouter = Router();

uploadRouter.post("/uploads", authRequired, previusImageDelete, multerMiddleware.single("image"), uploadImage);
uploadRouter.get("/uploads", authRequired, getUpload);
module.exports = uploadRouter;