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

// === CRUD (Create, read, update, delete) (routes) ===
// === Crée un utilisateur ===
app.post("/CreateUtilisateur", dto.CreateUtilisateur, controller.CreateUser);

// === Suprimer un utilisateur ===
app.delete(
  "/DelUtilisateur",
  isAuthenticated,
  dto.DelUtilisateur,
  controller.DeleteUtilisateur
);

// === Modifie un utilisateur ===
app.patch(
  "/PatchUtilisateur",
  isAuthenticated,
  dto.dtoPatchUtilisateur,
  controller.patchUtilisateur
);

// === Ecoute le port 3000 ===
app.listen(3000, () => {
  console.log("server running on port 3000");
});
