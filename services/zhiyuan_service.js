const ZhiyuanDao = require("../dao/zhiyuan_dao.js");

const ZhiyuanService={
	find(req,res,next){
		const {page,pageCount}=req.body;
		console.log(typeof(page));
		console.log(typeof(pageCount));
		ZhiyuanDao.find({page,pageCount})
					.then((data)=>{
						console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}});
					})
					.catch((err)=>{
						console.log(err);
						res.json({code:err});
					})
	},
	add(req,res,next){
		const {no,name,sex,age,tel,email,quanxian}=req.body;
		console.log(name);
		ZhiyuanDao.save({no,name,sex,age,tel,email,quanxian})
					.then((data)=>{
						// console.log(1);
						// console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}});
					})
					.catch((err)=>{
						res.json({code:err});
					})
	},
	findAll(req,res,next){
		ZhiyuanDao.findAll()
					.then((data)=>{
						// console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}});
					})
					.catch((err)=>{
						console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}});
					})
	},
	query(req,res,next){
		const {name,quanxian,sex}=req.body;
		console.log(sex);
		ZhiyuanDao.query({name,quanxian,sex})
					.then((data)=>{
						console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}});
					})
					.catch((err)=>{
						console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}});
					})
	},
	update(req,res,next){
		const {no,name,sex,age,tel,email,quanxian,create_time}=req.body;
		console.log(no);
		ZhiyuanDao.update({no,name,sex,age,tel,email,quanxian,create_time})
		          	.then((data)=>{
		          		console.log(data);
		          		res.json({res_code:1,res_err:"",res_body:{data}});
		          	})
		          	.catch((err)=>{
		          		console.log(err);
		          		res.json({res_code:0,res_err:err,res_body:{}});
		          	})
	},
	delete(req,res,next){
		const {no}=req.body;
		ZhiyuanDao.delete({no})
					.then((data)=>{
						console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}})
					})
					.catch((err)=>{
						console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}})
					})
	}
}
module.exports=ZhiyuanService;