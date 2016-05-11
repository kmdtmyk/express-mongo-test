"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, default: ''},
    furigana: { type: String, default: ''},
    mailAddress: { type: String, default: ''},
});

module.exports = mongoose.model('User', userSchema);
