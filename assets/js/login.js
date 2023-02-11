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
})