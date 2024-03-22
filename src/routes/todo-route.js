const express = require("express");
const { createNewTodo, getAllTodos } = require("../controllers/todo-controller");
const router = express.Router();


router.post('/newtodo',createNewTodo)
router.get('/alltodos',getAllTodos)

module.exports = router