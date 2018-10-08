
const {Gongyingshang} = require("./model.js");

const GongyingshangDao={
	find(obj){
		pageCount=Number(obj.pageCount);
		// console.log(1);
		return Gongyingshang.find().limit(pageCount).skip((obj.page-1)*pageCount);
	},
	save(obj){
		// obj.create_time=new Date();
	  function getCurrentDate(format) {
		  var now = new Date();
		  var year = now.getFullYear(); //得到年份
		  var month = now.getMonth();//得到月份
		  var date = now.getDate();//得到日期
		  var day = now.getDay();//得到周几
		  var hour = now.getHours();//得到小时
		  var minu = now.getMinutes();//得到分钟
		  var sec = now.getSeconds();//得到秒
		  month = month + 1;
		  if (month < 10) month = "0" + month;
		  if (date < 10) date = "0" + date;
		  if (hour < 10) hour = "0" + hour;
		  if (minu < 10) minu = "0" + minu;
		  if (sec < 10) sec = "0" + sec;
		  var time = "";
		  //精确到天
		  if(format==1){
			time = year + "-" + month + "-" + date;
		  }
		  //精确到分
		  else if(format==2){
			time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
		  }
		  return time;
		}
		console.log(getCurrentDate(2));
		obj.create_time=getCurrentDate(2);
		return new Gongyingshang(obj).save();
	},
	findAll(){
		return Gongyingshang.find();
	},
	query(obj){
		console.log(obj);
		return Gongyingshang.find(obj);
	},
	update(obj){
		console.log(obj.no);
		return Gongyingshang.findOneAndUpdate({"no":obj.no},{$set:obj});
	},
	delete(obj){
		console.log(obj.no);
		return Gongyingshang.remove(obj);
	}
}
module.exports=GongyingshangDao;