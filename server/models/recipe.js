var mongoose = require("mongoose");

var recipesSchema = mongoose.Schema({
    recipe_title: {
      type: String,
      required: ['Please provide the recipe_title']
    },
    category: {
        type: String,
        required: ['Please provide category of the recipe']
      },
    preparation_time: {
      type: String,
      required: ['Please provide the preparation time']
    },
    no_people: {
      type: String,
      required: ['Please provide the number of people']
    },
    short_description: {
        type: String,
        required: ["Please provide the short description"],
    },
    recipe: {
      type: String,
      required: ['Please provide the recipe']
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model("Recipe", recipesSchema)
  