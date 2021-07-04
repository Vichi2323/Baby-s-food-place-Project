const express = require('express');
const router = express.Router();
const recipesController = require('../../../controllers/recipes');

router.get('/', recipesController.fetchAll)
      .post('/', recipesController.create)

module.exports = router;