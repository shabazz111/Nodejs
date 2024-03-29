const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());

const todo = require("./src/routes/todo-route.js");
const user = require("./src/routes/user-routes.js");
const adminUser = require("./src/routes/admin-user-routes.js");
const productUser = require("./src/routes/product-routes.js");

app.use("/api", todo);
app.use("/api", user);
app.use("/api", adminUser);
app.use("/api", productUser);


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
