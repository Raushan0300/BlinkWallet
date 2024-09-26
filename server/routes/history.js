const express = require('express');

const router = express.Router();

const {authenticatedToken} = require('../controller/authenticatedToken');

const History = require('../models/History');
const Wallet = require('../models/Wallet');

router.get("/", authenticatedToken, async(req, res)=>{
    try {
        const wallet = await Wallet.findOne({user: req.user._id});
        if(!wallet) return res.status(404).json({message: 'Wallet Not Found'});

        const history = await History.find({wallet: wallet._id});
        if(!history) return res.status(200).json({count:0 ,message: 'History Not Found'});
        res.status(200).json({count: history.length, history});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;