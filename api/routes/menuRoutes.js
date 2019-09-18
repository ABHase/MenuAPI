'use strict';
module.exports = function(app) {
  var menu = require('../controllers/menuController');

  // menu Routes
  app.route('/dish')
    .get(menu.list_all_dish)
    .post(menu.create_a_dish);


  app.route('/dish/:dishId')
    .get(menu.read_a_dish)
    .put(menu.update_a_dish)
    .delete(menu.delete_a_dish);
};