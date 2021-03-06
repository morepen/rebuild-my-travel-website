var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// 获取登陆页
router.get('/',checkNotLogin,function (req,res,next) {
    res.send(req.flash());
})

// 用户登录
router.post('/',checkNotLogin,function (req,res,next) {
    res.send(req.flash());
})

module.exports = router;