const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: String,
    phone: String,
});

const UsersModel = mongoose.model('Users', Users);

module.exports = UsersModel;