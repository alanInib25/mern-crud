const { hash, compare } = require("bcryptjs");

const hashPassword = async (userPassword) => {
  try {
    return await hash(userPassword, 10);
  } catch ({ name, message }) {
    console.log({ name, message });
  }
};

const comparePassword = async (hashPassword, loginPassword) => {
  try {
    return await compare(hashPassword, loginPassword);
  } catch ({ name, message }) {
    console.log({ name, message });
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};
