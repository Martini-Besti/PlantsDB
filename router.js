// this file is for routes, end points
const express = require("express")
const router = express.Router(); 
const users = require("./Controller")

// router.get("/todos", todos.getAlltodos);
// router.post("/todos/create", todos.createTodo);
// router.get("/todos/:id", todos.getTodoById);
// router.delete("/todos/:id", todos.deleteTodo);
// router.put("/todos/:id", todos.updateTodo);

module.exports = router;

// types of requests (end points)
// get - used to retrieve data
// post - create a new todo data
// put - update exisiting data
// delete - deletes data