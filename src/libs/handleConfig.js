const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DBCONNECT: process.env.URL_DB_CONNECT,
  PRIVATEKEY: process.env.PRIVATE_KEY,
  CORSORIGIN: process.env.CORS_URL_ORIGIN
};