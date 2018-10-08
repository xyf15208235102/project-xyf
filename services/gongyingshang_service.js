const GongyingshangDao = require("../dao/gongyingshang_dao.js");

const GongyingshangService={
	find(req,res,next){
		const {page,pageCount}=req.body;
		console.log(typeof(page));
		console.log(typeof(pageCount));
		GongyingshangDao.find({page,pageCount})
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
		const {no,company,name,tel,address}=req.body;
		console.log(name);
		GongyingshangDao.save({no,company,name,tel,address})
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
		GongyingshangDao.findAll()
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
		const {company}=req.body;
		console.log(company);
		GongyingshangDao.query({company})
					.then((data)=>{
						// console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}});
					})
					.catch((err)=>{
						// console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}});
					})
	},
	update(req,res,next){
		const {no,company,name,tel,address}=req.body;
		console.log(no);
		GongyingshangDao.update({no,company,name,tel,address})
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
		console.log(no);
		GongyingshangDao.delete({no})
					.then((data)=>{
						// console.log(data);
						res.json({res_code:1,res_err:"",res_body:{data}})
					})
					.catch((err)=>{
						// console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}})
					})
	}
}
module.exports=GongyingshangService;