//每次调用$.get或者$.post或者$.ajax会先调用以下函数
$.ajaxPrefilter(function(options){
    options.url = 'http://www.liulongbin.top:3007' + options.url;


//统一为有权限的接口，设置headers请求
if(options.url.indexOf('/my') != -1){
    options.headers = {
        Authorization:localStorage.getItem('token')||''  
    }
}

//全局统一挂载  complete 回调函数
options.complete = function(res){
    console.log(res.responseJSON);
    //在complete回调函数中，可以使用res.responseJSON拿到
    //服务器响应回来的数据
    if(res.responseJSON.status===1 && res.responseJSON.message=='身份认证失败！'){
        //1.强制清空token
        localStorage.removeItem('token')
        //2.强制跳转到登录页面
        location.href = '/login.html'
    }
}




})