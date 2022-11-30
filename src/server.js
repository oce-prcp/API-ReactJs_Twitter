// === import ===
const express = require("express");
const isAuthenticated = require("./middlewares/auth.middleware");
const controllers = require("./controllers/twitos.controllers");
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

// app.get("/test/:id", (req, res, next) => {
//   try {
//     if (req.params.id !== "42") {
//       res.status(401).send("Vous n'êtes pas connecté");
//       return;
//     }

//     req.pseudo = "oceane";

//     next();
//   } catch (error) {
//     res.status(500).send("Une erreur est survenue");
//   }
// });

// app.get("/", isAuthenticated, controllers.test);

// app.put("/", isAuthenticated, controllers.test);
// app.patch("/", isAuthenticated, controllers.test);

// app.delete("/", isAuthenticated, controllers.test);

// app.post("/", isAuthenticated, controllers.test);

// app.listen(3000, () => {
//   console.log("server running on port 3000");
// });

//CRUD (Create, read, update, delete)
// app.post("/todo-lists", async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const user = req.body.user;

//     if (!user) {
//       res.status(400).send("Username missing");
//       return;
//     }

//     const userExist = await TodoList.exists({ user: user });
//     if (userExist) {
//       res.status(400).send("User already have a todolist");
//       return;
//     }

//     const newTodoList = new TodoList();
//     newTodoList.user = user;
//     newTodoList.todos = [];

//     await newTodoList.save();

//     res.status(204);
//   } catch (error) {
//     res.status(500).send("Une erreur est survenue");
//   }
// });

// app.get("/todo-lists/user/:user", async (req, res, next) => {
//   try {
//     const user = req.params.user;

//     const userTodos = await TodoList.find({ user: user }, { _id: 0, todos: 1 });
//     console.log("userTodos", userTodos);
//     if (!userTodos) {
//       res.status(404).send("No user todolist found");
//       return;
//     }

//     res.status(200).json({ user: userTodos.todos });
//   } catch (error) {
//     res.status(500).send("Une erreur est survenue");
//   }
// });

// app.patch("/todo-lists/user/oceane", async (req, res, next) => {
//   try {
//     const user = req.params.user;
//     const data = req.body.todos;

//     userTodo.todos = data;
//     await userTodo.save();

//     res.status(200).json({ todos: userTodo.todos });
//   } catch (error) {
//     res.status(500).send("Une erreur est survenue");
//   }
// });

// app.delete(
//   "/todo-lists/user/:user/task/:index",
//   // Middleware
//   async (req, res, next) => {
//     try {
//       const { user, index } = req.params;

//       if (user?.length) {
//         res.status(400).send("Envoie un nom d'utilisateur non vide");
//         return;
//       }

//       if (!parseInt(index) || parseInt(index) <= -1) {
//         res.status(400).send("Envoie un index supérieur ou égal à 0");
//         return;
//       }

//       next();
//     } catch (error) {
//       res.status(500).send("Une erreur est survenue");
//     }
//   },
//   async (req, res) => {
//     try {
//       const user = req.params;

//       const userTodo = await TodoList.findOne({ user: user });
//       if (!userTodo) {
//         res.status(404).send("User don't has a todolist");
//         return;
//       }

//       userTodo.todos.splice(parseInt(index), 1);
//       await userTodo.save();

//       res.status(200).send("Todo list deleted");
//     } catch (error) {
//       res.status(500).send("Une erreur est survenue");
//     }
//   }
// );

//faire une route qui supprime tâche

// app.delete('/todo-lists/user/oceane', async (req, res, next) => {
//     try {
//         const user = req.params.user;

//     const userTodo = await TodoList.findOne({ user: user });
//         if (!userTodo) {
//             res.status(404).send("User don't has a todolist");
//             return;
//         }

//         await userTodo.remove();

//         res.status(200).send('Todo list deleted');
//     } catch (error) {
//         res.status(500).send("Une erreur est survenue");
//     }
// });
