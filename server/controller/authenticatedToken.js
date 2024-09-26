const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const authenticatedToken = async (req, res, next) => {
    const {token} = req.headers;

    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try {
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(id);
        if(!user) return res.status(404).json({message: 'User Not Found'});

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

module.exports = {authenticatedToken};