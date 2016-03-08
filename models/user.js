"use strict";

let mongoose = require('mongoose');

let uri = 'mongodb://localhost:27017/test';
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
    console.log('monngose connected');
});

let userSchema = new mongoose.Schema({
    name: String,
    furigana: String,
    mailAddress: String,
});

module.exports = mongoose.model('User', userSchema);
