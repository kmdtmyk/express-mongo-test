import mongoose from 'mongoose'


let schema = new mongoose.Schema({
  name: { type: String, default: ''},
})


export default mongoose.model('Project', schema)
