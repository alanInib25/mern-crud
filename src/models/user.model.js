const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email:{
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true, 
    versionKey: false
  }
);

module.exports = mongoose.model("User", userSchema);