# lhg
> 多页面 微风商城

# 前言

此项目从主体页面，涉及注册、登录、商品详情、购物车、下单、订单、订单详情等等，是一个完整的流程。

# 主要优化点
1.需要登录权限的组件的跳转判断由之前在每个组件里面判断统一放到inxex.js，不过要注意的是sessionStorage都要在获取用户权限的回调里，具体实现代码可以看index.js。<br/>
2.头部和尾部分离，通过js加载，实现公共片段<br/>
3.还有一些就是将之前有部分地方用到jq的都改成了数据驱动。<br/>
4.用了keep-alive缓存部分组件

__注：此项目纯属个人瞎搞，无法正常购买结账。__


## 技术栈

jquery + bootstrap + ajax + php + mysql


## 关于 数据接口 的说明

该项目所有数据来自data/luo1.sql

## 项目运行


```
git clone https://github.com/l-h-g/lhg/tree/master/project1

1.在服务器（php+mysql）环境下运行

2.把data/luo1.sql导入到数据库

```

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  如果您不想注册的可以直接用这个账户 用户名 zhangsan 密码 123456


# 目标功能
- [x] 登录、注册 -- 完成
- [x] 首页 -- 完成
- [x] 分类 -- 完成
- [x] 购物车功能 -- 完成
- [x] 商品详情页 -- 完成
- [x] 下单功能 -- 完成 
- [x] 订单列表 -- 完成
- [x] 订单详情 -- 完成
- [x] 添加、删除、修改收货地址 -- 完成
- [x] 付款 -- 无法购买

# 部分截图

<img src="https://github.com/l-h-g/lhg/blob/master/project1/img/produkt_slid3.png" width="500" height="500"/>


