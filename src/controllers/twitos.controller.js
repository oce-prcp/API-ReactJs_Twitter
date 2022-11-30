// === import ===
const UtilisateurSchema = require("../models/user.js");
const PostSchema = require("../models/twito.js");
const SondageSchema = require("../models/twitosAnswer.js");
const Utilisateur = require("../models/user.js");

// === Crée un utlisateur ===
const CreateUser = async (req, res) => {
  try {
    const user = req.body.user;
    const Utilisateur = new UtilisateurSchema();
    Utilisateur.username = user;
    await Utilisateur.save();
    res.status(200).send("utilisateur crée");
  } catch (error) {
    console.log(error);
    res.status(404).send("Erreur...");
  }
};
// === Crée un model vide de post ===
const CreatePost = async (req, res) => {
  try {
    const Post = new PostSchema();
    await Post.save();
    res.status(200).send("Le post à bien été envoyé");
  } catch (error) {
    res.status(404).send("Erreur...");
  }
};

// === Crée un model vide de sondage ===
const CreateSondage = async (req, res) => {
  try {
    const Sondage = new SondageSchema();
    await Sondage.save();
    res.status(200).send("Le sondage à bien été envoyé");
  } catch (error) {
    res.status(404).send("Erreur...");
  }
};

// === Supprimer un utlisateur ===
const DeleteUtilisateur = async (req, res) => {
  try {
    const user = req.user;
    await user.remove();
    res.status(200).send("L'utilisateur est supprimé");
    return;
  } catch (error) {
    console.log(error);
    res.status(404).send("Erreur...");
  }
};

const patchUtilisateur = async (req, res) => {
  try {
    const user = req.params.username;
    const data = req.body.username;
    const userTweeter = await Utilisateur.findOne({ name: user });

    userTweeter.name = data;

    await userTweeter.save();
    res.status(200).json({ name: userTweeter.name });
  } catch (error) {
    console.log(error);
    res.status(500).send("une erreur est survenue");
  }
};

module.exports = {
  CreateSondage,
  CreatePost,
  CreateUser,
  DeleteUtilisateur,
  patchUtilisateur,
};
