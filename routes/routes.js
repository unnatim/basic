const ToDoController = require('../controllers/todo_controller');

const routes = app => {
  // @route    GET to-do
  // @desc     Get to do items
  // @access   Private
  app.get('/v1/to-do', ToDoController.get);
  // More routes can be defined here
};

module.exports = routes;
