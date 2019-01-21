var _input = {
        uid:30100000,
        version:"1.0.0",
        init:function(domObject){
            this.options._obj = domObject;
            this.events.bindEvent(domObject);
	        // this.events.showIconEvent(domObject);
        },
        options:{
            _obj:{},//公共变量，永远不会变
	        cacheName:"input_cache"
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
            bindEvent:function (opt) {
	            var $ret1 = "";
	            if (opt.selector == ".nv-textarea"){
		            $.each(opt.array,function(i,n){
		            	//缓存_obj'
			            $(n).data(_input.options.cacheName,_input.options._obj);
			            //
			            if ($(n).length > 0){
				            $(n).wrap("<div class='nv-input-group'></div>");
				           var  maxLength = $(n).attr("maxLength"),
					           txtLength = $.trim($(n).val()).length || 0,
				                txtNum = "<div class='nv-input-num'><span>"+ txtLength +"</span><span>/</span><span>" + maxLength + "</span></div>";
				           if (maxLength){
					           $(n).after(txtNum);
					           $(n).off("keyup").on("keyup",_input.eventFn.inputNumFn);
				           }
			            }
		            })
	            }else {
		            $.each(opt.array,function(i,n){
		            	if ($(n).hasClass(opt.options.clearClassName)){
				            //缓存_obj'
				            $(n).data(_input.options.cacheName,_input.options._obj);
				            //
				            $(n).wrap("<div class='nv-input-group'></div>");
				            var iconHtml = '<i class="nvicon-close-circle"></i>';
				            $(n).after(iconHtml);
				            $ret1 = $(n).closest(opt.options.groupSelector).find(".nvicon-close-circle");
				            $ret1.data(_input.options.cacheName,_input.options._obj);
				            $(n).off("input").on("input",_input.eventFn.showIconFn);
				            if($ret1.length > 0){
					            $ret1.off("click").on("click",_input.eventFn.clearFn);
				            }
			            }
		            })
	            }
            }
        },
        eventFn:{
            clearFn:function(){
	            var _obj = $(this).data(_input.options.cacheName);
	            $(this).closest(_obj.options.groupSelector).find(_obj.selector).val("");
	            $(this).hide();
            },
            showIconFn:function () {
	            var _obj = $(this).data(_input.options.cacheName);
                if ($(this).val().length > 0){
	                $(this).closest(_obj.options.groupSelector).find(".nvicon-close-circle").show();
                }else {
	                $(this).closest(_obj.options.groupSelector).find(".nvicon-close-circle").hide();
                }
            },
	        inputNumFn:function () {
            	var _obj = $(this).data(_input.options.cacheName);
		        var txtLength = $.trim($(this).val()).length,
			        maxLength = $(this).attr("maxLength");
		        $(this).closest(_obj.options.groupSelector).find(_obj.options.txtNumSelector).find("span").eq(0).text(txtLength);
		        if (txtLength == 0) {
			        $(this).closest(_obj.options.groupSelector).find(_obj.options.txtNumSelector).find("span").eq(0).css("color","rgba(0,0,0,0.25)");
		        }else if (txtLength < maxLength){
			        $(this).closest(_obj.options.groupSelector).find(_obj.options.txtNumSelector).find("span").eq(0).css("color","rgba(0,0,0,0.45)");
		        }else {
			        $(this).closest(_obj.options.groupSelector).find(_obj.options.txtNumSelector).find("span").eq(0).css("color","red");
		        }
	        }
        },
        ajax:{}
}
