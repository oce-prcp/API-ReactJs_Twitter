// === import ===
const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const todolistSchema = new Schema({
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

module.exports =
  mongoose.models.TwitoAnswer ||
  model("TwitoAnswer", todolistSchema, "twitosanswers");
