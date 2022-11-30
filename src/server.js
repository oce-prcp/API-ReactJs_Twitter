// === import ===
const express = require("express");
const isAuthenticated = require("./middlewares/auth.middleware");
const controllers = require("./controllers/twitos.controller");
const dto = require("./models/twitos.dto");

const app = express();
app.use(express.json());
require("./database/index");

// === Route raçine du projet ===
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Twitos API" });
});

// === CRUD (Create, read, update, delete) (routes) ===
// === Crée un utilisateur ===
server.post("/CreateUtilisateur", dto.CreateUtilisateur, controller.CreateUser);

// === Suprimer un utilisateur ===
server.delete(
  "/DelUtilisateur",
  isAuthenticated,
  dto.DelUtilisateur,
  controller.DeleteUtilisateur
);

// === Modifie un utilisateur ===
server.patch(
  "/PatchUtilisateur",
  isAuthenticated,
  dto.dtoPatchUtilisateur,
  controller.patchUtilisateur
);

// === Ecoute le port 3000 ===
app.listen(3000, () => {
  console.log("server running on port 3000");
});
