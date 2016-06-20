"use strict";

let express = require('express');
let router = express.Router();

let Issue = require('../models/issue');



router.get('/', (req, res) => {
  let query = req.query;
  let regexp = new RegExp(query.q);

  Issue
    .find({
      $or: [
        {title: regexp},
      ]
    })
    .exec((error, issues) => {
      res.send(issues);
    });

});



router.get('/new', (req, res) => {
  let issue = new Issue();
  res.send(issue);
});



router.get('/:id', (req, res) => {
  let id = req.params.id;

  Issue.findOne({_id: id}, (error, issue) => {
    if(error){
      res.send(error);
    }else{
      res.send(issue);
    }
  });

});



router.post('/', (req, res) => {
  let issue = req.body;

  Issue.create(issue, (error, issue) => {
    if(error){
      res.send(error);
    }else{
      res.send(issue);
    }
  });

});



router.patch('/:id', (req, res) => {
  let id = req.params.id;
  let issue = req.body;

  Issue.findOneAndUpdate({_id: id}, {$set: issue}, {upsert: true}, (error, user) => {
    if(error){
      res.send(error);
    }else{
      res.send(issue);
    }
  });

});



router.delete('/:id', (req, res) => {
  let id = req.params.id;

  Issue.remove({_id: id}, (error) => {
    res.send(error);
  })

});



module.exports = router;
