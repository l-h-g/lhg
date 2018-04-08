//服务器端获取头部和尾部
$(function(){
  $("#site_header").load("data/header.php");
  $("#site_footer").load("data/footer.php");
});

//注册验证
$("#uname").blur(function(){
  var n=this.value;
  if(this.validity.valueMissing){
    $("#uname").next("span").html("用户名不能为空").attr("class","help-block danger");
  }else if(this.validity.tooShort){
    $("#uname").next("span").html("用户名长度不能少于5位").attr("class","help-block danger");
  }else if(this.validity.tooLong){
    $("#uname").next("span").html("用户名长度不能大于10位").attr("class","help-block danger");
  }else{
    $("#uname").next("span").html("用户名输入有效").attr("class","help-block success");
  }
  if(this.validity.valueMissing||this.validity.tooShort){return;}
  $.ajax({
    type:'post',
    url:"data/login_do.php",
    data:{uname:n},
    success:function(data){
      var html="";
      if(data.msg){
        html = "该用户名可以使用";
        $("#uname").next("span").html(html).addClass("success");
      }else if(data.err){
        html = "该用户名己被占用";
        $("#uname").next("span").removeClass("success").html(html).addClass("danger");
      }
    }
  });
});
$("#upwd").blur(function(){
  var p=this.value;
  var pwdReg = /^[0-9]{6,8}$/;
  if(!pwdReg.test(p)){
    html = "密码为6~8位数字";
    $("#upwd").next("span").html(html).addClass("danger");
  }else{
    html = "密码格式正确";
    $("#upwd").next("span").removeClass("danger").html(html).addClass("success");
  }
})
//注册事件
$('#bt-submit').click(function(){
  //表单序列化 - 把选中表单中所有的带name属性的值串联起来，组成k=v&k=v形式，直接用于HTTP请求消息
  var data = $('#f2').serialize();
  var spanHtml=$("#uname").next("span").html();
  var upwdHtml=$("#upwd").next("span").html();
  var checked=$(":checked");
  var spanHtml1="用户名输入有效";
  var spanHtml2="该用户名可以使用";
  var upwdHtml1="密码格式正确";
  if((spanHtml==spanHtml1 || spanHtml==spanHtml2)&& upwdHtml==upwdHtml1 && checked.length==1){
    $.ajax({
      type: 'POST',
      url: 'data/register.php',
      data: data,
      success: function(obj){
        if(obj.code === 200){
          alert('新用户注册成功！点击确定返回首页');
          location.href = 'index.html';
        }else {
          alert('新用户注册失败！错误消息：'+obj.msg);
        }
      },
      error: function(){
        alert('异步请求失败!')
      }
    });
  }else{return false}
})
//登陆事件
$("#bt-login").on("click",function(){
  var n=$("[name=uname]").val();
  var p=$("[name=upwd]").val();
  var url="data/login.php?uname="+n+"upwd="+p;
  $.ajax({
    type:"POST",
    url:"data/login.php",
    data:{uname:n,upwd:p},
    success:function(data){
      if(data.code<0){
        $("#alertText").html(data.msg);
        alert(data.msg);
      }else{
        $("#welcome-text").html("欢迎回来:"+data.uname);
        sessionStorage['LoginUname']=data.uname;
        sessionStorage['LoginUid']=data.uid;
      }
    },
    error:function(){
      console.log("响应消息有问题！请检查Network!");
    }
  });
});

