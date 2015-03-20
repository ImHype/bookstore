var aShow = $(".show i");
var aAnniu = $(".anniu i");
var aDisplay = $(".display");

addIcon(aShow,"icon-ok","icon-eye-close");
addIcon(aAnniu,"icon-plus","icon-minus");
function addIcon(obj,oldicon,newicon){
	$(obj).each(function(i){
		$(this).click( function () {
			if($(this).attr("class")==oldicon)
			{
				$(this).attr("class",newicon);
				$(this).next().show();
			}else{
				$(this).attr("class",oldicon);
			}
		});
	});
}
var displayx = [];
var displayy = [];
var displayz = [];

var btnx = [],
	btny = [],
	btnz = [],
	length; 

for (var i = 0; i < $(".anniu").length; i++) {
	if($(".anniu").eq(i).data("btnx")!=undefined && $(".anniu").eq(i).data("btny")==undefined){
		length++;
	}
};
for (var i = 0; i < length; i++) {
	btny.push([]);
	displayz.push([]);
};
for (var i = 0; i < aDisplay.length; i++) {
	if($(aDisplay[i]).data("x")!=undefined)
	{
		displayx.push(aDisplay[i]);
	}else if($(aDisplay[i]).data("y")!=undefined && $(aDisplay[i]).data("z")==undefined)
	{
		displayy.push(aDisplay[i]);
	}else if($(aDisplay[i]).data("y")!=undefined && $(aDisplay[i]).data("z")!=undefined)
	{
		displayz[$(aDisplay[i]).data("y")][$(aDisplay[i]).data("z")] = $(".display")[i];
	}
};
for (var i = 0; i < $(".anniu").length; i++) {

	if($(".anniu").eq(i).data("btnx")!=undefined && $(".anniu").eq(i).data("btny")==undefined)
	{
		btnx.push($(".anniu")[i]);
	}else if($(".anniu").eq(i).data("btnx")!=undefined && $(".anniu").eq(i).data("btny")!=undefined)
	{
		btny[$(".anniu").eq(i).data("btnx")][$(".anniu").eq(i).data("btny")] = $(".anniu")[i];
	}
};

for(var i = 0; i< btnx.length ;i++)
{
	$(btnx)[i].index=i;

	$(btnx)[i].onclick = function(){
		var  data_x = $(this).data("btnx");
		if($(displayy[data_x]).css("display")=="none")
		{
			$(displayy[data_x]).show()
		}else{
			$(displayy[data_x]).hide();
			for (var i = 0; i < displayz[data_x].length; i++) {
				$(displayz[data_x][i]).hide();
				$(btny[data_x][i]).find("i").attr("class","icon-plus");
			};
			
		}
	}
	for(var j =0 ;j< btny.length ; j++)
	{
		btny[j].index=j;
		for( var k = 0 ;k< btny[j].length ;k++)
		{
			btny[j][k].index = k;
			$(btny)[j][k].onclick=function(){
				var data_x = $(this).data("btnx");
				var data_y = $(this).data("btny");
				$(displayz[data_x][data_y]).toggle();
			}
		}
	}
}
