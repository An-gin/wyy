var btn = document.querySelector(".submit");
btn.addEventListener('click',submit)
function submit(){
    // 验证表单数据
    var username = document.querySelector("[name='username']").value;
    if(username === ''){
        layer.msg('用户名必填')
        return false;
    }
    // 代码能走到这里，用户名填过了
    var reg = /^[a-zA-Z][a-zA-Z0-9]{2,7}$/;
    if(!reg.test(username)){
        layer.msg('用户名：字母开头，字母、数字组成，3~8位')
        return false;
    }
    // 密码校验
    var password = document.querySelector("[name='password']").value;
    if(password===''){
        layer.msg('密码必填')
        return false;
    }
    // 密码：数字、字母自称，6~12位
    var reg = /^[a-zA-Z0-9]{6,12}$/;
    if(!reg.test(password)){
        layer.msg('密码：数字、字母自称，6~12位')
        return false
    }
    // 确认密码
    var repassword = document.querySelector("[name='repass']").value;
    if(repassword!==password){
        layer.msg('两次不一致')
        return false
    }

    var agree = document.querySelector("[name='agree']");
    if(!agree.checked){
        layer.msg('请同意协议')
        return false;
    }
    var index = layer.load(1, {
        shade: [0.5,'#666'] //0.1透明度的白色背景
    });
    btn.disabled = true
    // 发送ajax
    pAjax({
        url:'./php/register.php',
        data:{
            username,
            password,
        },
        type:"post"
    }).then(res=>{
        layer.close(index)
        // console.log(res);
        // var status = res.meta.status;
        // var msg = res.meta.msg;
        var {meta:{status,msg}} = res;
        console.log(res);
        // console.log(status,msg);
        var msgIndex = layer.msg(msg);
        if(status===0){
            setTimeout(()=>{
                layer.close(msgIndex)
                location.href = 'login.html'
            },1000)
        }else{
            btn.disabled = false;
            return false;
        }
    })
}