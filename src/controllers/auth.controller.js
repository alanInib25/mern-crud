const User = require("../models/user.model");
const { hashPassword, comparePassword } = require("../libs/handleHash");
const { signJWT } = require("../libs/handleJWT");

//Register user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //consulta duplicate
    const duplicateUsername = await User.findOne({ username: username });
    if (duplicateUsername)
      return res
        .status(400)
        .send({ message: "Already exist an user with this username" });

    const duplicateEmail = await User.findOne({ email: email });
    if (duplicateEmail)
      return res
        .status(400)
        .send({ message: "Already exist an user with this email" });

    //hash password
    const hashUserPassword = await hashPassword(password);

    //create and save user
    const user = await new User({
      username,
      email,
      password: hashUserPassword,
    }).save();

    //response
    res.status(200).json(user);
  } catch ({ message }) {
    res.status(400).send({ message });
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    let token;

    //chech password
    const checkUserPassword =
      user === null ? false : await comparePassword(password, user.password);

    //sign token
    if (checkUserPassword) token = await signJWT(user);
    else return res.status(400).send({ message: "Error credentials" });

    /*quita el password al enviar a cliente*/
    user.set("password", undefined);

    /*el objecto con la propiedad secure en true ayuda a enviar y visualizar la cookie con el token en backend*/
    res.cookie("token", token);

    res.status(200).json(user);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//logout user
const logoutUser = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(203);
};

//profile user
const profileUser = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id).select("-password");

    if (user) return res.status(200).json(user);
    else return res.status(401).send({ message: "Not user" });
  } catch ({ message }) {
    res.status(400).send({ message });
  }
};

const verifyToken = async (req, res) => {
  try {
    const { id } = req.user;
    const userVerify = await User.findById(id).select("-password");

    if (!userVerify) return res.status(401).send({ message: "Unauthorized" });
    else
      res.status(200).json({
        _id: userVerify._id,
        username: userVerify.username,
        email: userVerify.email,
      });
  } catch ({ message }) {
    res.status(400).send({ message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
  verifyToken,
};
