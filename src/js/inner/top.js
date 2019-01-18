var _top = {
        uid:50200000,
        version:"1.0.0",
        init:function(domObject){
            this.options._obj = domObject;
            this.events.topEvent(domObject);
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
            topEvent:function(opt){
                var $ret = "",
                    position = "",
                    _left = "",
                    _top = "",
                    _right = "",
                    _bottom = "",
                    array = opt.array;
                $.each(array,function(i,n){
                    var $wrap = $(this).parent();
                    if($wrap.hasClass("zr-top-wrap")){
                        position = $wrap.attr("data-position")
                        position = position.split(" ");
                        _top = position[0];
                        _right = position[1];
                        _bottom = position[2];
                        _left = position[3];

                        $wrap.css({
                             position:"fixed",
                             left:_left,
                             top:_top,
                             right:_right,
                             bottom:_bottom,
                             zIndex:8200

                        })
                        $wrap.off("click").on("click",function(){
                            //
                            $(document).scrollTop(1);
                            //
                        })
                    }
                })
            }
        },
        eventFn:{
        },
        ajax:{}
}
