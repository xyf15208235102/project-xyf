const PasswordDao = require("../dao/password_dao.js");

const PasswordService={
	update(req,res,next){
		const {username,oldPassword,newPassword}=req.body;
		var message={username,password:newPassword};
		PasswordDao.find({username})
					.then((data)=>{
						console.log(data);
						if (data[0].password==oldPassword) {
							// console.log(1);
							console.log(message);
							PasswordDao.update(message)
										.then((data)=>{
											// console.log(11);
											console.log(data);
											// res.json({res_code:1,res_err:"",res_body:{data}});
											PasswordDao.find({username})
														.then((data)=>{
															console.log(data);
															res.json({res_code:1,res_err:"",res_body:{data}});
														})
														.catch((err)=>{
															console.log(err);
															res.json({res_code:3,res_err:err,res_body:{}});
														})
										})
										.catch((err)=>{
											// console.log(0);
											console.log(err);
											res.json({res_code:3,res_err:err,res_body:{}});
										})
						}else{
							res.json({res_code:2,res_err:"",res_body:{}});
						}
						
					})
					.catch((err)=>{
						// console.log(2);
						console.log(err);
						res.json({res_code:0,res_err:err,res_body:{}});
					})
	}
}


module.exports=PasswordService;