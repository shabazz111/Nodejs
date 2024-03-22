const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
const todo = require("./src/routes/todo-route.js");
app.use("/api", todo);

app.use(express.static("dist"));
app.get("*.js", (req, res, next) => {
  res.type("application/javascript");
  next();
});

// Catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = app;
