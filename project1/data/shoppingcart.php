<?php
header('Content-Type: application/json');
@$uid = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空"}');
require('init.php');
$sql = "SELECT pid,pname,price,pic,did,count FROM luo1_product,luo1_cart_detail WHERE cartId=( SELECT cid FROM luo1_cart WHERE userId=$uid ) AND pid=productId";
$result = mysqli_query($conn, $sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($list);