const user = require('../models/usermodel.js');
const jwt = require('jsonwebtoken');

exports.refTokenHandler = async(req,res,next)=>{
    const cookie = req.cookies;
    if(!cookie.jwt) return res.sendStatus(401);
    const refreshToken = cookie.jwt;
    const foundUser = await user.findAll({where:{refreshToken}});
    if(!foundUser) res.sendStatus(403);
    jwt.verify(
        refreshToken,
        process.env.REFRESHTOKENSECRET,
        (err, decoded) => {
            if (err || foundUser[0].email !== decoded.email) return res.sendStatus(403);
            const role = foundUser[0].userType;
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        email: decoded.email,
                        role: role
                    },
                },
                process.env.ACCESSTOKENSECRET,
                { expiresIn: '10s' }
            );
            res.json({ role, accessToken })
        }
    )
}