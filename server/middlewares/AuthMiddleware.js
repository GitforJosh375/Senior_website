const {verify} = require("jsonwebtoken");


const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({error: "User not logged in!"});
    
    try {
        const validToken = verify(accessToken, process.env.JWT_SECRET);
        const username = validToken.username;
        req.user = validToken;
        if(validToken) {
            return next();
        }
    } catch (errors) {
            return res.json({error: errors});
    }
};

module.exports = {validateToken};