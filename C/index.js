var User = require("../model/User");
var ViewController = require("../data/viewController");
exports.index =function(req, res, next) {
  res.render('index', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:0
  });
}
exports.recentupload=function(req,res,next){

  res.render('recentupload', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:1
  });
}
exports.otherfind=function(req,res,next){

  res.render('otherfind', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:3
  });
}
exports.bookarea=function(req,res,next){

  res.render('bookarea', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:2
  });
}
exports.bookfriendsinfo=function(req,res,next){

  res.render('bookfriendsinfo', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:4
  });
}
exports.regist=function(req,res,next){

  res.render('regist', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:null
  });
}
exports.registform=function(req,res,next){

  var username = req.body.username;
  var password = req.body.password;
  var confirm = req.body.confirm;
  var mydate = new Date();
  regTime ={
    looktime : mydate.getFullYear()+"年"+(mydate.getMonth()+1)+"月"+mydate.getDate()+"日"+mydate.getHours()+"点"+mydate.getMinutes()+"分",
    computedtime:mydate.getTime()
  }
  // var infomation = req.body.infomation;
  // var title,regsussess;

  if(password === confirm)
  {
    if(username.length<5)
    {
      res.send("username too short");
      return;

    }else if(username.length>10){
      res.send("username too long");
      return;
    
    }
    if(password.length<5)
    {
      res.send("password too short");
      return;
    }else if(password.length>10){
      res.send("password too long");
      return;
    }
  
    User.findOne({username:username},function(err,data){

      if(data){
        res.send("注册失败，用户名已存在");

      }else{
          var user = new User({username:username,password:password,date:regTime});
          user.save();
          res.send("注册成功");
      }
      
    })
  }else{
    res.send("注册失败，密码不一致")
  }

}

exports.login=function(req,res,next){

  res.render('login', {
       brand:ViewController.brand,
       login:req.session.user||ViewController.login,
       regist:ViewController.regist,
       upload:ViewController.upload,
       index : ViewController.index,
       recentupload:ViewController.recentupload,
       bookarea:ViewController.bookarea,
       otherfind:ViewController.otherfind,
       bookfriendsinfo:ViewController.bookfriendsinfo,
       secnavactive:null
  });
}
exports.loginform=function(req,res,next){

  var username = req.body.username;
  var password = req.body.password;
  User.findOne({username:username,password:password},function(err,data){
    if(data){
      req.session.user = data;
      res.send("登录成功")
    }else{
      res.send("登录失败");
    }
  })
  
}
exports.upload=function(req,res,next){
  res.render('upload',{
     brand:ViewController.brand,
     login:req.session.user||ViewController.login,
     regist:ViewController.regist,
     upload:ViewController.upload,
     index : ViewController.index,
     recentupload:ViewController.recentupload,
     bookarea:ViewController.bookarea,
     otherfind:ViewController.otherfind,
     bookfriendsinfo:ViewController.bookfriendsinfo,
     secnavactive:null
  });
}

exports.logout=function(req,res){
  req.session.user=null;
  res.send(true);
}
