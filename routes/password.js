var express = require('express');
var PasswordService = require("../services/password_service.js");
var router = express.Router();


// 注册
router.post("/update", PasswordService.update);

module.exports = router;
