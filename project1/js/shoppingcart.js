if(!sessionStorage['LoginUid']){
  location.href = "index.html";
}
$(function(){
  $('#site_header').load('data/header.php',function(){
    $('#welcome-text').html('欢迎回来：'+sessionStorage['LoginUname']);
  });
  $('#site_footer').load('data/footer.php');
})
//异步请求购物车中商品
$.ajax({
  url: 'data/shoppingcart.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(data){
    var html = '';
    var prices=0;
    $.each(data, function(i, p){
      console.log(data);
      html += `
      <tr>
          <td>
            <input type="checkbox"/>
            <input type="hidden" value="${p.did}" />
            <div><img src="${p.pic}"></div>
          </td>
          <td><a href="">${p.pname}</a></td>
          <td>￥${p.price}</td>
          <td>
             <button class="subBtn" name="${p.did}">-</button><input type="text" value="${p.count}"/><button class="addBtn" name="${p.did}">+</button>
          </td>
          <td><span>￥${p.price*p.count}</span></td>
          <td><a href="${p.did}">删除</a></td>
      </tr>
      `;
    });
    $('#cart tbody').html(html);
    for(var i=0;i<data.length;i++){
      var p1=data[i];
      console.log(p1.price*p1.count);
      prices+=parseFloat(p1.price*p1.count);
    }
    $("#prices").html("￥"+prices);
  },
  error: function(){
    alert('购物车数据加载失败！请检查响应消息！');
  }
});
/**功能点4：为“删除”按钮绑定事件监听，实现购买详情的删除**/
$('#cart tbody').on('click', 'a:contains("删除")', function(e){
  e.preventDefault();
  var did = $(this).attr('href');
  var that = this;  //使用临时变量指向当前被点击的A
  $.ajax({
    type: 'POST',
    url: 'data/cart_detail_delete.php',
    data: {'did': did},
    success: function(data){
      if(data.code<0){
        alert('响应成功但删除失败！原因：'+data.msg);
      }else {
        alert('购买记录删除成功！');
        //必须手工从table中删除当前tr！
        //console.log(this); //$.ajax中的this指向请求对象
        $(that).parent().parent().remove();

      }
    },
    error: function(){
      alert('购买记录删除失败！请检查响应消息！');
    }
  })
})

//功能5：+ -
$('#cart tbody').on('click', '.addBtn', function(e){
  //1:获取当前元素兄弟元素input
  var input = $(this).siblings("input");
  //2:获取input中数值+1
  var v = parseInt(input.val())+1;
  //3:保存回input
  input.val(v);
  //4:发送ajax请求更新数据库
  //获取购物车中明细表的id
  var did = this.name;
  //5:发送ajax更新数据库
  $.get("data/update_count_add.php?did="+did);
});
$('#cart tbody').on('click', '.subBtn', function(e){
  //1:获取当前元素兄弟元素input
  var input = $(this).siblings("input");
  //2:获取input中数值+1
  var v = parseInt(input.val())-1;
  //3:保存回input
  input.val(v);
  //4:发送ajax请求更新数据库
  //获取购物车中明细表的id
  var did = this.name;
  //5:发送ajax更新数据库
  $.get("data/update_count_sub.php?did="+did);
});
//去结算
$("#btn").click(function(){
  location.href = 'pay.html';
})