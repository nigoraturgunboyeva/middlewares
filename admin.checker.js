const jwt = require('jsonwebtoken');

function authenticationAdmin(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).send("Token mavjud emas!");

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.authId = decoded?.id;

        next();
    } catch (error) {
        res.status(403).send("Yaroqsiz token!");
    }
};

module.exports = authenticationAdmin;