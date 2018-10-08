function Gongyingshang(){
	this.init();
	this.addListenler();
}
$.extend(Gongyingshang.prototype,{
	init(){
		$(".menu-gongyingshang").addClass("active").siblings().removeClass("active");
		this.loadByPage();
		this.loadPage();
	},
	addListenler(){
		$(".btn-add-gongyingshang").on("click",this.addGongyingshang);
		$(".pagination").on("click","a",this.loadByPageHandler.bind(this));
		$(".btn-query").on("click",this.query);
		$(".tbody-gongyingshang").on("click",".btn-update",this.updateInit);
		$(".btn-update-gongyingshang").on("click",this.update);
		$(".tbody-gongyingshang").on("click","#btn-deletee",this.delete);
	},
	addGongyingshang(){
		var data=$(".add-gongyingshang-form").serialize();
		data=decodeURIComponent(data,true);
		console.log(data);
		const url="/api/gongyingshang/add";
		$.post(url,data,(data)=>{
			// console.log(111);
			console.log(data);
			if (data.res_code) {
				alert("添加成功");
				window.location.reload();
			}else{
				alert("添加失败");
			}
		})
	},
	loadByPage(page){
		page=page || 1;
		const url="/api/gongyingshang/find";
		var data={page,pageCount:5};
		$.ajax({
			"method":"post",
			"url":url,
			"data":data,
			"asyn":false,
			success:function(data){
				console.log(data);
				var html="";
				data.res_body.data.forEach((curr,index)=>{
					 html+=`<tr>
						<td>${curr.no}</td>
						<td>${curr.company}</td>
						<td>${curr.name}</td>
						<td>${curr.tel}</td>
						<td>${curr.address}</td>
						<td>${curr.create_time}</td>
						<td><a href="#" data-toggle="modal" data-target="#updateGongyingshangModal" class="btn-update">修改</a> <a href="#" id="btn-deletee">删除</a></td>
					</tr>`;
				});
				$(".tbody-gongyingshang").html(html);
				
			}
		})
	},
	loadPage(){
		const url="/api/gongyingshang/findAll";
		$.post(url,(data)=>{
			console.log(data.res_body.data);
			var html="";
			var len=Math.ceil(data.res_body.data.length/5);
			for (var i = 0; i < len; i++) {
				html+=`<li><a href="javascript:;">${i+1}</a></li>`;
			}
			$(".pagination").html(html);
			// $(html).insertAfter(".prev").eq(0).addClass("active")
		})
	},
	loadByPageHandler(e){
		var src=e.target;
		// console.log($(src).html());
		var page=$(src).html();
		// console.log(this);
		this.loadByPage(page);
	},
	query(){
		var data=$(".query-form").serialize();
		data=decodeURIComponent(data,true);
		console.log(data);
		// console.log(111);
		
		const url="/api/gongyingshang/query";
		$.post(url,data,(data)=>{
			console.log(data);
			// console.log(data);
			var html="";
			data.res_body.data.forEach((curr,index)=>{
				 html+=`<tr>
						<td>${curr.no}</td>
						<td>${curr.company}</td>
						<td>${curr.name}</td>
						<td>${curr.tel}</td>
						<td>${curr.address}</td>
						<td>${curr.create_time}</td>
						<td><a href="#" data-toggle="modal" data-target="#updateGongyingshangModal" class="btn-update">修改</a> <a href="#" id="btn-deletee">删除</a></td>
					</tr>`;
			})
			$(".tbody-gongyingshang").html(html);
			var str="";
			var len=Math.ceil(data.res_body.data.length/5);
			for (var i = 0; i < len; i++) {
				str+=`<li><a href="javascript:;">${i+1}</a></li>`;
			}
			$(".pagination").html(str);
			
		})
		return false;
	},
	updateInit(event){
		console.log(1);
		var src=event.target;
		var dom=$(src).parent().parent().children();
		// console.log(dom);
		$("#updateGongyingshangNo").val(dom.eq(0).html());
		$("#updateGongyingshangCompany").val(dom.eq(1).html());
		$("#updateGongyingshangName").val(dom.eq(2).html());
		$("#updateGongyingshangTel").val(dom.eq(3).html());
		$("#updateGongyingshangAddress").val(dom.eq(4).html());
		$("#updateGongyingshangCreateTime").val(dom.eq(5).html());
		
	},
	update(){
		var data=$(".update-gongyingshang-form").serialize();
		data=decodeURIComponent(data,true);
		console.log(data);
		// var aaa=8;
		// data=data+"&price="+aaa;
		// console.log(data);
		const url="/api/gongyingshang/update";
		$.post(url,data,(data)=>{
			console.log(data);
			if (data.res_code) {
				alert("修改成功");
				window.location.reload();
			}else{
				alert("修改失败");
			}
			
		})
	},
	delete(event){
		var src=event.target;
		// console.log(1111);
		var data=$(src).parent().parent().children().eq(0).html();
		console.log(data);
		const url="/api/gongyingshang/delete";
		$.post(url,{no:data},(data)=>{
			console.log(data);
			if (data.res_code) {
				alert("删除成功");
				window.location.reload();
			}else{
				alert("删除失败");
			}
		})
	}
})
new Gongyingshang();