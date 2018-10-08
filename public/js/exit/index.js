function Exit(){
	this.init();
}
$.extend(Exit.prototype,{
	init(){
		$(".menu-exit").addClass("active").siblings().removeClass("active");
	}
})
new Exit();
