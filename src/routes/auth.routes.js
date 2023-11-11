const { Router } = require("express");
const authRouter = Router();
const authRequired = require("../middlewares/validateToken");
const validateSchemaData = require("../middlewares/validateData");
const { registerSchema, loginSchema } = require("../schemas/auth.schema");
const { registerUser, loginUser, logoutUser, profileUser, verifyToken } = require("../controllers/auth.controller");

authRouter.post("/auth/register", validateSchemaData(registerSchema), registerUser);
authRouter.post("/auth/login", validateSchemaData(loginSchema), loginUser);
authRouter.post("/auth/logout", logoutUser);
authRouter.get("/auth/verify", authRequired, verifyToken)
authRouter.get("/auth/profile", authRequired, profileUser);

module.exports = authRouter;
