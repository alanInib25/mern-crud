const Task = require("../models/task.model");

//create Task
const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = await new Task({
      title,
      description,
      date,
      user: req.user.id,
    }).save();
    return res.status(200).json(newTask);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//list tasks
const listTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    return res.status(200).json(tasks);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//list task by id
const listTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = id ? await Task.findById(id) : false;
    if (!task) return res.status(404).send({ message: "Not task" });
    else return res.status(200).json(task);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//update task by id
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = id
      ? await Task.findByIdAndUpdate(id, req.body, { new: true })
      : false;
    if (!task) return res.status(404).send({ message: "Not task" });
    else return res.status(200).json(task);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

//delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = id ? await Task.findByIdAndDelete(id) : false;
    if (!task) return res.status(404).send({ message: "Not task" });
    else return res.sendStatus(204);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

module.exports = {
  listTasks,
  listTask,
  createTask,
  updateTask,
  deleteTask,
};
