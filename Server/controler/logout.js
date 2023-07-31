const { Sequelize } = require('sequelize');
const user = require('../models/usermodel');

exports.postLogout = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.jwt) return res.sendStatus(204);
    const refreshToken = cookie.jwt;
    const response = await user.findAll( {where:{refreshToken:refreshToken}} );
    if (!response) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }
    response[0].set({
        refreshToken:null
    });
    await response[0].save();
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}