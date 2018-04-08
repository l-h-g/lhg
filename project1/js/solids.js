$(function(){
  $("#site_header").load("data/header.php",function(){
    navText("固体");
  });
  $("#site_footer").load("data/footer.php");
});
//导航高亮函数
function navText(text){
  $('#nav_01 ul li a').each(function(){
    var thisText=$(this).text();
    console.log(thisText);
    console.log(text);
    if(thisText==text){
      $(this).parent().addClass('cur');
    }
  });
}