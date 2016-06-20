"use strict";

let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  number: { type: Number, unique: true },
  title: { type: String, default: ''},
  body: { type: String, default: ''},
  state: { type: String, default: ''},
});

module.exports = mongoose.model('Issue', schema);
