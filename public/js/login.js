var username = null,
	psw = null,
	check = null;
$(function(){


	$(".btn-login").click(function(){
		username = $("#username").val();
		psw = $("#password").val();
		check = $(":checkbox").eq(1).attr("checked");
		if(/^\s*$/.test(username)==true && /^\s*$/.test(psw)==true){
			alert("账号密码不能为空");
			return false;
		}else if(check != "checked"){
			alert("请同意用户服务协议")
			return false;
		}else{
		}
		
	});
})