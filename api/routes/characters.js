var express = require('express');
var router = express.Router();
var request = require('request');

/* GET character listing. */
router.get('/', function(req, res, next) {
  let page = req.query.page;
  console.log(page);
  request({
    uri: 'https://rickandmortyapi.com/api/character?page=' + page,
    
  }).pipe(res);
});

module.exports = router;
