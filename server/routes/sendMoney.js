const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const Wallet = require('../models/Wallet');
const History = require('../models/History');
const User = require('../models/Users');

router.post('/', authenticatedToken, async(req, res)=>{
    const {email, amount} = req.body;
   
    if(!email || !amount) return res.status(400).json({message: 'Email and Amount is required'});
    if(amount <= 0) return res.status(400).json({message: 'Amount must be greater than 0'});
    if(email === req.user.email) return res.status(400).json({message: 'You cannot send money to yourself'});
    try {
        const wallet = await Wallet.findOne({user: req.user._id});
        if(!wallet) return res.status(404).json({message: 'Wallet Not Found'});
        if(wallet.balance < amount) return res.status(400).json({message: 'Insufficient Balance'});

        const user = await User.findOne({email});
        if(!user) return res.status(406).json({message: 'User Not Found'});

        const userWallet = await Wallet.findOne({user: user._id});
        if(!userWallet) return res.status(404).json({message: 'User Wallet Not Found'});

        const newBalance = wallet.balance - amount;
        wallet.balance = newBalance;
        await wallet.save();

        const newHistory = new History({
            wallet: wallet._id,
            name: user.name,
            amount,
            type: 'debit',
            date: Date.now()
        });
        await newHistory.save();

        const userNewBalance = userWallet.balance + amount;
        userWallet.balance = userNewBalance;
        await userWallet.save();

        const userHistory = new History({
            wallet: userWallet._id,
            name: req.user.name,
            amount,
            type: 'credit',
            date: Date.now()
        });
        await userHistory.save();
        return res.status(200).json({balance:newBalance ,message: 'Money Sent Successfully'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;