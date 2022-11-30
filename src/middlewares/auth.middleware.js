// === Importation ===
const User = require("../models/User");

// === Système d'autentification ===
const isAuthenticated = async (req, res, next) => {
  try {
    const username = req.headers.username;

    if (!username) {
      res.status(401).send("Username missing");
      return;
    }

    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(401).send("User not found");
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).send("ERROR auth");
  }
};

module.exports = isAuthenticated;
