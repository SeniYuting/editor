var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Editor Demo'});
});

router.get('/medium_editor', function (req, res) {
    res.render('index_medium_editor', {title: 'Medium Editor Demo'});
});

router.get('/draft', function (req, res) {
    res.render('index_draft', {title: 'Draft Demo'});
});

module.exports = router;
