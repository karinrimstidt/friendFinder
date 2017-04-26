var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

//associating files with extentions
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

router.get('/questions', function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
});


//make router accessible to server
module.exports = router;