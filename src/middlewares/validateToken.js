const { verifyJWT } = require("../libs/handleJWT");

const authRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    const user = !token ? false : await verifyJWT(token);

    if(user) req.user = user;
    else return res.status(401).send("Invalid token");

    return next();
  } catch ({ message }) {
    res.status(400).res.send({ message });
  }
};

module.exports = authRequired;
