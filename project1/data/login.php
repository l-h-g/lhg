<?php
    header("Content-Type:application/json;charset=utf-8");
    $n=$_REQUEST["uname"]or die('{"code":-2,"msg":"用户名不能为空"}');
    $p=$_REQUEST["upwd"]or die('{"code":-3,"msg":"密码不能为空"}');
    require('init.php');
    $sql="select uid from luo1_user where uname='$n' and upwd='$p'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row==null){
        echo '{"code":-1,"msg":"用户名或密码错误"}';
    }else{
        $uid=$row[0];
        $output=[
            'code'=>1,
            'msg'=>'登陆成功',
            'uname'=>$n,
            "uid"=>$uid
        ];
        echo json_encode($output);
    }
?>