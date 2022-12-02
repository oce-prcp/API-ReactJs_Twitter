// === import ===
const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const Post = new Schema({
  text: String,

  isSurvey: Boolean,
  answers: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Twito || model("Twito", Post, "twitos");
