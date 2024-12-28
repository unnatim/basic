const ToDoController = require('../controllers/todo_controller');  // Ensure this path is correct

const routes = app => {
  // Make sure these controller methods exist and are correctly exported

  // @route    GET to-do
  // @desc     Get all to do items
  // @access   Private
  app.get('/v1/to-do', ToDoController.get);  // Ensure ToDoController.get is a function

  // @route    GET to-do/:id
  // @desc     Get single to do item
  // @access   Private
  app.get('/v1/to-do/:id', ToDoController.getById);

  // @route    POST to-do
  // @desc     Create to do item
  // @access   Private
  app.post('/v1/to-do', ToDoController.create);

  // @route    PUT to-do/:id
  // @desc     Edit to do item
  // @access   Private
  app.put('/v1/to-do/:id', ToDoController.edit);

  // @route    DELETE to-do/:id
  // @desc     Delete to do item
  // @access   Private
  app.delete('/v1/to-do/:id', ToDoController.deleteToDo);
};

module.exports = routes;
