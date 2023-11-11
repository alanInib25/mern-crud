const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 20,
    },
    description: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 200,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);


module.exports = mongoose.model("Task", taskSchema);