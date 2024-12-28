const ToDo = require('../models/todo');  // Assuming you have a ToDo model

// Example of a controller function
const get = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
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

// Export all controller functions
module.exports = {
  get,
  getById,
  create,
  edit,
  deleteToDo,
};
