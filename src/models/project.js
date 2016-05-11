"use strict";

let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, default: ''},
});

module.exports = mongoose.model('Project', schema);
