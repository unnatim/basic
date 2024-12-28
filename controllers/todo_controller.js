const ToDo = require('../models/todo');  // Assuming you have a ToDo model

// Example of a controller function
const get = async (req, res) => {
  try {
    const todos = await ToDo.find();
    const ipAddressFromHeader = req.headers?.['x-client-ip'] || "IP not set";
    const ipAddressGiven = req.headers?.['x-forwarded-for'] || "Nothing given";
    res.status(200).json({
        todos,
        ipAddressFromHeader: ipAddressFromHeader,
        ipAddressGiven: ipAddressGiven,
      });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Example of another controller function
const getById = async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'ToDo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const create = async (req, res, next) => {
    const toDoProps = req.body;
    try {
      const toDo = await ToDo.create(toDoProps);
      res.status(201).send(toDo);
    } catch (e) {
      next();
    }
  };

  const edit = async (req, res, next) => {
    const toDoId = req.params.id;
    const toDoProps = req.body;
    try {
      await ToDo.findByIdAndUpdate({ _id: toDoId }, toDoProps);
      const toDo = await ToDo.findById({ _id: toDoId });
      res.status(200).send(toDo);
    } catch (e) {
      next();
    }
  };
  
  const deleteToDo = async (req, res, next) => {
    const toDoId = req.params.id;
    try {
      const toDo = await ToDo.findByIdAndRemove({ _id: toDoId });
      res.status(204).send(toDo);
    } catch (e) {
      next();
    }
  };

// Export all controller functions
module.exports = {
  get,
  getById,
  create,
  edit,
  deleteToDo,
};
