function sliderliactive(obj){
	$(".slider li").attr('class','');
	obj.className = 'active';
}
$(function(){
	$(".slider li").click(function(){
		sliderliactive(this);
	});
});