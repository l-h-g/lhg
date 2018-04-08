
$.ajax({
  url: 'data/product_list.php',
  success: function(pager) {
	console.log(pager);
    var html = '';
    for(var i=0;i<pager.length;i++) {
      var p1=(pager[i]);
      html += `
        <dl>
          <dt>
            <div class="sale"></div>
            <a><img src="${p1.pic}"></a>
          </dt>
          <dd>${p1.pname}</dd>
          <dd>
            <div class="lf">
              <b>${p1.price}<br><s>$ 725.00</s></b>
            </div>
            <a href="#"></a>
            <a href="#"></a>
            <a class="addcart" href="${p1.pid}"></a>
          </dd>
        </dl>
      `;
    };
    $('.jiage').html(html);
    $('.jiage>dl:eq(2)>dt>div').removeClass("sale");
    $('.jiage>dl:eq(6)>dt>div').removeClass("sale");
    $('.jiage>dl:eq(10)>dt>div').removeClass("sale");
  },
  error: function(){
    alert('异步请求商品列表出错！请检查响应消息');
  }
});
/**功能点5：为每个商品下面的“添加到购物车”绑定监听——事件代理**/
$('#main').on('click','a.addcart', function(e){
  e.preventDefault();
  var pid = $(this).attr('href');
  //把当前登录用户编号+商品编号提交给服务器，执行购物车条目添加
  $.ajax({
    type: 'POST',
    url: 'data/cart_detail_add.php',
    data: {'uid': sessionStorage['LoginUid'], 'pid': pid},
    success: function(data){
      if(data.code<0){
        alert('添加失败！错误原因：'+data.msg);
      }else {
        alert('添加成功！该商品已购买：'+data.count);
      }
    },
    error: function(){
      alert('添加购物车商品出错！请检查响应消息！');
    }
  });
});