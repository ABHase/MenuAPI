'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true    
  },
  course: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  }
});

module.exports = mongoose.model('Dish', DishSchema);