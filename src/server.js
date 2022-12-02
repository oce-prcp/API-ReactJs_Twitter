// === import ===
const express = require("express");
const isAuthenticated = require("./middlewares/auth.middleware");
const controllers = require("./controllers/twitos.controller");
const dto = require("./dto/twitos.dto");

const app = express();
app.use(express.json());
require("./database");

// === Route raçine du projet ===
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Twitos API" });
});

app.get("/user/:user", dto.getUser, controllers.getUser);

// === CRUD (Create, read, update, delete) (routes) ===
// === Crée un utilisateur ===
app.post("/CreateUtilisateur", dto.CreateUser, controllers.CreateUser);

// === Crée un post ===
app.post("/CreatePost/:user", dto.dtoCreatePost, controllers.CreatePost);
// === Suprimer un utilisateur ===
app.delete(
  "/DelUtilisateur/:username",
  dto.DelUtilisateur,
  controllers.DeleteUtilisateur
);

// === Modifie un utilisateur ===
app.patch(
  "/PatchUtilisateur/:username",
  dto.dtoPatchUtilisateur,
  controllers.patchUtilisateur
);

// === Ecoute le port 3000 ===
app.listen(3000, () => {
  console.log("server running on port 3000");
});
