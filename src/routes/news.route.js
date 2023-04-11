/**
 * @Kairang NodeJs 05/04/2023
 * @returns news route
 */

const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;



