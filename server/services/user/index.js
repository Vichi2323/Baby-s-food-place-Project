const express = require("express");
const app = express();
const user = require('./routers/user');
const jwt = require('express-jwt');
const unauthorizedErrorHandler = require('../../lib/handlers/unathorized-error-handler');
const serverStartLogger = require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config()

app.use(express.json());
app.use(jwt({
  secret: process.env.SECRET_AUTH_KEY,
  algorithms: ['HS256']
}).unless({
  path: [
    {
      url: '/api/user/login', methods: ['POST']
    },
    {
      url: '/api/user/register', methods: ['POST']
    }
  ]
}));
app.use((err, req, res, next) => unauthorizedErrorHandler(err, req, res, next));
app.use('/api/user', user);
app.listen(process.env.AUTH_API_PORT, error => serverStartLogger('User', process.env.AUTH_API_PORT, error));