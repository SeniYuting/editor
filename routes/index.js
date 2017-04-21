var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Editor-Demo' });
});

router.get('/medium_editor', function(req, res, next) {

    res.redirect('index_medium_editor');
});

module.exports = router;
