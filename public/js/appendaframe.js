function EditorIfm(area){
	this.area=area;
	this.options = ["formId","srcpath","width","height"];
	this.defaults={};
	this.conf();
}
function ifmresize(){
	var iframe =$(window.frames["form"].document);
	var ifmobj = {};
	console.log($(window.frames["form"].document).find("body").height());
	setTimeout(function(){
		$("#editorifm").eq(0).
		css("height",parseInt($(window.frames["form"].document).find("body").css("height"))+"px");
	},60);
}

EditorIfm.prototype.conf=function(json){
	for(var attr in json){
		for (var i = 0; i < this.options.length; i++) {
			if(this.options[i] ==attr){
				this.defaults[attr] = json[attr];
				break;
			}
		};
	}
	this.init();
	this.create();
}
EditorIfm.prototype.init=function(){
	this.appendstring = "<iframe name=\"form\" id=\"editorifm\" src="+
		this.defaults.srcpath+" frameborder=\"0\" scrolling='no' style=\"width:100%\"></iframe>"+
			"<input type=\"hidden\" id=\"text\" name=\"text\">";
}

EditorIfm.prototype.create=function(){
	var _self=this;
	$(this.area).html(this.appendstring);
	$(window).load(function(){
		ifmresize();
		$(window).resize(ifmresize);

		$(_self.defaults.formId+" :submit").fadeIn();
		$(_self.defaults.formId).submit(function(){
			var val = iframe.find("#editor").html();
			$("#text").val(val);
			alert($("#text").val());
			return false;
		});
	});
}