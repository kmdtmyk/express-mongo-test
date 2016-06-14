"use strict";

let express = require('express');
let router = express.Router();

let User = require('../models/user');



router.get('/', (req, res) => {
  let query = req.query;
  let regexp = new RegExp(query.q);

  User
    .find({
      $or: [
        {name: regexp},
        {furigana: regexp},
        {mailAddress: regexp},
      ]
    })
    .exec((error, users) => {
      res.send(users);
    });

});



router.get('/new', (req, res) => {
  let user = new User();
  res.send(user);
});



router.get('/:id', (req, res) => {
  let id = req.params.id;

  User.findOne({_id: id}, (error, user) => {
    if(error){
      res.send(error);
    }else{
      res.send(user);
    }
  });

});



router.post('/', (req, res) => {
  let user = req.body;

  User.create(user, (error, user) => {
    if(error){
      res.send(error);
    }else{
      res.send(user);
    }
  });

});



router.patch('/:id', (req, res) => {
  let id = req.params.id;
  let user = req.body;

  User.findOneAndUpdate({_id: id}, {$set: user}, (error, user) => {
    if(error){
      res.send(error);
    }else{
      res.send(user);
    }
  });

});



router.delete('/:id', (req, res) => {
  let id = req.params.id;

  User.remove({_id: id}, (error) => {
    res.send(error);
  })

});



module.exports = router;
