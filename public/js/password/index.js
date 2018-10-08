function Password(){
	this.init();
	this.addListenler();
}
$.extend(Password.prototype,{
	init(){
		$(".menu-password").addClass("active").siblings().removeClass("active");
	},
	addListenler(){
		$(".password-update").on("click",this.update);
	},
	update(e){
		if(!sessionStorage.loginUser){
			alert("未登录");
			return;
		}else if($("#xinmima").val() != $("#okxinmima").val()){
			alert("两次输入密码不一致");
			return;
		}else{
			// var data=$(".password-form").serialize();
			// data=decodeURIComponent(data,true);
			// console.log(data);
			const url="/api/password/update";
			var oldPassword=$("#yuanmima").val();
			var newPassword=$("#xinmima").val();
			var username=JSON.parse(sessionStorage.loginUser).username;
			console.log(username);
			// if ($("#yuanmima").val()==sessionStorage.get("password")) {
			// }
			$.post(url,{username,oldPassword,newPassword},(data)=>{
				console.log(data);
				if (data.res_code==1) {
					alert("修改成功");
					alert("登录已失效，请重新登录");
					var timer=setInterval(function(){
						sessionStorage.clear();
						
						clearInterval(timer);
						window.location.reload();
					},1000)
					
				}else if(data.res_code==0){
					alert("用户不存在");
					
					window.location.reload();
				}else if(data.res_code==2){
					alert("密码错误");
					
					window.location.reload();
				}else{
					alert("未知错误:"+data.res_err);
					
					window.location.reload();
				}

			})
			// return false;
			e.preventDefault();
		}
	}
})
new Password();