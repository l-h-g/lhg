<?php
    header("Content-Type:application/json;charset=utf-8");
    $n=$_REQUEST['uname']or die('{"code":401,"msg":"uname reqiored"}');
    $p=$_REQUEST['upwd']or die('{"code":402,"msg":"upwd reqiored"}');
    require("init.php");
    $sql="insert into luo1_user values(null,'$n','$p')";
    $result=mysqli_query($conn,$sql);
    if($result){
        $uid = mysqli_insert_id($conn);
        $data=["code"=>200,"uid"=>$uid];
        echo json_encode($data);
    }else{
            echo '{"code":501,"msg":"sql err"}';
          }
?>