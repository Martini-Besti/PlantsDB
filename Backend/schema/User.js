const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  username: {
    type: String
  },
  password: {
    type: String
  },
  plants: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Plants' }
  ],
  token: {
    type: String,
  }
});

module.exports = mongoose.model("User", UserSchema);