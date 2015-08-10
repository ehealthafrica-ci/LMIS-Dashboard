'use strict';

var express = require('express');
var controller = require('./app_config.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/all', auth.isAuthenticated(), controller.all);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.isAuthenticated(), controller.put);
module.exports = router;
