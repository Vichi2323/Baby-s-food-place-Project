var mongoose = require("mongoose");

var usersSchema = mongoose.Schema({
    first_name: {
      type: String,
      required: ['Please provide the first name of the user']
    },
    last_name: {
        type: String,
        required: ['Please provide the last name of the user']
      },
    email: {
      type: String,
      required: ['Please provide the email of the user']
    },
    password: {
      type: String,
      required: ['Please provide the password of the user']
    },
    birthday: {
        type: Date,
        required: ["Please provide birthday date!"],
    }
  });

  const userModel = mongoose.model("User", usersSchema)
  module.exports = userModel;