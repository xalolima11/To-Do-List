const express = require("express");
const ToDoController = require("../controllers/taskController");
const router = express.Router();

router.post("/", ToDoController.createTask);

router.get("/", ToDoController.getAllTasks);

router.patch("/:id", ToDoController.markTaskCompleted);

router.delete("/:id", ToDoController.deleteTask);

module.exports = router;
