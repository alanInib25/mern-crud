const app = require("./app");
const databaseConnect = require("./database");
const { PORT } = require("./libs/handleConfig");

const OTHERPORT = 4400;

app.listen(PORT || OTHERPORT, (_) => {
  console.log(`server listen on port ${PORT}`);
  databaseConnect();
});
