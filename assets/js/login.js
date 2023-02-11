$(function(){

    //点击 去注册的连接
    $('#link_reg').click(function(){
        // $('.login-box').css('display','none');
        // $('.reg-box').css('display','block');
        $('.login-box').hide();
        $('.reg-box').show();
    })
    //点击 去登录的连接
    $('#link_login').click(function(){
        // $('.reg-box').css('display','none');
        // $('.login-box').css('display','block');
        $('.reg-box').hide();
        $('.login-box').show();
    })

    //从layui中获取form 对象
    let form = layui.form;
    //通过form.verify()函数自定义校验规则
    form.verify({
        //自定义了一个叫做pwd的校验规则
        pwd: [/^[\S]{6,12}$/,'密码必须6到12位且不能出现空格'],
        //校验两次密码是否一致的规则
        repwd: function(value){
            //通过形参拿到的是确认密码框中的内容
            //还需要拿到密码框中的内容
            //然后进行一次等于判断
            //如果判断失败，则return 一个提示消息
            let pwd = $('.reg-box [name=pwd]').val();
            if(pwd != value){
                return '两次密码不一致';
            }
        }
    })

    // //保证两次输入的密码一致
    // $('#reg_btn').click(function(e){
    //     e.preventDefault();
    //     if($('#first_pwd').val() !== $('#second_pwd').val()){
    //         return alert('两次密码不一致')
    //     }
    // })

    //监听注册表单事件
    let layer = layui.layer;
    $('#form_reg').on('submit',function(e){
        e.preventDefault();
        $.post('/api/reguser',
        {
            username: $('.reg-box [name=username]').val(),
            password: $('.reg-box [name=pwd]').val()
        },
        function(res){
            if(res.status != 0) return layer.msg(res.message);
            layer.msg('注册成功！');
            $('#link_login').click();
        }
        )
    })

    //监听登录表单事件
    $('#form_login').on('submit',function(e){
        e.preventDefault();
        $.post('/api/login',
        // $(this).serialize(),
        {
            username: $('.login-box [name=username]').val(),
            password: $('.login-box [name=pwd]').val()
        },
        function(res){
            if(res.status != 0) return layer.msg(res.message);
            // console.log(res);
            layer.msg('登录成功~');
            //将登录成功得到的token字符串，保存到localstorage中
            localStorage.setItem('token',res.token);
            //跳转到后台主页
            location.href = '/index.html'
        }
        )
    })

})