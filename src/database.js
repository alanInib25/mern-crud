const mongoose = require("mongoose");
const { DBCONNECT } = require("./libs/handleConfig");

async function databaseConnect() {
  try {
    await mongoose.connect(`${DBCONNECT}`);
    console.log("connection to DB success");
  } catch ({ name, message }) {
    console.log({ name, message });
  }
}

module.exports = databaseConnect;
