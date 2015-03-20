var allselect = [];//全选按钮标注allselect的class
var othercheckbox = [] ;//需要监控的范围
//data-single = single 即为 普通单选框
$(".checkframe :checkbox").each(function(i){
	if($(this).data("allselect")==true)
	{
		allselect.push(this);
	}else{
		othercheckbox.push(this);
	}
})
$(allselect).click(function () {
	var checkKey = true;//不需要全选
	for (var i = 0; i < othercheckbox.length; i++) {
		if(othercheckbox[i].checked==false){
			checkKey = false;
		}
	};
	if(	checkKey == false)//需要全选
	{
		for (var i = 0; i < othercheckbox.length; i++) {
			othercheckbox[i].checked = true;
		};
		setTimeout(function(){
			$(allselect).attr("checked",true);
		},0);
	}else{//全不选
		for (var i = 0; i < othercheckbox.length; i++) {
			othercheckbox[i].checked = false;
		}
		setTimeout(function(){
			$(allselect).attr("checked",false);
		},0);
	}
});
$(othercheckbox).click(function(){
	// alert(this.checked);
	//单选框全选
	var if_allselect = true;
	//是否已全选
	for (var i = 0; i < $(othercheckbox).length; i++) {
		if(othercheckbox[i].checked == false)
		{
			if_allselect = false;
			//未全选
			//属于single的checkbox
		}
	};

	if(if_allselect == true)
	{
		$(allselect).attr("checked",true);
	}else{
		$(allselect).attr("checked",false);
	}

})