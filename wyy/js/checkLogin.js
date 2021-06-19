// 判断用户是否登录--判断cookie中会否存在username的值
$(function(){
    var username = getCookie('username');
    var login = document.querySelector('.a-');
    if(username){
      var str = `
      <a class="a-">已登录</a>
      <a href="javascript:;" class="logout">退出</a>
      `;
      login.innerHTML = str;
      // 退出功能
      var logout = document.querySelector('.logout');
      logout.onclick = function(){
        layer.confirm('你确定要退出吗？',
        {
          btn:['确定','取消']
        },
        function(){
          // 删除cookie
          delCookie('username');
          login.innerHTML = `<a class="a-" href="login.html">登录</a>`;
          layer.msg('退出成功',{icon:1,time:500})
        },
        function(){
          layer.msg('已取消',{icon:1,time:500})
          return false;
        }
        )
      }
    }
  })