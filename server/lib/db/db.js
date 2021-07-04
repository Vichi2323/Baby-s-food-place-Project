const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://babysFoodUser:${process.env.MONGO_DB_PASS}@babysfood.9elkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

