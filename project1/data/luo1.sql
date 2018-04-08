set names utf8;
drop database if exists luo1;
create database luo1 charset=utf8;
use luo1;

/*用户信息表*/
create table luo1_user(
    uid int primary key auto_increment,
    uname varchar(32),
    upwd varchar(32)
);
insert into luo1_user values
(10,'zhangsan','123456');

/**产品信息表**/
CREATE TABLE luo1_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(8,2),
  pic VARCHAR(32)
);
INSERT INTO luo1_product VALUES
(1,'纺必适航影响新西兰温泉',550.00,'img/product_1.png'),
(2,'纺必适航影响新西兰温泉',450.00,'img/product_2.png'),
(3,'纺必适航影响新西兰温泉',850.00,'img/product_3.png'),
(4,'纺必适航影响新西兰温泉',350.00,'img/product_4.png'),
(5,'纺必适航影响新西兰温泉',950.00,'img/product_5.png'),
(6,'纺必适航影响新西兰温泉',350.00,'img/product_6.png'),
(7,'纺必适航影响新西兰温泉',750.00,'img/product_7.png'),
(8,'纺必适航影响新西兰温泉',650.00,'img/product_8.png'),
(9,'纺必适航影响新西兰温泉',650.00,'img/product_9.png'),
(10,'纺必适航影响新西兰温泉',550.00,'img/product_10.png'),
(11,'纺必适航影响新西兰温泉',450.00,'img/product_1.png'),
(12,'纺必适航影响新西兰温泉',650.00,'img/product_2.png');

/**购物车表**/
CREATE TABLE luo1_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO luo1_cart VALUES
(100, 10);

/**购物车详情表**/
CREATE TABLE luo1_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT,
  productId INT,
  count INT
);
INSERT INTO luo1_cart_detail VALUES
(NULL, 100, 8, 2),
(NULL, 100, 3, 1),
(NULL, 100, 2, 3);

/**订单信息表**/
CREATE TABLE luo1_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  rcvName VARCHAR(16),
  rcvAddr VARCHAR(64),
  rvcPhone VARCHAR(24),
  price FLOAT(8,2),     #999999.99
  payment INT,          #1表货到付款 2表支付宝支付 3网银支付  4在线支付
  status INT,           #1表待付款  2表配货中  3表运输中  4表派货中   5表订单完成  6表废单
  orderTime BIGINT,
  userId INT
);
INSERT INTO luo1_order VALUES
(91308000,'张三','深圳市罗湖区园岭街道旭飞花园4号楼520室','13501234561','3800','1','1','1300123456781','10'),
(NULL,'张三姐','深圳市罗湖区园岭街道旭飞花园4号楼520室','13501234562','1200','2','2','1310123456782','10'),
(NULL,'张三爸','深圳市罗湖区园岭街道旭飞花园4号楼520室','13501234563','800','3','3','1350123456783','10'),
(NULL,'张三妈','深圳市罗湖区园岭街道旭飞花园4号楼520室','13501234564','1100','4','4','1390123456784','10'),
(NULL,'张三弟','深圳市罗湖区园岭街道旭飞花园4号楼520室','13501234565','4500','1','5','1420123456785','10');