import mongoose from 'mongoose'


let schema = new mongoose.Schema({
  name: { type: String, unique: true },
  number: { type: Number },
})


export default mongoose.model('Sequence', schema)
