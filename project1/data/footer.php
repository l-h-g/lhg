<?php
header('Content-Type: text/html;charset=UTF-8');
?>
    <!-- 联系我们 -->
    <div id="footer_box">
      <ul>
        <li>
          <h2>联系我们</h2>
          <p class="dingwei">49 Archdale，2B Charlestone</p>
          <p class="phone">+777（100）1234</p>
          <p class="email">mail@example.com</p>
        </li>
        <li>
          <h2>信息</h2>
          <p><a href="#">关于As</a></p>
          <p><a href="#">隐私政策</a></p>
          <p><a href="#">条款和条件</a></p>
          <p><a href="#">安全支付</a></p>
        </li>
        <li>
          <h2>客户服务</h2>
          <p><a href="#">联系方式</a></p>
          <p><a href="#">返回</a></p>
          <p><a href="#">常问问题</a></p>
          <p><a href="#">网站地图</a></p>
        </li>
        <li>
          <h2>我的帐户</h2>
          <p><a href="#">我的帐户</a></p>
          <p><a href="#">订单历史</a></p>
          <p><a href="#">愿望清单</a></p>
          <p><a href="#">通讯</a></p>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <p>
        <i></i>
        <i></i>
        <i></i>
      </p>
      ©清风店的主题，从2013年收集<a href="#">网页模板</a> -更多模板<a href="#">模板之家</a>
    </div>
    <!--登录模态框-->
    <div id="modal-login" class="modal fade">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <h3 class="modal-header">用户登录</h3>
          <div class="modal-body">
            <p class="alert">请在此处输入您的注册信息。</p>
            <form id="login-form">
              <input class="input" type="text" placeholder="请输入登录用户名" name="uname" value="zhangsan">
              <input class="input" type="password" placeholder="请输入登录密码" name="upwd" value="123456"><br>
              <input type="button" value="提交登录信息" id="bt-login">
            </form>
          </div>
        </div>
      </div>
    </div>

