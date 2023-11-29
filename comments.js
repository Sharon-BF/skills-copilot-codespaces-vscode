// Create web server
// 1. Create web server
// 2. Get the data from the form
// 3. Save the data into the file
// 4. Redirect to the home page

var express = require('express');
var router = express.Router();
var fs = require('fs');

// 1. Create web server
router.post('/', function(req, res, next) {
  // 2. Get the data from the form
  var name = req.body.name;
  var comment = req.body.comment;

  // 3. Save the data into the file
  fs.appendFile('comments.txt', name + ': ' + comment + '\n', function(err) {
    if (err) throw err;
    console.log('Saved!');
  });

  // 4. Redirect to the home page
  res.redirect('/');
});

module.exports = router;