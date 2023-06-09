/**
 * @Kairang NodeJs 05/04/2023
 * @returns home and login route
 */

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/login', siteController.login);
router.get('/', siteController.index);

module.exports = router;