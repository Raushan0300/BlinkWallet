const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const Wallet = require('../models/Wallet');
const User = require('../models/Users');

router.get('/', authenticatedToken, async(req, res)=>{
    try {
        const user = await User.findById(req.user._id).select('name');
        if(!user) return res.status(404).json({message: 'User Not Found'});

        const wallet = await Wallet.findOne({user: req.user._id});
        if(!wallet) {
            const newWallet = new Wallet({
                user: req.user._id,
                balance: 0
            });
            await newWallet.save();
            return res.status(200).json({name: user.name, balance: newWallet.balance});
        };

        return res.status(200).json({name: user.name, balance: wallet.balance});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;