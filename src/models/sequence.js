"use strict";

let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  name: { type: String, unique: true },
  number: { type: Number },
});

module.exports = mongoose.model('Sequence', schema);
