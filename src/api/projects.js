import express from 'express'

import Project from '../models/project'


let router = express.Router()


router.get('/', (req, res) => {

  Project
    .find({})
    .exec((error, projects) => {
      res.send(projects)
    })

})



router.get('/new', (req, res) => {
  let project = new Project()
  res.send(project)
})



router.get('/:id', (req, res) => {
  let id = req.params.id
  Project.findOne({_id: id}, (error, project) => {
    if(error){
      res.send(error)
    }else{
      res.send(project)
    }
  })
})



router.post('/', (req, res) => {
  let project = req.body
  Project.create(project, (error, project) => {
    if(error){
      res.send(error)
    }else{
      res.send(project)
    }
  })

})



router.patch('/:id', (req, res) => {
  let id = req.params.id
  let project = req.body

  Project.findOneAndUpdate({_id: id}, {$set: project}, (error, project) => {
    if(error){
      res.send(error)
    }else{
      res.send(project)
    }
  })

})



router.delete('/:id', (req, res) => {
  let id = req.params.id
  Project.remove({_id: id}, (error) => {
    res.send(error)
  })
});



export default router
