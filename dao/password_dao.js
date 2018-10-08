const {User} = require("./model.js");
const PasswordDao = {
	update(message){
		// console.log(username);
		return User.findOneAndUpdate({username:message.username},{password:message.password});
	},
	find(obj){
		return User.find(obj);
	}
};

module.exports = PasswordDao;