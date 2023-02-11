//每次调用$.get或者$.post或者$.ajax会先调用以下函数
$.ajaxPrefilter(function(options){
    options.url = 'http://www.liulongbin.top:3007' + options.url;
})