var Openbtn = $(".openbtn i");
var aUsebtn = $(".icon-ok");

$(Openbtn).click(function(){
	if($(this).attr("class")=="icon-plus"){
		$(this).attr("class","icon-minus");

		$(this).parent().parent().css("background","#f2f2f2").next().find(".another_table").show();
	}else{
		$(this).attr("class","icon-plus");
		$(this).parent().parent().css("background","").next().find(".another_table").hide();
	}
});
$(aUsebtn).click(function(){
	if($(this).data("use")==true)
	{
		$(this).data("use",false).css("color","#ccc");
	}else{
		$(this).data("use",true).css("color","#000");
	}
});

$(function(){
	$(".navbar_toggle").click(function(){
		$(".slidebar_mobile").slideToggle();
		$(".page-content-right").toggle();
	})
})
$(".slidebar_mobile>li").click(function(){
	var _this=this;
	if(this.className=="active"){
	}else{
		$(".slidebar_mobile .active .slider_mobile_dropdown").slideUp("fast");
		$(this).find(".slider_mobile_dropdown").slideDown("",function(){
			$(".slidebar_mobile>.active")[0].className="";
			_this.className="active";
		});
	}
});
resize();
$(window).resize(resize);
function resize(){
	setTimeout(function(){
		var clientHeight=document.body.clientHeight || document.documentElement.clientHeight;
		$(".slidebar_pc").css("height",clientHeight-44+"px");
		$(".page-content-right").css({"width":$(window).width()-$(".page-content-left").width()+"px"});
	},30)
}
var spaninner = function(){
	var arr=[];
	$(".slidebar_pc>li span").each(function(i){
		arr.push($(this).html());
	})	
	return arr;
}();

$("#sli_trans_btn").click(function(){
	if($(window).width()>768){
		if($(".slidebar_pc").width()>=40){
			transition(40,"13px","icon-share-alt");
			$(".");
		}else{
			transition(225,"20px", " icon-reply" ,spaninner);
		}
	}
});
var transition = function( width , textIndent ,icon, spaninner){
	$(".slidebar_pc")
		.width(width).find("li>a")
			.css("text-indent",textIndent).find("i").eq(0).attr("class",icon);

	$(".page-content-right")
		.css({"width":$(window)
			.width()-width+"px","left":width+"px"});

	if(spaninner == null)
	{
		$(".slidebar_pc>li span").empty();
	}else{
		setTimeout(function(){
			$(".slidebar_pc>li span").each(function(i){
				$(this).html(spaninner[i]);
			});
		},300)
	}

}
$(".displaysearch").click(function(){
	$(".searchpannel").slideToggle();

});