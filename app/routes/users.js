var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbBase = "test",
    dbColl = "lemonUser";
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/api/username', function(req, res, next) {
    var params = req.body,
        uname = params.uname;
    mongodb.find(dbBase, dbColl, params, function(result) {
        if (result.length > 0) {
            res.json({ code: 3, msg: '用户已存在!' });
        } else {
            addUser();
        }
    });

    function addUser() {
        mongodb.insert(dbBase, dbColl, params, function(result) {
            if (result) {
                res.json({ code: 0, msg: '用户登录成功!' });
            } else {
                res.json({ code: 1, msg: '用户已存在!' });
            }
        });
    }
});
module.exports = router;