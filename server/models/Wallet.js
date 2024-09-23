const mongoose = require('mongoose');

const Wallet = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    balance: {
        type: Number,
        default: 0
    }
});

const WalletModel = mongoose.model('Wallet', Wallet);

module.exports = WalletModel;