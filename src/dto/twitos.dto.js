// === import ===
const utilisateur = require("../models/user");

// === Crée un utilisateur ===
const CreateUtilisateur = async (req, res, next) => {
  try {
    const user = req.body.user;
    if (!user) {
      res.status(400).send("Nom de l'user manquant");
      return;
      x;
    }
    const userExist = await utilisateur.exists({ username: user });
    if (userExist) {
      res.status(400).send("L'user existe déjà");
      return;
    }
    return next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};

// === Supprime un utilisateur ===
const DelUtilisateur = async (req, res, next) => {
  try {
    const user = req.user;
    const userExist = await utilisateur.exists({ username: user.username });
    if (!userExist) {
      res.status(404).send("L'utilisateur n'existe pas ");
      return;
    }
    return next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};

const dtoPatchUtilisateur = async (req, res, next) => {
  try {
    const user = req.params.user;
    const userTweeter = await User.findOne({ name: user });
    if (!userTweeter) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }

    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
  }
};

module.exports = {
  CreateUtilisateur,
  DelUtilisateur,
  dtoPatchUtilisateur,
};
