<?php
/*
*接收客户端提交的用户编号，查询出该用户购物车中的所有商品信息，以JSON格式返回
*/
header('Content-Type: application/json');

@$uid = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空"}');

require('init.php');

$sql = "SELECT * from luo1_order WHERE userId=$uid";
$result = mysqli_query($conn, $sql);

$list = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($list);