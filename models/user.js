// models/Product.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);