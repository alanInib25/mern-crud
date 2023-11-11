const { Router } = require("express");
const taskRouter = Router();
const { createTaskSchema } = require("../schemas/tasks.schema");
const validateSchemaData = require("../middlewares/validateData");
const authRequired = require("../middlewares/validateToken");
const {
  listTasks,
  listTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

taskRouter.post("/tasks", authRequired, validateSchemaData(createTaskSchema), createTask);
taskRouter.get("/tasks", authRequired, listTasks);
taskRouter.get("/tasks/:id", authRequired, listTask);
taskRouter.delete("/tasks/:id", authRequired, deleteTask);
taskRouter.put("/tasks/:id", authRequired, validateSchemaData(createTaskSchema), updateTask);

module.exports = taskRouter;