// === import ===
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("user", todolistSchema, "user");
