//封装表单数据为JSON字符串，用于处理负责表单对象
//wgl 20190819
$.fn.toJSON = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        var name = this.name;
        var value = this.value;
        var paths = this.name.split(".");
        var len = paths.length;
        var obj = o;
        $.each(paths,function(i,e){
            if(i == len-1){
                if (obj[e]) {
                    if (!obj[e].push) {
                        obj[e] = [obj[e]];
                    }
                    obj[e].push(value || '');
                } else {
                    obj[e] = value || '';
                }
            }else{
                if(!obj[e]){
                    obj[e] = {};
                }
            }
            obj = o[e];
        });
    });
    return JSON.stringify(o);
};