"use strict";

let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, default: ''},
    furigana: { type: String, default: ''},
    mailAddress: { type: String, default: ''},
});

module.exports = mongoose.model('User', schema);
