var express = require('express');
var router = express.Router();
var u = require('../C/users');
/* GET users listing. */
router.get('/:userid', u.usercenter);
router.get('/:userid/mystore', u.userstore);
router.post('/:userid/mystore', u.userstoreform);
router.get('/:userid/info', u.userinfo);
router.post('/:userid/info', u.userinfoform);
router.get('/:userid/tongzhi', u.usertongzhi);
router.get('/:userid/psw', u.userpsw);
router.post('/:userid/psw', u.userpswform);

module.exports = router;
