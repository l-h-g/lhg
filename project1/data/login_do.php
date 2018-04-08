<?php
  header("Content-Type:application/json;charset=utf-8");
  $n = $_REQUEST['uname'];
  require('init.php');
  $sql="SELECT count(uid) AS c FROM luo1_user WHERE uname='$n'";
  //6:获取获取结果
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row['c']==='0'){
     echo json_encode (["msg"=>"bucunzai"]);
  }else{
     echo json_encode (["err"=>"cunzai"]);
  }
?>