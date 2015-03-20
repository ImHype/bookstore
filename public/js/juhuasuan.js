/*砸蛋页面的Tab切换*/
 var $tab = $('.tab ul li');
 $tab.hover(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var index = $tab.index(this);
	$('div.tab_boxlist > div').eq(index).show().siblings().hide();
 });
 var $tab_list = $('.tablist ul li');
 $tab_list.hover(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var index = $tab_list.index(this);
	$('div.tab_box > div').eq(index).show().siblings().hide();
});

var $chognzhi = $('.tabzhi ul li');
 $chognzhi.hover(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index = $chognzhi.index(this);
	$('div.tab_chong > div').eq(index).show().siblings().hide();
 });

var $lvxing = $('.tablvxing ul li');
 $lvxing.hover(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index = $lvxing.index(this);
	$('div.tab_lv > div').eq(index).show().siblings().hide();
 });


$(".coupon").click(function(){
	$('.coupon_down').fadeToggle();
	return false;
	});
/*订单详情伸缩 */
$(".details_btn").click(function(){
	$('.base_more').fadeToggle();
	return false;
	});
/*附近商家伸缩*/
$(".chuandai").click(function(){
	var index=$(".chuandai").index(this);
	$('.chuandailist').eq(index).fadeToggle();
	return false;
	});
	
$(".chuandai1").click(function(){
	var index=$(".chuandai1").index(this);
	$('.chuandailistn').eq(index).fadeToggle();
	return false;
	});
/*搜索店铺商品展开收起*/
$(".flod").click(function(){
	var index=$(".flod").index(this);
	$('.flod_detail').eq(index).fadeToggle();
	if($(this).html()=='展开相关宝贝'){
			$(this).html('收起相关宝贝');
		} else {
			$(this).html('展开相关宝贝');
		}
	return false;
	});

/*积分商城的效果*/
var $tab_li = $('.tablist ul li');
  $tab_li.click(function(){
	  $(this).addClass('selected').siblings().removeClass('selected');
	  var index = $tab_li.index(this);
	  $('div.tab_boxlist > div').eq(index).show().siblings().hide();
  });
// JavaScript Document

/*手机版商品分类*/
$(".surname").click(function(){
	//$(this).find(".dropdown").fadeToggle();
	var index=$(".surname").index(this);	
	$(".dropdown").eq(index).fadeToggle(200);
	 return false;
	});
//
$('.morebtn').click(function(){
		$(this).parent().parent().children().find('.spread').fadeToggle();
		if($(this).html()=='展开分类'){
			$(this).html('收起分类');
		} else {
			$(this).html('展开分类');
		}
		return false;
	});	
/*店铺分类展开收起*/
$('.shrink').click(function(){
		$(this).parent().parent().children().find('.toggle').fadeToggle();
		if($(this).html()=='+展开分类'){
			$(this).html('-收起分类');
		} else {
			$(this).html('+展开分类');
		}
		return false;
	});
/*信誉显示隐藏*/
$(".order").hover(function(){
	var index=$(".order").index(this);
	$('.tan').eq(index).fadeToggle();
	return false;
	})

/*倒计时*/
window.setInterval(function() { timer('divTime'); }, 0);
function timer()  
			{  
				var EndTime= new Date('2015/01/15 10:00:00'); 
				var NowTime = new Date();
				var ts = EndTime.getTime() - NowTime.getTime();//计算剩余的毫秒数  
				var dd = Math.floor(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
				var hh = Math.floor(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
				var mm = Math.floor(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
				var ss = Math.floor(ts / 1000 % 60, 10);//计算剩余的秒数  
				dd = checkTime(dd);  
				hh = checkTime(hh);  
				mm = checkTime(mm);  
				ss = checkTime(ss);  
				document.getElementById("J_day").innerHTML = dd;
				document.getElementById("J_hour").innerHTML = hh;
				document.getElementById("J_minute").innerHTML = mm;
				document.getElementById("J_second").innerHTML = ss; 
			}  
			function checkTime(i)    
			{    
			   if (i < 10) {    
				   i = "0" + i;    
				}    
			   return i;    
			}  

/*品牌团翻牌*/
$(".chage_tit").mouseenter(function(){
	$(this).find(".brandname").show();
	$(this).find(".brandpic").hide();
	})
$(".chage_tit").mouseleave(function(){
	$(this).find(".brandname").hide();
	$(this).find(".brandpic").show();
	})
/*品牌Tab切换*/
$(".brand_nav li a").click(function(){
	var index=$(".brand_nav li a").index(this);
	$('.brand_nav li').eq(index).addClass('nav_cur').siblings('li').removeClass('nav_cur');
	$(".assortment>.nav_box").eq(index).show().siblings(".nav_box").hide();
	});
	
/*聚名品Flash轮播*/
$('.slide_container').mouseenter(function(){
	window.clearInterval(flashAuto);
});
$('.slide_container').mouseleave(function(){
	flashAuto=window.setInterval(function(){$('.flash_right').click();},2000);
});

$('.famous li').mouseenter(function(){
	var oldNum=$('.nav_cur').index('.famous li');
	var newNum=$(this).index('.famous li');
	if(oldNum==newNum)
	{
		return;
	}
	$('.wslides li').eq(oldNum).hide();
	$('.wslides li').eq(newNum).show();
	$(this).addClass('nav_cur').siblings('li').removeClass('nav_cur');
});
$('.flash_right').click(function(){
	var oldNum=$('.nav_cur').index('.famous li');
	var last=$('.famous li:last').index('.famous li');
	var newNum;
	if(oldNum!=last)
	{
		newNum=oldNum+1;
	}
	else
	{
		newNum=0;
	}
	$('.wslides li').eq(oldNum).hide();
	$('.wslides li').eq(newNum).show();
	$('.famous li').eq(newNum).addClass('nav_cur').siblings('li').removeClass('nav_cur');
	
});

$('.flash_left').click(function(){
	var oldNum=$('.nav_cur').index('.famous li');
	var last=$('.famous li:last').index('.famous li');
	var newNum;
	if(oldNum!=0)
	{
		newNum=oldNum-1;
	}
	else
	{
		newNum=last;
	}
	$('.wslides li').eq(oldNum).hide();
	$('.wslides li').eq(newNum).show();
	$('.famous li').eq(newNum).addClass('nav_cur').siblings('li').removeClass('nav_cur');
});

var flashAuto=window.setInterval(function(){$('.flash_right').click();},2000);


/*导航划出的效果*/
$(function () {
    var cateMenu = function () {
        var cateLiNum = $(".cateMenu li").length;
        $(".cateMenu li").each(function (index, element) {
            if (index < cateLiNum ) {
                $(this).mouseenter(function () {
                    var ty = $(this).offset().top - 230;
                    var obj = $(this).find(".list-item");
                    var sh = document.documentElement.scrollTop || document.body.scrollTop;
                    var oy = ty + (obj.height() + 30) + 108 - sh;
                    var dest = oy - $(window).height()
                    if (oy > $(window).height()) {
                        ty = ty - dest - 10;
                    }
                    if (ty < 0) ty = 0;
                    $(this).addClass("on");
                    obj.show();
                    $(".cateMenu li").find(".list-item").stop().animate({ "top": ty });
                    obj.stop().animate({ "top": ty });
                })
                $(this).mouseleave(function () {
                    $(this).removeClass("on");
                    $(this).find(".list-item").hide();
                })
            }
        });

        $(".navCon_on").hover(function(){
            $(".cateMenu").show();
			$(".navCon-cate-title").addClass("hover");
        },
		function () {
		    $(".cateMenu").hide();
			$(".navCon-cate-title").removeClass("hover");
		})

    }();

});

/*分类点击的效果*/
$(".mid-title").click(function(){

    if ($(window).width()<768) 
        {
            $(".mid_head2").fadeToggle();
        };
        return false;
});

/*秒杀倒计时的效果*/
function FreshTime()
{
        var endtime=new Date("2014/12/15,12:20:12");//结束时间
        var nowtime = new Date();//当前时间
        var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
        d=parseInt(lefttime/3600/24);
        h=parseInt((lefttime/3600)%24);
        m=parseInt((lefttime/60)%60);
        s=parseInt(lefttime%60);
       
        document.getElementById("LeftTime").innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
        if(lefttime<=0){
        document.getElementById("LeftTime").innerHTML="团购已结束";
        clearInterval(sh);
        }
}
FreshTime()
var sh;
sh=setInterval(FreshTime,1000);
  

/*距离团购开团倒计时*/	
window.setInterval(function() { leavetime('leaveTime'); }, 0);
function leavetime()  
			{  
				var EndTime= new Date('2015/01/22 10:00:00'); 
				var NowTime = new Date();
				var ts = EndTime.getTime() - NowTime.getTime();//计算剩余的毫秒数  
				var hh = Math.floor(ts / 1000 / 60 / 24, 10);//计算剩余的小时数  
				var mm = Math.floor(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
				var ss = Math.floor(ts / 1000 % 60, 10);//计算剩余的秒数  
				hh = checkTime(hh);  
				mm = checkTime(mm);  
				ss = checkTime(ss);  
				document.getElementById("leaveTime").innerHTML =hh+":"+mm+":"+ss;
			}  
			function checkTime(i)    
			{    
			   if (i < 10) {    
				   i = "0" + i;    
				}    
			   return i;    
			} 			
  
