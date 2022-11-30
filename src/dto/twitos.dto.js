// === import ===
const utilisateur = require("../Models/Utilisateur");

// === Crée un utilisateur ===
const CreateUtilisateur = async (req, res, next) => {
  try {
    const user = req.body.user;
    if (!user) {
      res.status(400).send("Nom de l'user manquant");
      return;
    }
    const userExist = await utilisateur.exists({ username: user });
    if (userExist) {
      res.status(400).send("L'user exist déja");
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
      res.status(404).send("L'utilisateur existe pas ");
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
