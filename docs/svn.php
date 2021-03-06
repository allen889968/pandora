<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>SVN 维护常用项目地址</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 让IE系列浏览器识别html5标签 -->
<!--[if lt IE 9]>
<script src="assets/js/html5shiv.js"></script>
<![endif]-->
<link rel="stylesheet"  href="assets/less/pandora.css">
<link rel="stylesheet"  href="assets/less/docs.css">
<style>

</style>
</head>
<body>
<div class="wrap">
    <h1>SVN 常用的维护项目地址</h1>
    <p>SVN 最常用的维护地址，你可以在评论处添加最常用的地址连接，我会统一整理：</p>
    <p><strong>TODO：</strong></p>
    
    <div class="docs-example">
        <h4>251环境测试产品</h4>
        <ul>
            <li><a target="_blank" href="http://www.lvmama.com/product/67370">门票：67370</a></li>
            <li><a target="_blank" href="http://www.lvmama.com/product/72672">线路：72672</a></li>
            <li><a target="_blank" href="http://www.lvmama.com/product/66046">超级自由行：66046</a></li>
            <li><a target="_blank" href="http://www.lvmama.com/product/25060">酒店：25060</a></li>
        </ul>
        <h4>头部文件(模板)修改：<small>包含以下文件</small></h4>
        <dl class="dl-horizontal">
            <dt>标准模板</dt>
            <dd>http://192.168.0.7/svn/focus/branches/chanpinbu/pet/lvmama_common/src/main/config/template/header.htm</dd>
            <dt>专题js模板</dt>
            <dd>http://www.lvmama.com/zt/web/common/header.js</dd>
            <dt>注意：</dt>
            <dd>头部文件header-air.css在专题文件夹下也有一份</dd>
        </dl>
        
        <h4>底部文件footer修改：<small>统一为一个 copyright.js</small></h4>
        <dl class="dl-horizontal">
            <dt>develop</dt>
            <dd>http://pic.lvmama.com/js/common/copyright.js</dd>
        </dl>
        
        
        <h4>super中常用项目文件夹：</h4>
        
        <dl class="dl-horizontal">
            <dt>首页及频道：</dt>
            <dd>E:\SVN_work\super-chanpinbu\Super_front\WebContent\WEB-INF\pages\www</dd>
            <dt>我的驴妈妈后台：</dt>
            <dd>E:\SVN_work\super-chanpinbu\Super_front\WebContent\WEB-INF\pages\myspace</dd>
            <dt>点评项目：</dt>
            <dd>E:\SVN_work\super-chanpinbu\Super_front\WebContent\WEB-INF\pages\comment</dd>
            <dt>积分商城：</dt>
            <dd>E:\SVN_work\super-chanpinbu\Super_front\WebContent\WEB-INF\pages\shop</dd>
            
        </dl>
        <h4>focus中常用项目文件夹：</h4>
        <dl class="dl-horizontal">
            <dt>搜索结果页：</dt>
            <dd>E:\SVN_work\focus\pet\pet_search\src\main\webapp\WEB-INF\ftl</dd>
            <dt>登陆注册</dt>
            <dd>E:\SVN_work\focus\pet\pet_sso\src\main\webapp\login.jsp</dd>
            <dt>景点详情页</dt>
            <dd>E:\SVN_work\focus\pet\pet_dest\src\main\webapp\WEB-INF\pages\scenicDetail\scenicDetail.ftl</dd>
            
            <dt>度假酒店：</dt>
            <dd>E:\SVN_work\focus\pet\pet_search\src\main\webapp\WEB-INF\ftl\hotel\hotel_search.ftl</dd>
        </dl>
        
        <dl class="dl-horizontal">
            <dt>public路径</dt>
            <dd>E:\SVN_work\focus\pet\pet_topic\src\main\webapp\WEB-INF\pages\public</dd>
        </dl>
        
        <h4>SVN 产品部分支</h4>
        <dl class="dl-horizontal">
            <dt>PIC：</dt>
            <dd>http://192.168.0.7/svn/pics/branches/develop</dd>
            <dt>产品部分支-super：</dt>
            <dd>http://192.168.0.7/svn/super/branches/chanpinbu</dd>
            <dt>产品部分支-focus：</dt>
            <dd>http://192.168.0.7/svn/focus/branches/chanpinbu</dd>
        </dl>
        
        <h4>SVN 主干</h4>
        <dl class="dl-horizontal">
            <dt>PIC：</dt>
            <dd>http://192.168.0.7/svn/pics/trunk</dd>
            <dt>super：</dt>
            <dd>http://192.168.0.7/svn/super/trunk</dd>
            <dt>focus：</dt>
            <dd>http://192.168.0.7/svn/focus/trunk</dd>
            <dt>资讯 info：</dt>
            <dd>http://192.168.0.7/svn/others/projects/info/trunk</dd>
            <dt>攻略 guide：</dt>
            <dd>http://192.168.0.7/svn/others/projects/guide/trunk</dd>
        </dl>
        <h4>常用测试地址：<small>可以使用SwitchHosts!管理工具切换host</small></h4>
        <h5>仿真243-245：</h5>
<pre>
# 仿真测试环境，通常称 243-245 环境
192.168.0.243 www.lvmama.com
192.168.0.243 cmt.lvmama.com
192.168.0.243 dest.lvmama.com
192.168.0.243 search.lvmama.com
192.168.0.243 cc.lvmama.com
192.168.0.243 login.lvmama.com
192.168.0.243 pcadmin.lvmama.com
192.168.0.243 super.lvmama.com
192.168.0.243 pay.lvmama.com

192.168.0.245 pic.lvmama.com
</pre>
        <h5>临时测试：</h5>
<pre>
# 配合最新项目的测试地址
10.3.1.43 pic.lvmama.com
10.3.1.43 s1.lvjs.com.cn
10.3.1.43 s2.lvjs.com.cn
10.3.1.43 s3.lvjs.com.cn
</pre>
            
    </div>
<pre class="prettyprint linenums">

</pre>


<h3>这里收集和汇总各项目对应的文件：</h3>
<div id="uyan_frame"></div>


</div>

<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>

<!-- UY BEGIN -->
<script type="text/javascript">
$(function(){
    // make code pretty
    window.prettyPrint && prettyPrint()
})


var uyan_config = {
    'title':'前端开发框架 #pandora#', 
    'du':'pandoraui.com'
};
</script>
<script type="text/javascript" id="UYScript" src="http://v1.uyan.cc/js/iframe.js?UYUserId=0" async=""></script>
<!-- UY END -->
</body>
</html>
