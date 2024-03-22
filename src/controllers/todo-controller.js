const Todo = require("../models/todo");

exports.createNewTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await Todo.create({ title });
  res.status(201).json({
    message: "Todo Created Succesfully",
    newTodo,
  });
};




exports.getAllTodos = async (req, res) => {
    const allTodos = await Todo.find();
    res.status(200).json({
      message: "Todo listed Succesfully",
      allTodos,
    });
  };
  