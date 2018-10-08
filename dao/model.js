// 引入 mongoose
const mongoose = require("mongoose");

// 连接 mongodb 数据库
mongoose.connect('mongodb://localhost/proj_1805');

// 创建用户Schema、职位Schema
const userSchema = new mongoose.Schema({
	username : String,
	password : String,
	email : String,
	level : String,
	reg_time : String
});
const positionSchema = new mongoose.Schema({
	name : String,
	company : String,
	logo : String,
	salary : Number,
	address : String,
	publish_time: String
});
const zhangdanSchema = new mongoose.Schema({
	no : Number,
	name : String,
	danwei : String,
	gongyingshang: String,
	count : Number,
	salary : Number,
	fukuan : String,
	create_time: String
});
const zhiyuanSchema = new mongoose.Schema({
	no : Number,
	name : String,
	sex : String,
	age: Number,
	tel: Number,
	email: String,
	quanxian: String,
	create_time: String
});
const gongyingshangSchema = new mongoose.Schema({
	no : Number,
	company : String,
	name : String,
	tel: Number,
	address: String,
	create_time: String
});

// 根据用户Schema创建用户模型
const User = mongoose.model("user", userSchema);
// 根据职位Schema创建职位模型
const Position = mongoose.model("position", positionSchema);
const Zhangdan = mongoose.model("zhangdan", zhangdanSchema);
const Zhiyuan = mongoose.model("zhiyuan", zhiyuanSchema);
const Gongyingshang = mongoose.model("gongyingshang", gongyingshangSchema);
module.exports = {User, Position,Zhangdan,Zhiyuan,Gongyingshang};