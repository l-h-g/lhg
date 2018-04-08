<?php
//接收客户端提交数据
$did = $_REQUEST['did'];
require('init.php');

//SQL1：根据用户编号查询出他对应的购物车编号
$sql = "UPDATE luo1_cart_detail SET count=count+1";
$sql .= " WHERE did=$did";
mysqli_query($conn, $sql);