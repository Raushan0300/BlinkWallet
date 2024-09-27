const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const Wallet = require('../models/Wallet');
const History = require('../models/History');

router.post('/', authenticatedToken, async(req, res)=>{
    const {amount} = req.body;
    if(!amount) return res.status(400).json({message: 'Amount is required'});
    if(amount <= 0) return res.status(400).json({message: 'Amount must be greater than 0'});

    try {
        const wallet = await Wallet.findOneAndUpdate({user: req.user._id}, {$inc: {balance: amount}}, {upsert: true});
        const newBalance = wallet.balance + amount;
        if(!wallet) return res.status(404).json({message: 'Wallet Not Found'});
        const newHistory = new History({
            wallet: wallet._id,
            name: 'Add Money',
            amount,
            type: 'credit',
            date: Date.now()
        });
        await newHistory.save();
        return res.status(200).json({balance:newBalance, message: 'Money Added Successfully'});
        // if(!wallet) return res.status(404).json({message: 'Wallet Not Found'});
        // const newBalance = wallet.balance + amount;
        // wallet.balance = newBalance;
        // await wallet.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;