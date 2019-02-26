var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbBase = "test",
    dbColl = "lemonUser";
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;