const express = require('express');
const router = express.Router();
const { pageTitle, pageContent } = require('../models/index.js');

router.get('/', (req, res) => {
  res.render('index', { title: pageTitle, content: pageContent });
});

module.exports = router;