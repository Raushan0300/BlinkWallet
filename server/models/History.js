const mongoose = require('mongoose');

const History = new mongoose.Schema({
    wallet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    name:{
        type: String,
    },
    amount: {
        type: Number,
    },
    type: {
        type: String,
    },
    date: {
        type: Date,
    }
});

const HistoryModel = mongoose.model('History', History);

module.exports = HistoryModel;