/* 注册-模态框 */
function RegisterModal() {
	this.createDom();
	this.addListener();
}

// 模态框DOM节点模板
RegisterModal.modalTemplate = `<div class="modal fade" id="regModal" tabindex="-1" role="dialog">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">用户注册</h4>
	      </div>
	      <div class="modal-body">
	      	<div class="alert alert-danger hidden reg-error">用户注册失败，请稍后重试</div>
	        <form class="reg-form">
			  <div class="form-group">
			    <label for="regUsername">用户名</label>
			    <input type="text" class="form-control" name="username" id="regUsername" placeholder="请输入用户名">
			  </div>
			  <div class="form-group">
			    <label for="regPassword">密码</label>
			    <input type="password" class="form-control" name="password" id="regPassword" placeholder="请输入密码">
			  </div>
			  <div class="form-group">
			    <label for="regEmail">Email</label>
			    <input type="email" class="form-control" name="email" id="regEmail" placeholder="请输入 Email">
			  </div>
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary btn-register">注册</button>
	      </div>
	    </div>
	  </div>
	</div>`;

$.extend(RegisterModal.prototype, {
	// 创建DOM节点
	createDom() {
		$(RegisterModal.modalTemplate).appendTo("body");
	},
	// 注册事件监听
	addListener() {
		$(".btn-register").on("click", this.registerHandler);
	},
	// 处理注册
	registerHandler() {
		const url = "/api/user/register", // URL
			data = $(".reg-form").serialize(); // 向服务器提交的数据
		// console.log(data);
		$.post(url, data, (data)=>{
			console.log(data);
			// 处理响应数据
			if (data.res_code === 1) { // 注册成功，即登录成功
				// 将注册成功的用户信息保存到 sessionStorage 中
				sessionStorage.loginUser = JSON.stringify(data.res_body.data);
				// 刷新页面
				window.location.reload();
			} else { // 注册失败
				$(".reg-error").removeClass("hidden");
			}
		});
	}
});
