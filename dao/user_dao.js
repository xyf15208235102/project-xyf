/* 用户DAO数据访问 */
const {User} = require("./model.js");

const UserDao = {
	save(obj) { // 保存用户信息
		obj.level = "VIP0";
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
		obj.create_time=getCurrentDate(2);
		return new User(obj).save();
	},
	// update(condition, userinfo) { // 更新用户信息

	// },
	remove(condition) { // 删除用户信息

	},
	find(condition) { // 查找用户信息
		return User.find(condition);
	}
};

module.exports = UserDao;