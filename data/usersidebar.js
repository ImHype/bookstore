var sidebar=function(req,res,userId){
	return [
      {
            name:"我的账户",
            url:'/user/'+userId+"/",
            icon:'icon-user'
      },
      {
            name:"我的小店",
            url:'/user/'+userId+"/mystore?kind=all",
            icon:'icon-globe'
      },
      {
            name:'我的资料',
            url:'/user/'+userId+'/info',
            icon:' icon-cog'
      },
      {
            name:'通知公告',
            url:'/user/'+userId+'/tongzhi?kind=all',
            icon:'icon-comment'
      },
      {
            name:'修改密码',
            url:'/user/'+userId+'/psw',
            icon:'icon-lock'
      },
      {
            name:'退出登录',
            url:'/user/'+userId+'/logout',
            icon:'icon-off'
      }
];
}
exports.side =sidebar;