const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const User = require('../models/Users');

router.post('/', authenticatedToken, async(req, res)=>{
    const {name, email, dob} = req.body;
    try{
        const user = await User.findById(req.user._id);
        if(!user) return res.status(404).json({message: 'User Not Found'});

        if(name) user.name = name;
        if(email) user.email = email;
        if(dob) user.dob = dob;

        await user.save();

        return res.status(200).json({message: 'User Updated Successfully'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
});