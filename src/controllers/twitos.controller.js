// === import ===
const utilisateur = require("../models/user.js");
const PostSchema = require("../models/twito.js");
const SondageSchema = require("../models/twitosAnswer.js");

// === Crée un utilisateur ===
const CreateUser = async (req, res) => {
  try {
    const user = req.body.user;
    const Utilisateur = new utilisateur();
    Utilisateur.name = user;
    await Utilisateur.save();
    res.status(200).send("utilisateur crée");
  } catch (error) {
    console.log(error);
    res.status(404).send("erreur");
  }
};

// === Récupère un utilisateur ===
const getUser = async (req, res, next) => {
  try {
    const user = req.params.user;
    const userTweeter = await utilisateur.findOne({ name: user });
    res.status(200).json({ name: userTweeter.name });
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};
// === Crée un model vide de post ===
const CreatePost = async (req, res) => {
  try {
    const user = req.params.user;
    const text = req.body.text;
    const isSurvey = req.body.isSurvey;
    const userTweeter = await utilisateur.findOne({ name: user });
    const Post = new PostSchema({
      user: userTweeter._id,
      text: text,
      isSurvey: isSurvey,
    });
    Post.user = userTweeter._id;
    await Post.save();
    res.status(200).send("Le post à bien été envoyé");
  } catch (error) {
    res.status(404).send("erreur");
  }
};

// === Supprimer un utlisateur ===
const DeleteUtilisateur = async (req, res) => {
  try {
    const user = req.params.username;
    const userTweeter = await utilisateur.findOne({ name: user });
    await userTweeter.remove();
    res.status(200).send("L'utilisateur est supprimé");
    return;
  } catch (error) {
    console.log(error);
    res.status(404).send("erreur");
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

// === Supprimer un twito ===
const DeletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostSchema.findById(id);
    await post.remove();
    res.status(200).send("Le post est supprimé");
    return;
  } catch (error) {
    console.log(error);
    res.status(404).send("erreur");
  }
};

const patchPost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body.text;
    const post = await PostSchema.findById(id);
    post.text = data;
    await post.save();
    res.status(200).json({ text: post.text });
  } catch (error) {
    console.log(error);
    res.status(500).send("une erreur est survenue");
  }
};

// === Crée un sondage ===
const CreateSondage = async (req, res) => {
  try {
    const user = req.params.user;
    const text = req.body.text;
    const isSurvey = req.body.isSurvey;
    const userTweeter = await utilisateur.findOne({ name: user });
    const Post = new PostSchema({
      user: userTweeter._id,
      text: text,
      isSurvey: isSurvey,
    });
    Post.user = userTweeter._id;
    await Post.save();
    res.status(200).send("Le post à bien été envoyé");
  } catch (error) {
    res.status(404).send("erreur");
  }
};

module.exports = {
  CreateSondage,
  CreatePost,
  CreateUser,
  getUser,
  DeleteUtilisateur,
  patchUtilisateur,
  DeletePost,
  patchPost,
  CreateSondage,
};
