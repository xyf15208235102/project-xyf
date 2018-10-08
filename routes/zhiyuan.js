var express = require('express');
var ZhiyuanService = require("../services/zhiyuan_service.js");
var router = express.Router();

router.post("/find", ZhiyuanService.find);
router.post("/add", ZhiyuanService.add);
router.post("/findAll", ZhiyuanService.findAll);
router.post("/query", ZhiyuanService.query);
router.post("/update", ZhiyuanService.update);
router.post("/delete", ZhiyuanService.delete);

module.exports = router;
