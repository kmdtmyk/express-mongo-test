import mongoose from 'mongoose'


let schema = new mongoose.Schema({
  number: { type: Number },
  title: { type: String, default: ''},
  body: { type: String, default: ''},
  state: { type: String, default: ''},
});


export default mongoose.model('Issue', schema)
