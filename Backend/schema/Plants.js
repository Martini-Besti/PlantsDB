
const mongoose = require("mongoose");
const { Schema } = mongoose;

const plantSchema = Schema({
  name: String,
  watering: Number, // Frequency of watering in days
  lastWatered: { type: Date }, // Track last watered date
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Plants", plantSchema);