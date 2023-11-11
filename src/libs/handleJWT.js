const { sign, verify } = require("jsonwebtoken");
const { PRIVATEKEY } = require("../libs/handleConfig");

const signJWT = async ({ _id }) => {
  try {
    return await sign({ id: _id }, PRIVATEKEY, { expiresIn: "1d" });
  } catch ({ message }) {
    console.log({ message });
  }
};

const verifyJWT = async (token) => {
  try {
    return await verify(token, PRIVATEKEY);
  } catch ({ message }) {
    console.log({ message });
  }
};

module.exports = {
  signJWT,
  verifyJWT,
};
