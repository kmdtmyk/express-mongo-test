import mongoose from 'mongoose'
import Sequence from './sequence'


let schema = new mongoose.Schema({
  number: { type: Number },
  title: { type: String, default: ''},
  body: { type: String, default: ''},
  state: { type: String, default: ''},
});


schema.pre('save', function(next){
  if(!this.isNew){
    next()
    return
  }

  Sequence.getNextNumber('Issue', (err, res) => {
    this.number = res.number
    next()
  })
})

export default mongoose.model('Issue', schema)
