"use strict";

let mongoose = require('mongoose');

let uri = 'mongodb://localhost:27017/test';
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
    console.log('monngose connected');
});

let userSchema = new mongoose.Schema({
    name: { type: String, default: ''},
    furigana: { type: String, default: ''},
    mailAddress: { type: String, default: ''},
});

module.exports = mongoose.model('User', userSchema);
