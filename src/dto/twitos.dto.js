// === import ===
const utilisateur = require("../models/user");

// === Crée un utilisateur ===
const CreateUser = async (req, res, next) => {
  try {
    const user = req.body.user;
    if (!user) {
      res.status(400).send("Nom de l'user manquant");
      return;
    }
    const userExist = await utilisateur.exists({ name: user });
    if (userExist) {
      res.status(400).send("L'user existe déjà");
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = req.params.user;
    const userTweeter = await utilisateur.findOne(
      { name: user },
      { _id: 0, __v: 0 }
    );
    if (!user) {
      res.status(404).send("L'utilisateur n'existe pas");
      return;
    }
    if (!userTweeter) {
      console.log(userTweeter);
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};

// === Supprime un utilisateur ===
const DelUtilisateur = async (req, res, next) => {
  try {
    const user = req.params.username;
    const userExist = await utilisateur.exists({ name: user });
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé");
      return;
    }
    if (!userExist) {
      res.status(404).send("L'utilisateur n'existe pas ");
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Une erreur est survenue...");
  }
};

const dtoPatchUtilisateur = async (req, res, next) => {
  try {
    const user = req.params.username;
    const userTweeter = await utilisateur.findOne({ name: user });
    if (!userTweeter) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }

    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
  }
};

// === Crée un poste ===
const dtoCreatePost = async (req, res, next) => {
  try {
    const user = req.params.user;
    const text = req.body.text;
    const isSurvey = req.body.isSurvey;
    const userTweeter = await utilisateur.findOne({ name: user });
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    if (!text) {
      res.status(404).send("Texte pas trouvé ");
      return;
    }
    if (isSurvey !== true && isSurvey !== false) {
      res.status(404).send("isSurvey pas trouvé ");
      return;
    }
    if (!userTweeter) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
  }
};

// === Supprimer un poste ===
const dtoDelPost = async (req, res, next) => {
  try {
    const user = req.params.username;
    const id = req.params.id;
    const userTweeter = await utilisateur.findOne({ name: user });
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    if (!id) {
      res.status(404).send("id pas trouvé ");
      return;
    }
    if (!userTweeter) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
  }
};

const dtoPatchPost = async (req, res, next) => {
  try {
    const user = req.params.username;
    const id = req.params.id;
    const userTweeter = await utilisateur.findOne({ name: user });
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    if (!id) {
      res.status(404).send("id pas trouvé ");
      return;
    }
    if (!userTweeter) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
  }
};

// === Crée un sondage ===
const CreateSondage = async (req, res, next) => {
  try {
    const user = req.params.user;
    const text = req.body.text;
    const isSurvey = req.body.isSurvey;
    const userTweeter = await utilisateur.findOne({ name: user });
    if (!user) {
      res.status(404).send("Utilisateur pas trouvé ");
      return;
    }
    if (!text) {
      res.status(404).send("Texte pas trouvé ");
      return;
    }
    if (isSurvey !== true && isSurvey !== false) {
      res.status(404).send("isSurvey pas trouvé ");
      return;
    }
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
  CreateUser,
  DelUtilisateur,
  getUser,
  dtoPatchUtilisateur,
  dtoCreatePost,
  dtoDelPost,
  dtoPatchPost,
  CreateSondage,
};
