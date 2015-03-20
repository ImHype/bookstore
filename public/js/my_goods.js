var aShow = $(".show i");
var aAnniu = $(".anniu i");
var aDisplay = $(".display");


$(".anniu").click(function(){
	// alert(.length);
	var a = $(this).parent().parent().next().find('.another_table').eq(0);
	// $(a).toggle();
	if($(a).css("display")=="none"){
		$(this).find("i").attr("class","icon-minus");
		$(a).show();
	}else{
		$(this).find("i").attr("class","icon-plus");
		$(a).hide();

		if($(this).attr("class") == "anniu ml1")
		{
			var b =$(this).parent().parent().next();
			$(b).find(".anniu i").attr("class","icon-plus");
			$(b).find(".another_table").find(".another_table").hide();
			$(b).find("i:last").attr("class","icon-circle");
		}
	}
});