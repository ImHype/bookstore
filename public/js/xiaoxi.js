var plus={num:0};
$(".radio :radio").eq(0).click(function(){
    $("#wenben").show();
    $("#tuwen").hide();
});
$(".radio :radio").eq(1).click(function(){
    $("#wenben").hide();
    $("#tuwen").show();
});

$("#new").click(function(){
    if(plus.num>=9){
        alert("超过限制")
    }else{
        plus.num++;
        $("#new").before("<div class='newdiv'><span class='title'>标题</span><img class='img1' src='img/smallimg.jpg'>"
        +" <img class='img2' src='img/op-modify.png'>"+
        " <img src='img/op-del.png'>"
        +"</div>");
    }
    addevent();
});
var init = function (){
    $("#title").keydown(function(){
        var _this=this;
        var timer=setTimeout(function(){
            //console.log(_this.value);
            $("#firsttitle")[0].innerHTML = _this.value;
        },0);
    });
}

$("#firstchange")[0].onclick=function(){
    $(".wrap").animate({top:0+"px"});
    $("#title")[0].onkeydown=function(){
        var _this=this;
        setTimeout(function(){
            $("#firsttitle")[0].innerHTML = _this.value;
        })
    }
    init = null
}
function addevent(){
    for(var i= 0,len=$(".newdiv").length;i<len;i++){

        $(".newdiv")[i].index=i;
        $(".newdiv").eq(i).find("img")[1].onclick=function(){
            $("#title")[0].value="";
            var y=this.parentNode.index;
            var oftop=this.parentNode.offsetTop;
            $(".wrap").animate({top:oftop+"px"});
            $("#title")[0].onkeydown=function(){
                var _this=this;
                setTimeout(function(){
                    $(".title")[y].innerHTML = _this.value;
                })
            }
            init = null;
        }
        $(".newdiv").eq(i).find("img")[2].onclick=function(){
            if(confirm("是否删除")){
                $(this).parent().remove();
                plus.num--;
            }else{

            }
        }
    }
}