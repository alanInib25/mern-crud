const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    size: { type: Number },
    isProfile: { type: Boolean, default: true },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Upload", imageSchema);