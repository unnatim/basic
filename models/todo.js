const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;  // Export the model
