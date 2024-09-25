const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const User = require('../models/Users');

router.post('/', async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: 'User Not Found'});

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) return res.status(401).json({message: 'Invalid Credentials'});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        return res.status(200).json({message: 'Login Successful', token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;