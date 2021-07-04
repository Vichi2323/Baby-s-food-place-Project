const errorResponse = require("../lib/handlers/error-response-sender");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const successResponse = require("../lib/handlers/success-response-sender");

module.exports = {
    register: async (req, res) => {
        try {
          if (!req.body.password || req.body.password != req.body.confirmation_password) {
            return errorResponse(res, 400, 'Bad request. Passwords do not match');
          }
    
          const user = await userModel.findOne({ email: req.body.email });
          if (user) {
            return errorResponse(res, 400, 'Bad request. User exists with the provided email.');
          }
    
          req.body.password = bcrypt.hashSync(req.body.password, 12);
    
          await userModel.create(req.body);
    
          successResponse(res, 'User registered');
        } catch (error) {
          errorResponse(res, 500, error.message);
        }
      },
  login: async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return errorResponse(res, 400, 'Bad request. User with the provided email does not exist.');
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return errorResponse(res, 401, 'Bad request. Incorrect password.');
      }

      const payload = {
        id: user._id,
        email: user.email
      }

      const token = jwt.sign(payload, '3218943205PADSOKDASI(*#$U(', {
        expiresIn: '50m'
      });

      successResponse(res, 'JWT successfully generated', token);
    } catch (error) {
      errorResponse(res, 500, error.message);
    }
  },
};
