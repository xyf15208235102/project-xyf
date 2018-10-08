function Menu(){
	this.createModel();
}
Menu.modelTemolate=` <a href="/" class="list-group-item active">主页</a>
	  <a href="/html/zhangdan.html" class="list-group-item menu-zhangdan">账单管理</a>
	  <a href="/html/gongyingshang.html" class="list-group-item menu-gongyingshang">供应商管理</a>
	  <a href="/html/zhiyuan.html" class="list-group-item menu-user" >职员管理</a>
	  <a href="/html/password.html" class="list-group-item menu-password">密码修改</a>
	  <a href="/html/exit.html" class="list-group-item menu-exit">退出系统</a>`;
$.extend(Menu.prototype,{
	createModel(){
	  	$(Menu.modelTemolate).appendTo(".list-group");
	}
})
new Menu();