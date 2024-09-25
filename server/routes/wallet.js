const express = require('express');

const router = express.Router();

const Wallet = require('../models/Wallet');

router.get('/', async(req, res)=>{
    const {token} = req.headers;
})