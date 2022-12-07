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

// === Crée un sondage ===
app.post("/CreateSondage/:user", dto.CreateSondage, controllers.CreateSondage);

// === Suprimer un utilisateur ===
app.delete(
  "/DelUtilisateur/:username",
  dto.DelUtilisateur,
  controllers.DeleteUtilisateur
);

// === Suprimer un post ===
app.delete("/DelPost/:username/:id", dto.dtoDelPost, controllers.DeletePost);

// === Modifie un utilisateur ===
app.patch(
  "/PatchUtilisateur/:username",
  dto.dtoPatchUtilisateur,
  controllers.patchUtilisateur
);

// === Modifie un post ===
app.patch("/PatchPost/:username/:id", dto.dtoPatchPost, controllers.patchPost);

// === Ecoute le port 3000 ===
app.listen(3000, () => {
  console.log("server running on port 3000");
});
