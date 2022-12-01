// === import ===
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
