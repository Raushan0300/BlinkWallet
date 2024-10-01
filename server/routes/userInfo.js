const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const User = require('../models/Users');

router.get('/', authenticatedToken, async(req, res)=>{
    try{
        const user = await User.findById({email: req.user._id}).select('-password -_id -__v');
        if(!user) return res.status(404).json({message: 'User Not Found'});

        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;