var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request({
    uri: 'https://rickandmortyapi.com/api/character',
    
  }).pipe(res);
});

module.exports = router;
