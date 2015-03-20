var ViewController = require("../data/viewController");
var User_side = require("../data/usersidebar");

var User = require("../model/User");
var Book = require("../model/Book");

var havenotloginfn = function (req,res){
      console.log("未登录");
      res.render("havenotlogin", {
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
exports.usercenter=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){
                  res.render("usercenter", {
                   brand:ViewController.brand,
                   login:req.session.user||ViewController.login,
                   regist:ViewController.regist,
                   upload:ViewController.upload,
                   index : ViewController.index,
                   recentupload:ViewController.recentupload,
                   bookarea:ViewController.bookarea,
                   otherfind:ViewController.otherfind,
                   bookfriendsinfo:ViewController.bookfriendsinfo,
                   secnavactive:null,
                   userinfo:req.session.user||{},
                   user_side:user_side,
                   sideactive:'我的账户',
                  });
            }else{
                  console.log("not you");
            }
      }
}
exports.userstoreform=function(req,res){
      var bookid = req.body['_id'];
      var open = req.body['open'];
      console.log(open)
      var update={
            isOn :open
      }

      Book.update({_id:bookid},update,{},function(err,docs){
            if(!err){
                  console.log(bookid);
                  res.send("success");
                  console.log(docs);
            }else{
                  res.send("faild")
            }
      });
      Book.find({_id:bookid},function(err,data){
            console.log(data);
      })
}
exports.userstore=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      var isOn=null;
      var isOnli = [{
            name:'全 部',
            kind:'all'
      },
      {
            name:'上架中',
            kind:'on'
      },
      {
            name:'已下架',
            kind:'down'
      }]
      if(req.query.kind=='on'){
            isOn = true;  
      }else if(req.query.kind=='down'){
            isOn = false;
      }else{
            isOn = (true||false);
      }
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){
                  Book.find({username:req.session.user.username,isOn:isOn},function(err,booklist){
                        res.render("userstore", {
                         brand:ViewController.brand,
                         login:req.session.user||ViewController.login,
                         regist:ViewController.regist,
                         upload:ViewController.upload,
                         index : ViewController.index,
                         recentupload:ViewController.recentupload,
                         bookarea:ViewController.bookarea,
                         otherfind:ViewController.otherfind,
                         bookfriendsinfo:ViewController.bookfriendsinfo,
                         secnavactive:null,
                         userinfo:req.session.user||{},
                         booklist:booklist,
                         user_side:user_side,
                         sideactive:'我的小店',
                         isOnli:isOnli,
                         kind:req.query['kind'],
                        });
                  })
            }else{
                  console.log("not you");
            }
      }
}
exports.userinfo=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){

                  res.render("userinfo", {
                   brand:ViewController.brand,
                   login:req.session.user||ViewController.login,
                   regist:ViewController.regist,
                   upload:ViewController.upload,
                   index : ViewController.index,
                   recentupload:ViewController.recentupload,
                   bookarea:ViewController.bookarea,
                   otherfind:ViewController.otherfind,
                   bookfriendsinfo:ViewController.bookfriendsinfo,
                   secnavactive:null,
                   userinfo:req.session.user||{},
                   user_side:user_side,
                   sideactive:'我的资料',
                   userId:userId
                  });
            }else{
                  console.log("not you");
            }
      }
}
exports.userinfoform=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){

                  var update = {
                        realname : req.body['realname'],
                        phone : req.body['phone'],
                        email : req.body['email'],
                        qq : req.body['qq'],
                        college : req.body['college'],
                        major : req.body['major']
                  }
                  User.update({_id:req.params['userid']},update,{},function(err,doc){
                        if(!err){
                              User.findOne({_id:req.params['userid']},function(err,info){
                                    console.log(info);
                                    req.session.user = info;
                                    res.redirect("/user/"+userId);
                              });
                              
                        }else{
                              res.send("修改失败，请重试")
                        }
                  });

            }else{
                  console.log("not you");
            }
      }
}
exports.usertongzhi=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      var isOn=null;
      var isOnli = [{
            name:'全 部',
            kind:'all'
      },
      {
            name:'通知',
            kind:'on'
      },
      {
            name:'消息',
            kind:'down'
      }]
      if(req.body.kind=='on'){
            isOn = true;  
      }else if(req.body.kind=='down'){
            isOn = false;
      }
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){
                  Book.find({username:req.session.user.username,isOn:isOn},function(err,booklist){
                        res.render("usertongzhi", {
                         brand:ViewController.brand,
                         login:req.session.user||ViewController.login,
                         regist:ViewController.regist,
                         upload:ViewController.upload,
                         index : ViewController.index,
                         recentupload:ViewController.recentupload,
                         bookarea:ViewController.bookarea,
                         otherfind:ViewController.otherfind,
                         bookfriendsinfo:ViewController.bookfriendsinfo,
                         secnavactive:null,
                         userinfo:req.session.user||{},
                         booklist:booklist,
                         user_side:user_side,
                         sideactive:'通知公告',
                         isOnli:isOnli,
                         kind:req.query['kind'],
                        });
                  })
            }else{
                  console.log("not you");
            }
      }
}
exports.userpsw=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){
                  res.render("userpsw", {
                   brand:ViewController.brand,
                   login:req.session.user||ViewController.login,
                   regist:ViewController.regist,
                   upload:ViewController.upload,
                   index : ViewController.index,
                   recentupload:ViewController.recentupload,
                   bookarea:ViewController.bookarea,
                   otherfind:ViewController.otherfind,
                   bookfriendsinfo:ViewController.bookfriendsinfo,
                   secnavactive:null,
                   userinfo:req.session.user||{},
                   user_side:user_side,
                   sideactive:'修改密码',
                   userId:userId
                  });
            }else{
                  console.log("not you");
            }
      }
}
exports.userpswform=function(req,res){
      var userId = req.params['userid'];
      var user_side=User_side.side(req,res,userId);
      if(!req.session.user){
            havenotloginfn(req,res);
      }else{
            if(req.session.user._id==userId){
                  User.findOne({_id:userId,password:req.body['oldpassword']},function(err,data){
                        if(data){
                              if(req.body['newpassword1']==req.body['newpassword2'])
                              {
                                    var update = {
                                          password:req.body['newpassword1']
                                    }
                                    User.update({_id:userId},update,{},function(err,doc){
                                          if(!err){
                                                res.send("修改成功");
                                          }else{
                                                res.send("修改失败，请重试");
                                                console.log(err);
                                          }
                                    });
                              }else{
                                    res.send("新密码不一致");
                              }
                        }else{
                              res.send("密码错误");
                        }
                  })
            }else{
                  console.log("not you");
            }
      }
}