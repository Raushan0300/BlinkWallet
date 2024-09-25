const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const User = require('../models/Users');

router.post('/', async(req, res)=>{
    const {name, email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(user) return res.status(409).json({message: 'User Already Exists'});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(200).json({message: 'User Created Successfully'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;