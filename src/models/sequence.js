import mongoose from 'mongoose'


let schema = new mongoose.Schema({
  name: { type: String },
  number: { type: Number },
})

schema.statics.getNextNumber = function(name, callback){

  let doc = this.findOneAndUpdate(
    { name },
    { $inc:  { number: 1 } },
    { upsert: true, new: true, setDefaultsOnInsert: true },
    (err, res) => {
      callback(err, res)
    }
  )

}

let Sequence = mongoose.model('Sequence', schema)

export default Sequence
