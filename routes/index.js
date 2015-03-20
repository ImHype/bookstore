var express = require('express');
var router = express.Router();
var controller = require("../C");


/* GET home page. */
router.get('/', controller.index);
router.get('/recentupload',controller.recentupload);
router.get('/otherfind',controller.otherfind);
router.get('/bookarea',controller.bookarea);
router.get('/bookfriendsinfo',controller.bookfriendsinfo);

router.get('/regist',controller.regist);
router.post("/regist",controller.registform);

router.get('/login',controller.login);
router.post("/login",controller.loginform);

router.get('/logout',controller.logout);

router.get('/uploadpage',controller.upload);



module.exports = router;
