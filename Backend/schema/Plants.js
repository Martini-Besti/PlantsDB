const mongoose = require('mongoose');
const { Schema } = mongoose;

const plantSchema = Schema({

  name: String,
  watering: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }  // Reference to the user that owns the plant
});

module.exports = mongoose.model("Plants", plantSchema);
