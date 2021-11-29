'use strict';

const express = require('express');
const router = express.Router();
const {
  searchJobs
} = require('../controllers/jobs.controller');

router.get('/search', searchJobs);

module.exports = router;