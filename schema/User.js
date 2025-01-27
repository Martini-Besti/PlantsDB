const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String
  },
  Password: {
    type: String
  },
  Plants: {
    type: Array
  },
  token: {
    type: String,
  }
});

module.exports = mongoose.model("User", UserSchema);
