var _alert = {
        uid:40100000,
        version:"1.0.0",
        init:function(domObject){
            this.options._obj = domObject;
            this.events.closeEvent(domObject);
        },
        options:{
            _obj:{},//公共变量，永远不会变
        },
        events:{
            /**
            * @Author: zhangjinglin
            * @Email: zhangjinglin@jd.com
            * @Date: Created in 2018/2/9 下午5:18
            * @Description:绑定关闭事件
            * @params <Object> opt
            * @paramsDescription
            * {
            *   selector:_selector,//选择器模块
            *   module:_module,//模块名称
            *   options:_options,//所有该模块的附加对象
            *   array:_retSelector//传入的新模块对象
            * }
            */

            closeEvent:function(opt){
                var $ret = "";
                $.each(opt.array,function(i,n){
                    $ret = $(n).find(opt.options.closeSelector);
                    if($ret.length > 0){
                        $ret.off("click",_alert.eventFn.closeFn).on("click",_alert.eventFn.closeFn);
                    }
                })
            }
        },
        eventFn:{
            closeFn:function(){
                if(_alert.options._obj.options.isRemove){
                    $(this).closest(_alert.options._obj.selector).remove();
                }else{
                    $(this).closest(_alert.options._obj.selector).hide();
                }

            }
        },
        ajax:{}

}


