import mongoose from 'mongoose'


let schema = new mongoose.Schema({
  name: { type: String, default: ''},
  furigana: { type: String, default: ''},
  mailAddress: { type: String, default: ''},
})


export default mongoose.model('User', schema)
