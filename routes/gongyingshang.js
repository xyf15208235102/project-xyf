var express = require('express');
var GongyingshangService = require("../services/gongyingshang_service.js");
var router = express.Router();

router.post("/find", GongyingshangService.find);
router.post("/add", GongyingshangService.add);
router.post("/findAll", GongyingshangService.findAll);
router.post("/query", GongyingshangService.query);
router.post("/update", GongyingshangService.update);
router.post("/delete", GongyingshangService.delete);

module.exports = router;
