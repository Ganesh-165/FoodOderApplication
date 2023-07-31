const { Sequelize } = require("sequelize");
const user = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.postLoginData = async (req, res, next) => {
  const { email, password } = req.body;
  const response = await user.findAll({ where: { email: email } });
  if (response.length > 0) {
    const bcryptpwd = await bcrypt.compare(password,response[0].password);
    if (bcryptpwd) {
      const role = response[0].userType;
      const username = response[0].username;
      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: response[0].email,
            role: role,
          },
        },
        process.env.ACCESSTOKENSECRET,
        { expiresIn: "10s" }
      );
      const refreshToken = jwt.sign(
        { email: response[0].email },
        process.env.REFRESHTOKENSECRET,
        { expiresIn: "1d" }
      );
      response[0].set({
        refreshToken:refreshToken
      });
      await response[0].save();
      res.cookie("jwt", refreshToken, {
        httpOnly: true
      });
      return res.json({ role, accessToken, username, message:'Login Sucssesfully' });
    }
    return res.send({ message: "Invalid password", status: false });
  }
  res.send({ message: "Invalid email", status: false });
};
