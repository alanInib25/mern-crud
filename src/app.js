const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { CORSORIGIN } = require("./libs/handleConfig");

//routes
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");
const uploadRouter = require("./routes/upload.routes");

//middlewares
app.use(
  cors({
    origin: [`${CORSORIGIN}`],
    credentials: true,
  })
);
/*credentials: true, necesario para que en el front se visualicen las cookies enviadas (se esta eviando el token en las cookies) */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", authRouter);
app.use("/api", taskRouter);
app.use("/api", uploadRouter);

//static
app.use(express.static(path.join(__dirname, "/public")));

module.exports = app;


