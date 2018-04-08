/**
 * Created by bjwsl-001 on 2017/3/20.
 */
if(!sessionStorage['LoginUid']){
  location.href = "index.html";
}
$(function(){
  $('#site_header').load('data/header.php',function(){
    $('#welcome-text').html('欢迎回来：'+sessionStorage['LoginUname']);
  });
  $('#site_footer').load('data/footer.php');
})

/**功能点3.0：异步请求当前登录用户的购物车信息**/
$.ajax({
  url: 'data/pay.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(list){
    console.log('请求购物车详情成功');
    var html = '';
    var p2=0;
    var prices=0;
    for(var i=0;i<list.length;i++){
      console.log(list[i]);
      var p1=(list[i]);
      html+=`
        <div class="goods-item">
          <div class="p-img">
            <a target="_blank" href=""><img src="${p1.pic}" alt=""></a>
          </div>
          <div class="p-name">
            <a href="" target="_blank">${p1.pname}</a>
          </div>
          <div class="p-price">
            <strong class="jd-price">￥${p1.price*p1.count}</strong>
            <span class="p-num">x${p1.count}</span>
            <span class="p-state">有货</span>
          </div>
        </div>
      `;
      $('.goods-items').html(html);
      p2+=parseInt(p1.count);
      prices+=parseFloat(p1.price*p1.count);
    };
    $('.ftx-01').html(p2);
    $('#warePriceId').html("￥"+prices);
    $('.price-num').html("￥"+prices);
  },
  error: function(){
    alert('请求购物车详情失败！')
  }
});
/**功能点3.1：异步请求当前登录用户的购物车信息**/
$.ajax({
  url: 'data/order.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(list){
    console.log('请求购物车详情成功')
    console.log(list);
    var html="";
    for(var i=0;i<list.length;i++){
      var addr=list[i];
      html+=`
        <div class="addr-detail">
          <span class="addr-name" limit="6" title="${addr.rcvName}">${addr.rcvName}</span>
          <span class="addr-info" limit="45" title="${addr.rcvAddr}">${addr.rcvAddr}</span>
          <span class="addr-tel">${addr.rvcPhone}</span>
        </div>
      `;
      $('#addr').html(html);
    }
    $('#sendAddr').html("寄送至："+list[0].rcvAddr);
    $('#sendMobile').html("收货人："+list[0].rcvName+" "+list[0].rvcPhone);
  },
  error: function(){
    alert('请求购物车详情失败！')
  }
});

//提交订单
$(".checkout-submit").click(function(){
  location.href="succeed.html";
})