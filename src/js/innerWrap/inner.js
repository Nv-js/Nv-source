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



var _badge = {
    uid: 40800000,
    version: "1.0.0",
    init: function(domObject){
        this.eventFn.setNum(domObject);
    },
    options: {

    },
    events:{

    },
    eventFn:{
        setNum:function(domObject){
            var normalBadge=domObject.options.normalClassName;
            $(normalBadge).each(function (ind,ele) {
                setCharacter(ele);
            })
            $(document).on('DOMSubtreeModified',normalBadge,function(){
                setCharacter(this);
            })
            //DOM 监听测试
            $('#btn').click(function(){
                $('.nv-badge-normal:eq(0)').html('200000000000')
            });

            function setCharacter(ele){
                //判断徽标的内容里有没有非数字的东西
                //徽标的内容
                var str = $(ele).html();
                var re = /\D/;
                if(!re.test(str)){
                    //徽标内容转数字
                    var curNum=parseInt(str);
                    //最大值
                    var max=parseInt($(ele).attr('data-max'));
                    //如果没有max 属性，或其属性非数字
                    if(!max){
                        //默认99
                        max=99;
                    }
                    if(curNum>max){
                        $(ele).html(max+'+');
                    }
                }
            }
        }
    },
    ajax:{}

}


var _checkbox = {
    uid:30400000 ,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
        closeEvent:function(opt){
            //console.log(opt);
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    var str="",
                        label=$("<label class='nv-checkbox-module'></label>");
                    if($(elem).get(0).disabled){
                        label.addClass("nv-checkbox-disable");
                    }
                    if($(elem).get(0).checked){
                        label.addClass(_checkbox.options._obj.options.checkedClassName);
                    }
                    if($(elem).hasClass("nv-checkbox-all")){
                        label.addClass(_checkbox.options._obj.options.checkedAllClassName);
                    }
                    str+='<div class="nv-checkbox-simulation"><span class="nv-checkbox-normal">';
                    str+='<span></span></span><div class="nv-checkbox-text">';
                    $(elem).attr("title")==undefined ? str+='</div></div>' : str+=$(elem).attr("title")+'</div></div>';
                    label.append(str);
                    $(elem).after(label).addClass("nv-checkbox-hide");
                    //判断一开始是否全选
                    if($(elem).next().length>0){
                        if($(elem).next().hasClass(_checkbox.options._obj.options.checkedAllClassName) && $(elem).get(0).checked){
                            var that=$(elem);
                            var check= $(elem).parents(".nv-checkbox-container").eq(0).find(".nv-checkbox-sigle-container input[type='checkbox']");
                            $.each(check, function (index,elem) {
                                $(elem).get(0).checked=that.get(0).checked;
                                //判断是否创建出了模拟框架
                                if($(elem).next().hasClass("nv-checkbox-module")){
                                    $(elem).get(0).checked ? $(elem).next().addClass(_checkbox.options._obj.options.checkedClassName) :$(elem).next().removeClass(_checkbox.options._obj.options.checkedClassName);
                                }
                            })
                        }
                    }
                    //给checkbox添加自定义事件
                    _checkbox.eventFn.customEventFn(elem);
                    //绑定点击事件
                    label.off("click",_checkbox.eventFn.checkedFn).on("click",_checkbox.eventFn.checkedFn);
                })
            }
        }
    },
    eventFn:{
        checkedFn: function () {
                if($(this).hasClass(_checkbox.options._obj.options.disabledClassName)){
                    return;
                }else{
                    if($(this).hasClass(_checkbox.options._obj.options.checkedClassName)){
                        $(this).removeClass(_checkbox.options._obj.options.checkedClassName);
                    }else{
                        $(this).addClass(_checkbox.options._obj.options.checkedClassName)
                    }
                    $(this).prev().get(0).checked=!$(this).prev().get(0).checked;
                    //判断是否全选
                    if($(this).parent().hasClass(_checkbox.options._obj.options.allContainerClassName)){
                        if($(this).hasClass(_checkbox.options._obj.options.checkedAllClassName)){
                            var that_check=$(this).prev().get(0).checked;
                            if(that_check){
                                $(this).addClass(_checkbox.options._obj.options.checkedClassName);
                                $(this).find(".nv-checkbox-normal").children("span").removeClass(_checkbox.options._obj.options.uncheckClassName)
                            }
                            var check= $(this).parents(".nv-checkbox-container").eq(0).find(".nv-checkbox-sigle-container input[type='checkbox']");
                            $.each(check, function (index,elem) {
                                $(elem).get(0).checked=that_check;
                                $(elem).get(0).checked ? $(elem).next().addClass(_checkbox.options._obj.options.checkedClassName) :$(elem).next().removeClass(_checkbox.options._obj.options.checkedClassName)
                            })
                        }
                    }
                    if($(this).parent().hasClass(_checkbox.options._obj.options.sigleContainerClassName)){
                        var check=$(this).siblings("input[type='checkbox']"),
                            is_check_num=0,
                            all_check_status=$(this).parents("."+_checkbox.options._obj.options.containerClassName).eq(0).find(".nv-checkbox-all");
                        if(check.length>0){
                            $.each(check,function(index,elem){
                                if($(elem).get(0).checked){
                                    is_check_num+=1;
                                }
                            })
                            if(is_check_num==check.length){
                                all_check_status.addClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.find(".nv-checkbox-normal").find("span").removeClass()
                                all_check_status.prev().get(0).checked=true;
                            }else{
                                all_check_status.find(".nv-checkbox-normal").find("span").addClass(_checkbox.options._obj.options.uncheckClassName)
                                all_check_status.addClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.prev().get(0).checked=false;
                            }
                            if(is_check_num==0){
                                all_check_status.removeClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.find(".nv-checkbox-normal").find("span").removeClass()
                            }
                        }
                    }
                    //添加onchnage事件的监听
                    $(this).prev().trigger("change");
                }
        },
        customEventFn:function(elem){
            $(elem)[0]["nvChange"]=function(opts){
                opts= $.extend({
                    disabled:false,
                    checked:false
                },opts||{})
                //判断是否禁用
                if(opts.disabled){
                    $(this).attr("disabled","disabled");
                    $(this).next().addClass("nv-checkbox-disable")
                }else{
                    $(this).removeAttr("disabled");
                    $(this).next().removeClass("nv-checkbox-disable")
                }
                //判断是否选中
                if(opts.checked){
                    $(this).attr("checked","checked");
                    $(this).next().addClass("nv-checkbox-checked")
                }else{
                    $(this).removeAttr("checked");
                    $(this).next().removeClass("nv-checkbox-checked")
                }
            }
        }
    },
    ajax:{}

}

var _dropdown = {
        uid:20300000,
        version:"1.0.0",
        init:function(domObject){
            this.options._obj = domObject;
            this.events.eventList(domObject.array);
        },
        options:{
            _obj:{},//公共变量，永远不会变
        },
        events:{
            //事件触发角
            eventList:function(array){
                var eventName = "",
                    centerName = "",
                    _w1 = 0,
                    $menu,
                    _w2 = 0,
                    _l1 = 0;
                //事件列表
                $.each(array,function(i,n){
                    var _this = this;
                    //居中方式
                    centerName = $(this).hasClass(_dropdown.options._obj.options.centerClassName);
                    if(centerName){
                        _w1 = parseFloat($(this).width());
                        $menu = $(this).find("."+_dropdown.options._obj.options.menuClassName);
                        if($menu.length){
                            _w2 = parseFloat($menu.width());
                            _l1 = _w1/2 - _w2/2;
                            $menu.css("left",_l1);
                        }
                    }
                    //
                    eventName = $(this).attr(_dropdown.options._obj.options.domEventName);
                    $(this).on(eventName === "click" ? eventName : "click mouseover",function(ev){
                        ev.stopPropagation();
                        if(ev.type === "click" && $(this).hasClass(_dropdown.options._obj.options.showMenuClassName)){
                            $(this).removeData(_dropdown.options._obj.options.cacheName);
                            $(this).removeClass(_dropdown.options._obj.options.showMenuClassName);
                            return false;
                        }
                        //显示中
                        $(this).data(_dropdown.options._obj.options.cacheName,1);
                        $(this).addClass(_dropdown.options._obj.options.showMenuClassName);
                        //屏幕底部自动调整位置
                        //先判断select显示出来是不是会超出屏幕底部
                        var top=$(this).offset().top,
                            height=$(this).parent().find("."+_dropdown.options._obj.options.menuClassName).height(),
                            clientHeight=$(window).height(),
                            documentTop=$(document).scrollTop();
                        var ht=clientHeight-(top-documentTop)-$(this).height();
                        ht=parseInt(Math.abs(ht));
                        if(ht<parseInt(height)){
                            //到可视窗口底部距离要小于下拉框的距离，此时下拉框要朝上
                            $(this).parent().find("."+_dropdown.options._obj.options.menuClassName).css({
                                top:"-"+(parseInt(height)+5)+"px"
                            })
                        }else{
                            $(this).parent().find("."+_dropdown.options._obj.options.menuClassName).css({
                                top:"36px"
                            })
                        }
                    })
                    if(eventName !== "click"){
                        $(this).on("mouseout",function(ev){
                            var _this = this;
                            $(this).removeData(_dropdown.options._obj.options.cacheName);
                            nv.tools.later(function(){
                               if(!$(_this).data(_dropdown.options._obj.options.cacheName)){
                                   $(_this).removeData(_dropdown.options._obj.options.cacheName);
                                   $(_this).removeClass(_dropdown.options._obj.options.showMenuClassName);
                               }
                            },150);
                        })
                    }
                    //阻止向上冒泡
                    $(this).find("."+_dropdown.options._obj.options.menuClassName).on("click",function(ev){
                        ev.stopPropagation();
                        nv.tools.later(function(){
                            $(_this).removeData(_dropdown.options._obj.options.cacheName);
                            $(_this).removeClass(_dropdown.options._obj.options.showMenuClassName);
                        },300);
                    })

                })
                //点击其他地方取消相关样式
                nv.dom.clickQueen.push(function(){
                    $.each(array,function(i,n){
                        $(this).removeClass(_dropdown.options._obj.options.showMenuClassName);
                    })
                })
            }
        },
        eventFn:{
            listStatus:function(){}
        },
        ajax:{}
}
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

var _layout = {
    uid:10300000,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.eventList(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
        //事件触发角
        eventList:function(opt){
            var $ret1 = "";
            $.each(opt.array,function(i,n){
                if($(this).hasClass(_layout.options._obj.options.sideTriggerClassName)){
                    $ret1 = $(this).find("."+_layout.options._obj.options.navSelector);
                    $ret1 = $ret1.attr("trigger");
                    if($ret1){
                        _layout.events.eventTriggerother(this,$ret1);
                    }
                }
            })
        },
        //
        eventTriggerother:function(dom,domTrigger){
            $("#"+domTrigger).data("dom",dom).on("click",function(){
                var $dom = $($(this).data("dom"));
                //
                var $nav = $dom.find("."+_layout.options._obj.options.navSelector),
                    $side = $nav.closest("."+_layout.options._obj.options.sideClassName);
                if(!$side.hasClass(_layout.options._obj.options.collapsedClassName)){
                    $side.addClass(_layout.options._obj.options.collapsedClassName);
                }else{
                    $side.removeClass(_layout.options._obj.options.collapsedClassName);
                }
                //
            })
        },
        //事件触发收起与展开
        eventTrigger:function(dom){
            var $trigger = $(dom).find("."+_layout.options._obj.options.trigger);
            if($trigger.length == 0){
                $trigger = $(dom).parent().closest(_layout.options._obj.selector).find("."+_layout.options._obj.options.trigger);
            }
            $trigger.find("."+_layout.options._obj.options.trigger).on("click",function(){
                var $obj = $(this).closest("."+_layout.options._obj.options.sideTriggerClassName);
                alert($obj.length)
                var $side = $obj.find("."+_layout.options._obj.options.sideClassName),
                    $nav = $obj.find("."+_layout.options._obj.options.navSelector);
                if(!$side.hasClass(_layout.options._obj.options.collapsedClassName)){
                    $side.addClass(_layout.options._obj.options.collapsedClassName);
                }else{
                    $side.removeClass(_layout.options._obj.options.collapsedClassName);
                }
            })
        }
    },
    eventFn:{

    },
    ajax:{}
}


var _nav = {
    uid: 20200000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.eventList(domObject);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
        cacheName: "nav_cache"
    },
    events: {
        //事件触发角
        eventList: function (opt) {
            var $ret1 = "",tri="",$ret2="";
            $.each(opt.array, function (i, n) {
                //n代表每个nv-nav的容器ul
                $ret1 = $(n).find(opt.options.itemClassName);//nv-nav-item 代表每个li
                tri = $(n).attr("trigger");
                $ret2 = $("#"+tri);
                //缓存_obj'
                $ret1.data(_nav.options.cacheName, _nav.options._obj);
                $ret2.data(_nav.options.cacheName, _nav.options._obj);
                //
                //判断是左侧菜单栏还是头菜单栏
                if($ret1.length > 0) {
                    $(n).on('mouseover',opt.options.itemClassName, _nav.eventFn.showMenu);
                    $(n).on('mouseout',opt.options.itemClassName, _nav.eventFn.hideMenu);
                }
                if ($(n).hasClass(opt.options.treeClassName)) {
                    $(n).on('click',opt.options.itemClassName, _nav.eventFn.showMenu);
                    if ($(n).hasClass(opt.options.shrinkClassName)) {
                        $ret2.off("click").on('click', _nav.eventFn.shrinkMenu);
                    }
                }
            })
        }
    },
    eventFn: {
        showMenu: function (ev) {
            var ev=ev||window.event;
            //取缓存
            var _obj = $(this).data(_nav.options.cacheName);
            //disable状态不可点击
            if ($(this).hasClass(_obj.options.disableClassName)) {
                return false;
            }

            if (ev.type == 'mouseover') {
                if ($(this).closest(_obj.selector).hasClass(_obj.options.treeClassName) && !($(this).closest(_obj.selector).hasClass(_obj.options.collapsedClassName))) {
                    return false;
                } else {
                    $(this).addClass(_obj.options.showClassName).siblings().removeClass(_obj.options.showClassName);
                    $(this).data(_obj.options.showClassName,1);
                }

            } else {
                ev.stopPropagation();
                if($(this).find("."+_obj.options.selectedClassName).length==0){
                    //子节点中没有被选中的
                    $(this).find(_obj.options.itemClassName).removeClass(_obj.options.showClassName);
                }
                //点击之后判断如果是禁用状态默认展开
                if ($(this).find(_obj.options.itemClassName).hasClass(_obj.options.disableClassName)) {
                    $(this).find('.' + _obj.options.disableClassName).addClass(_obj.options.showClassName);
                }
                $(this).toggleClass(_obj.options.showClassName).siblings().removeClass(_obj.options.showClassName);

                //if (!$(this).hasClass(_obj.options.showClassName)) {
                //    $(this).find(_obj.options.itemClassName).removeClass(_obj.options.showClassName);
                //}
                //添加Active效果
                if ($(this).find(_obj.options.itemClassName).length == 0) {
                    $(this).closest(_obj.selector).find(_obj.options.itemClassName).removeClass(_obj.options.selectedClassName);
                    $(this).addClass(_obj.options.selectedClassName);
                    var $doms=$(this).parents(_obj.options.itemClassName).last().siblings();
                    if($(this).parents(_obj.options.itemClassName).length>0){
                        $doms.removeClass(_obj.options.showClassName);
                        $doms.find(_obj.options.itemClassName).removeClass(_obj.options.showClassName);
                    }
                    $(this).closest("." + _obj.options.collapsedClassName + ">" + _obj.options.itemClassName).addClass(_obj.options.selectedClassName);
                }
                //添加被选中属性
                if (!$(this).attr("nv-isselected")) {
                   //判断是否是叶子节点
                    if($(this).find(_obj.options.itemClassName).length == 0){
                        $(this).closest("."+_obj.options.shrinkClassName).find(_obj.options.itemClassName).attr("nv-isselected", "");
                        $(this).attr("nv-isselected", "selected");
                    }else{
                        return false;
                    }
                } else {
                    $(this).attr("nv-isselected", "")
                }
            }
        },
        hideMenu: function () {
            //取缓存
            var _obj = $(this).data(_nav.options.cacheName);
            //当是树形状态
            if ($(this).closest(_obj.selector).hasClass(_obj.options.treeClassName) && !($(this).closest(_obj.selector).hasClass(_obj.options.collapsedClassName))) {
                return false;
            } else {
                var _this = this;
                // nv.tools.later(function () {
                //     _this.stop().removeClass(_obj.options.showClassName)
                // }, 150)
                //  $(this).stop().removeClass(_obj.options.showClassName).delay(150);

                $(this).removeData(_obj.options.showClassName);
                setTimeout(function(){
                    if(!$(_this).data(_obj.options.showClassName)){
                        $(_this).removeData(_obj.options.showClassName);
                        $(_this).removeClass(_obj.options.showClassName);
                    }
                },150);
            }
        },
        shrinkMenu: function () {
            //取缓存
            var _obj = $(this).data(_nav.options.cacheName),
                name = $(this).attr("id"),
                $target = $(".nv-nav[trigger='"+name+"']");
            //
            $(this).children('.nvicon-left').toggleClass('nvicon-right');
            $target.toggleClass("nv-nav-collapsed");
            $target.find(_obj.options.itemClassName).removeClass(_obj.options.showClassName);
            $target.find("> " + _obj.options.itemClassName + "[nv-isselected=selected]").addClass(_obj.options.selectedClassName);
            var items=$target.find(_obj.options.itemClassName + "[nv-isselected=selected]").parents(_obj.options.itemClassName);
            if ($target.hasClass(_obj.options.collapsedClassName)) {
                if(items.length>0){
                    //有父级节点
                    items.last().addClass(_obj.options.selectedClassName)
                }else{
                    //无父级节点
                    return;
                }
            }else{
                //判断有选中就默认展开
                $target.find("> " + _obj.options.itemClassName).removeClass(_obj.options.selectedClassName);
                if(items.length>0){
                    items.addClass(_obj.options.showClassName);
                }else{
                    $target.find("> " + _obj.options.itemClassName + "[nv-isselected=selected]").addClass(_obj.options.selectedClassName);
                }
            }
        }
    },
    ajax: {}
};

var _radio = {
    uid:30300000 ,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
        closeEvent:function(opt){
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    //console.log($(elem).prop("class"));
                        var pubClass=$(elem).prop("class"),
                            label;
                        if(pubClass.indexOf("nv-radio-vertical")>-1){
                            pubClass="nv-radio-middle";
                            label=$("<label class='"+pubClass+" nv-radio-module"+"'></label>");
                        }else{
                            label=$("<label class='nv-radio-module'></label>");
                        }
                        var str="";
                        if($(elem).get(0).disabled){
                            label.addClass(_radio.options._obj.options.disabledClassName);
                        }
                        if($(elem).get(0).checked){
                            label.addClass(_radio.options._obj.options.radioedClassName);
                        }
                        $(elem).after(label).addClass("nv-radio-hide");
                        str+='<div class="nv-radio-simulation"><span class="nv-radio-normal"><span></span></span><div class="nv-radio-text">';
                        $(elem).attr("title")==undefined ? str+='</div></div>' : str+=$(elem).attr("title")+'</div></div>';
                        label.append(str);
                        //绑定自定义事件
                        _radio.eventFn.customEventFn(elem);
                        label.off("click",_radio.eventFn.radioFn).on("click",_radio.eventFn.radioFn);
                })
                
            }
        }
    },
    eventFn:{
        radioFn: function () {
            if($(this).hasClass(_radio.options._obj.options.radioedClassName)){
                return;
            }else{
                if($(this).hasClass(_radio.options._obj.options.disabledClassName)){
                    return;
                }else{
                    var name=$("[name='"+$(this).prev().attr("name")+"']");
                    $.each(name, function (index,elem) {
                        $(elem).next().removeClass(_radio.options._obj.options.radioedClassName);
                    })
                    $(this).addClass(_radio.options._obj.options.radioedClassName);
                    $(this).prev().get(0).checked=true;
                    //添加onchnage事件的监听
                    $(this).prev().trigger("change");
                }

            }
        },
        customEventFn:function(elem){
            $(elem)[0]["nvChange"]=function(opts){
                opts= $.extend({
                    disabled:false,
                    checked:false
                },opts||{})
                //判断是否禁用
                if(opts.disabled){
                    $(this).attr("disabled","disabled");
                    $(this).next().addClass("nv-radio-disable")
                }else{
                    $(this).removeAttr("disabled");
                    $(this).next().removeClass("nv-radio-disable")
                }
                //判断是否选中
                if(opts.checked){
                    $(this).attr("checked","checked");
                    $(this).next().addClass("nv-radio-radioed")
                }else{
                    $(this).removeAttr("checked");
                    $(this).next().removeClass("nv-radio-radioed")
                }
            }
        }
    },
    ajax:{}

}



var _select = {
	uid:30500000,
	version:"1.0.0",
	init:function(domObject){

        this.options._obj = domObject;
		this.events.eventList(domObject);
	},
	options:{
		_obj:{},//公共变量，永远不会变
		cacheName:"select_cache"
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
		eventList:function(opt){
			$.each(opt.array,function(i,n){
				//缓存_obj'
				$(n).data(_select.options.cacheName,_select.options._obj);
				//
				_select.eventFn.getValue($(n));
				$(n).on("DOMNodeInserted",function () {
					$(n).nextAll(".nv-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
				$(n).on("DOMNodeRemoved",function () {
					$(n).nextAll(".nv-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
                //自定义事件监听DOM变化
				$(n)[0]["nvchange"] = function(opt){
					var opts = {
							eventFn:"",
							other:""
						},
						opt = $.extend(opts,opt||{});
					opt.eventFn();
					$(n).nextAll(".nv-unselect").eq(0).remove();
					_select.eventFn.getValue($(n));
				}

			});
			//点击其他地方取消相关样式
			nv.dom.clickQueen.push(function(){
				$.each(opt.array,function(i,n){
					$(_select.options._obj.options.contentClassName).addClass(_select.options._obj.options.hideClassName);
					$(_select.options._obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up")
				})
			})
		}
	},
	eventFn:{
		//获取select下option的value和text
		getValue:function(obj){
			var _obj = obj.data(_select.options.cacheName);
			obj.addClass(_obj.options.hideClassName);
			var opt = obj.find("option"),
				optArr = [];
			if (obj.find("option[selected]").length > 0){
				var optSelected = obj.find("option[selected]");
			}else if (obj.val() && !obj.attr("multiple")) {
				var optSelected = obj.find("option[value="+obj.val()+"]");
			}else if (obj.val() && obj.attr("multiple")){
				var optSelected = obj.find("option[selected]");
			}else {
				var optSelected = [];
			}
            if (opt.length > 0){
				for (var i = 0,j = opt.length; i < j; i++){
					optArr.push({
						optVal:$(opt[i]).val(),
						optText:$(opt[i]).text(),
						optSelected:$(opt[i]).attr("selected")
					})
				};
				_select.eventFn.Unselect(obj,optArr,optSelected);
			}
		},
		//生成虚拟select
		Unselect:function (obj,arr,optSelected) {
			var _obj = obj.data(_select.options.cacheName);
			var optHtml = "",
				inputHtml = "",
				inputContent = '',
				html = "",
				selectAll = '<dt class="nv-select-checkbox" nv-option-value=""><span class="nv-select-checkbox-normal"><span class=""></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
			for (var i = 0,j = arr.length; i < j; i++){
				if (obj.attr("multiple")){
					var selectClass = arr[i].optSelected?"nv-select-checkbox-checked":"";
					optHtml += '<dd class="nv-select-checkbox ' + selectClass +'" nv-option-value="' + arr[i].optVal +'" nv-option-text="' + arr[i].optText +'" title="'+arr[i].optText+'"><span class="nv-select-checkbox-normal"><span></span></span><div class="nv-select-checkbox-text">' + arr[i].optText + '</div></dd>';
				}else {
					optHtml += '<dd title="'+arr[i].optText+'" nv-option-value="' + arr[i].optVal + '">' + arr[i].optText + '</dd>';
				}
			};
			if (optSelected.length > 0){
                if (obj.attr("multiple")){
                	if (optSelected.length == arr.length){
                        selectAll = '<dt class="nv-select-checkbox nv-select-checkbox-checked" nv-option-value=""><span class="nv-select-checkbox-normal"><span class=""></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
					} else {
                        selectAll = '<dt class="nv-select-checkbox nv-select-checkbox-checked" nv-option-value=""><span class="nv-select-checkbox-normal"><span class="nv-select-checkbox-uncheck"></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
                    };
                    for (var i = 0,j = optSelected.length; i < j; i++){
                        inputContent += '<span>' + $(optSelected[i]).text() +  '<i nv-close-text="' + $(optSelected[i]).text() +'" nv-close-val="' + $(optSelected[i]).val() + '" class="nvicon-close"></i></span>';
                    };
				}else {
                    inputHtml = $(optSelected).text();
                    inputContent = '<input type="text" value="' + inputHtml + '" readonly="readonly" '
				};
			} else {
				inputHtml = arr[0].optText;
				inputContent = '<input type="text" placeholder="' + inputHtml + '" readonly="readonly" '
			};
			if (obj.attr("disabled")){
				html = '<div class="nv-unselect nv-select-disable"><div class="nv-select-title nv-input-group">' + inputContent +'disabled="disabled" class="nv-input">' +
					'<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + optHtml + '</dl></div>';
			}else if (obj.attr("multiple")){
				if (optSelected.length > 0){
                    html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group nv-select-values">' + inputContent +
                        '<i class="nvicon-arrow-down"></i></div><dl class="nv-select-content nv-select-hide">' + selectAll + optHtml + '</dl></div>';
				} else {
                    html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input">' +
                        '<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + selectAll + optHtml + '</dl></div>';
				};
			}else if (obj.hasClass(_obj.options.smClassName)){
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input nv-input-sm">' +
					'<span class="nv-input-addon nv-input-sm"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide nv-select-content-sm">' + optHtml + '</dl></div>';
			}else if (obj.hasClass(_obj.options.lgClassName)){
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input nv-input-lg">' +
					'<span class="nv-input-addon nv-input-lg"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide nv-select-content-lg">' + optHtml + '</dl></div>';
			}else {
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input">' +
					'<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + optHtml + '</dl></div>';
			};

			obj.after(html);
			_select.eventFn.clickFn(_obj);
			_select.eventFn.deleteOpt(_obj);
		},
		//虚拟select点击事件
		clickFn:function (_obj) {
			//value显示区域点击事件
			$(_obj.options.titleClassName).off("click").on("click",function (ev) {
				ev.stopPropagation();
				// $(_obj.options.contentClassName).addClass(_obj.options.hideClassName);
                var $contentDom = $(this).closest(_obj.options.unselectClassName).find(_obj.options.contentClassName),
                    $icon = $(this).find(".nvicon-arrow-down");

				if ($(this).closest(_obj.options.unselectClassName).hasClass(_obj.options.disableClassName)){
					return false;
				}else {
					//fix for guoming,toggle is removed by jQuery in high Level 2+
                    if($contentDom.hasClass(_obj.options.hideClassName)){
						//先判断select显示出来是不是会超出屏幕底部
						var top=$(this).offset().top,
							height=$(this).parent().find(_obj.options.contentClassName).height(),
							clientHeight=$(window).height(),
							documentTop=$(document).scrollTop();
						var ht=clientHeight-(top-documentTop)-$(this).height();
						ht=parseInt(Math.abs(ht));
						if(ht<parseInt(height)){
							//到可视窗口底部距离要小于下拉框的距离，此时下拉框要朝上
							$(this).parent().find(_obj.options.contentClassName).css({
								top:"-"+(parseInt(height)+5)+"px"
							})
						}else{
							$(this).parent().find(_obj.options.contentClassName).css({
								top:"36px"
							})
						}
                        $(_obj.options.unselectClassName).find(_obj.options.contentClassName).addClass(_obj.options.hideClassName);
                        $(_obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up");
                        $contentDom.removeClass(_obj.options.hideClassName);
                        $icon.addClass("nvicon-arrow-up");
					}else{
                        $contentDom.addClass(_obj.options.hideClassName);
                        $icon.removeClass("nvicon-arrow-up");
					}
				}
			});
			//虚拟option点击事件
			$(".nv-select-content dd").off("click").on("click",function (ev) {
				ev.stopPropagation();
                var $dtDom = $(this).closest(_obj.options.contentClassName).find("dt"),
                    $contentDom = $(this).closest(_obj.options.contentClassName),
                    $unselectDom = $(this).closest(_obj.options.unselectClassName);
				if ($(this).hasClass("nv-select-checkbox")){
					var optVal = $(this).attr("nv-option-value"),
						optText = $(this).attr("nv-option-text"),
						optArr = [],
						opt = $(this).closest(_obj.options.contentClassName).find("dd"),
						optLength = $(this).closest(_obj.options.contentClassName).find("dd").length;
					for (var i = 0,j = opt.length; i < j; i++){
						if ($(opt[i]).hasClass("nv-select-checkbox-checked")){
							optArr.push({
								optVal:$(opt[i]).attr("nv-option-value"),
								optText:$(opt[i]).attr("nv-option-text")
							})
						}
					};
					// $(this).toggleClass("nv-select-checkbox-checked");
					if ($(this).hasClass("nv-select-checkbox-checked")){
						$(this).removeClass("nv-select-checkbox-checked");
					} else {
						$(this).addClass("nv-select-checkbox-checked");
					};
					if ($(this).hasClass("nv-select-checkbox-checked")){
						optArr.push({
							optVal:optVal,
							optText:optText
						})
					}else {
						_select.eventFn.removeByValue(optArr,optVal);
					};
					_select.eventFn.appendDom($(this),_obj,optArr);
					_select.eventFn.deleteOpt(_obj);
					if (optArr && optArr.length < optLength && optArr.length > 0){
                        $dtDom.addClass("nv-select-checkbox-checked");
                        $dtDom.find(".nv-select-checkbox-normal").find("span").addClass("nv-select-checkbox-uncheck");
					}else if (optArr && optArr.length == optLength){
                        $dtDom.addClass("nv-select-checkbox-checked");
                        $dtDom.find(".nv-select-checkbox-normal").find("span").removeClass("nv-select-checkbox-uncheck");
					}else{
						var firstVal = $(this).closest(_obj.options.contentClassName).find("dd").eq(0).attr("nv-option-text");
						var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
						$unselectDom.find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);
						$contentDom.css({
							"top":$unselectDom.find(_obj.options.titleClassName).height() + 4
						});
						$dtDom.removeClass("nv-select-checkbox-checked");
					};
					_select.eventFn.bindVal($(this),_obj,optArr);
				}else {
					var optVal = $(this).attr("nv-option-value"),
						optText = $(this).text();
					$contentDom.addClass(_obj.options.hideClassName);
                    $unselectDom.find(_obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up");
                    $unselectDom.find("input").val(optText);
                    $unselectDom.prev(_obj.selector).eq(0).val(optVal);
                    $unselectDom.prev(_obj.selector).eq(0).trigger("change");
					// _select.eventFn.bindVal($(this),_obj,optArr);
				}
			});
			//全选点击事件
			$(".nv-select-content dt").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var optArr = [];
				// $(this).toggleClass("nv-select-checkbox-checked");
                if ($(this).hasClass("nv-select-checkbox-checked")){
                    $(this).removeClass("nv-select-checkbox-checked");
                } else {
                    $(this).addClass("nv-select-checkbox-checked");
                };
				if ($(this).hasClass("nv-select-checkbox-checked")){
					$(this).siblings("dd").addClass("nv-select-checkbox-checked");
					$(this).find(".nv-select-checkbox-normal").find("span").removeClass("nv-select-checkbox-uncheck");
					var ddArr = $(this).siblings("dd");
					for (var i = 0,j = ddArr.length; i < j; i++){
						optArr.push({
							optVal:$(ddArr[i]).attr("nv-option-value"),
							optText:$(ddArr[i]).attr("nv-option-text")
						})
					};
					_select.eventFn.appendDom($(this),_obj,optArr);
					_select.eventFn.deleteOpt(_obj);
				}else {
					$(this).siblings("dd").removeClass("nv-select-checkbox-checked");
					var firstVal = $(this).siblings("dd").eq(0).attr("nv-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);
					$(this).closest(_obj.options.contentClassName).css({
						"top":$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 4
					});
				};
				$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).find(".nvicon-arrow-down").addClass("nvicon-arrow-up");
				_select.eventFn.bindVal($(this),_obj,optArr);
			});

		},
		//根据value删除数组元素
		removeByValue:function (arr, val) {
			for(var i=0; i<arr.length; i++) {
				if(arr[i].optVal == val) {
					arr.splice(i, 1);
					break;
				}
			}
		},
		//往value展示区域渲染DOM
		appendDom:function (obj,_obj,optArr) {
			var html = "";
			for (var i = 0,j = optArr.length; i < j; i++){
				html += '<span>' + optArr[i].optText +  '<i nv-close-text="' + optArr[i].optText +'" nv-close-val="' + optArr[i].optVal + '" class="nvicon-close"></i></span>';
			};
			html = html + '<i class="nvicon-arrow-down"></i>';
			obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").html(html);
			obj.closest(_obj.options.contentClassName).css({
				"top":obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 14
			});
		},
		// value删除按钮事件
		deleteOpt:function (_obj) {
            // $(_obj.options.unselectClassName).find(".nvicon-close")
            $(_obj.options.unselectClassName).find(".nvicon-close").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var closeDomArr = $(this).closest(_obj.options.titleClassName).find(".nvicon-close"),
					closestDom = $(this).closest(_obj.options.unselectClassName);
				var optArr = [];
				for (var i = 0,j = closeDomArr.length; i < j; i++){
					optArr.push({
						optVal:$(closeDomArr[i]).attr("nv-close-val"),
						optText:$(closeDomArr[i]).attr("nv-close-text"),
					});
				};
				_select.eventFn.removeByValue(optArr,$(this).attr("nv-close-val"));
				closestDom.find(".nv-select-checkbox[nv-option-value=" + $(this).attr("nv-close-val") +"]").removeClass("nv-select-checkbox-checked");
				closestDom.find("dt").find(".nv-select-checkbox-normal").find("span").addClass("nv-select-checkbox-uncheck");
				_select.eventFn.bindVal($(this),_obj,optArr);
				if (optArr.length == 0){
					closestDom.find("dt").removeClass("nv-select-checkbox-checked");
					var firstVal = closestDom.find("dd").eq(0).attr("nv-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);

				};
				_select.eventFn.appendDom($(this),_obj,optArr);
				if (optArr.length == 0){
					closestDom.find(_obj.options.contentClassName).css({
						"top":closestDom.find(_obj.options.titleClassName).height() + 4
					});
				}else {
					closestDom.find(_obj.options.contentClassName).css({
						"top":closestDom.find(_obj.options.titleClassName).height() + 14
					});
				}
				_select.eventFn.deleteOpt(_obj);
			})
		},
		// 往真实select绑定选中的数据
		bindVal:function (obj,_obj,optArr) {
			var selectVal = [],
				selectDom = obj.closest(_obj.options.unselectClassName).prev(_obj.selector).eq(0);
			for (var i = 0,j = optArr.length; i < j; i++){
				selectVal.push(optArr[i].optVal);
			};
			selectDom.val(selectVal);
			selectDom.trigger("change");
		}
	},
	ajax:{}
}






var _tip = {
    uid:40500000,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.tipEvent(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
       tipEvent:function(opt){
           var array = opt.array;
           $.each(array,function(i,n){
               var eventName = $(this).attr("data-tip-event") || "hover";
               if(eventName == "hover"){
                   eventName = "mouseover";
               }
               $(this).off(eventName).on(eventName,_tip.eventFn.reloadTipHtmlFn);
               if(eventName == "mouseover"){
                   $(this).off("mouseout").on("mouseout",function(){
                       var ids = $(this).data("tooltip");
                       var $ids =  $("#"+ids);
                       $ids.data("status","hidden");
                       // console.log("11="+ids)
                       nv.tools.later(function(){
                           // console.log("22="+ids)
                           var status = $ids.data("status") || "hidden";
                           if(status == "hidden"){
                               $ids.removeClass("nv-tip-show");
                           }

                       },50)
                       $ids.off("mouseover").on("mouseover",function(){
                           $(this).addClass("nv-tip-show");
                           $(this).data("status","show");
                       })
                       $ids.off("mouseout").on("mouseout",function(){
                           var _this = this;
                           $(_this).data("status","hidden");
                           nv.tools.later(function(){
                               var status = $ids.data("status") || "hidden";
                               if(status == "hidden"){
                                   $(_this).removeClass("nv-tip-show");
                               }

                           },50)
                       })


                   });
               }

           })
           nv.dom.clickQueen.push(function(){
               $(".nv-tip").removeClass("nv-tip-show");
           })
       }
    },
    eventFn:{
        reloadTipHtmlFn:function(ev){
            ev.stopPropagation();
            var ids = $(this).data("tooltip"),
                cacheStatus = $(this).attr("data-tip-cache") || "true";
            var $ids = $("#"+ids);
            if(ids && cacheStatus == "true"){
                $ids.data("status","show")
                $ids.addClass("nv-tip-show");
                return false;
            }
            //
            if($ids.length > 0){
                $ids.remove();
            }
            //
            var text = $(this).attr("data-tip-text") || "",
                ps = $(this).attr("data-tip-position") || "top",
                maxWidth = $(this).attr("data-tip-maxwidth") || 250,
                ids = Math.random() * 1000000000000000000;
            //
            $("#"+ids).data("status","show");
            $(this).data("tooltip",ids);
            //
            if(!text){
                return false;
            }
            var html = "<div class=\"nv-tip\" id=\""+ids+"\" style='max-width:"+maxWidth+"px'>";
                html += "<div class=\"nv-tip-inner\">"+text+"</div>";
                html += "<i class=\"nv-tip-arrow\"></i></div>";
            //
            var $tip = $(html).appendTo("body");
            //
            var _ps = $(this).offset(),
                _left = _ps.left,
                _top = _ps.top,
                _width = $(this).outerWidth(false),
                _height = $(this).outerHeight(false);
            var _tipWidth = $tip.width(),
                _tipHeight = $tip.height();
            //
            var className = "";
            //
            if(ps == "top"){
                //
                _top = _top - _tipHeight - 5;
                _left = _left + _width/2 - _tipWidth/2;
                className = "nv-tip-top nv-tip-show";

            }else if(ps == "tl"){
                _top = _top - _tipHeight - 5;
                className = "nv-tip-top-left nv-tip-show";
            }else if(ps == "tr"){
                _top = _top - _tipHeight - 5;
                _left = _left - _tipWidth + _width;
                className = "nv-tip-top-right nv-tip-show";
            }else if(ps == "rt"){
                _left = _left + _width;
                className = "nv-tip-right-top nv-tip-show";

            }else if(ps == "right"){
                _top = _top + _height/2 - _tipHeight/2;
                _left = _left + _width;
                className = "nv-tip-right-top nv-tip-show";

            }else if(ps == "rb"){
                _top = _top + _height - _tipHeight;
                _left = _left + _width;
                className = "nv-tip-right-bottom nv-tip-show";
            }else if(ps == "lt"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "nv-tip-left-top nv-tip-show";
            }else if(ps == "left"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "nv-tip-left nv-tip-show";
            }else if(ps == "lb"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "nv-tip-left-bottom nv-tip-show";
            }else if(ps == "bl"){
                _top = _top + _height;
                className = "nv-tip-bottom-left nv-tip-show";
            }else if(ps == "bottom"){
                _top = _top + _height;
                _left = _left + _width/2 - _tipWidth/2;
                className = "nv-tip-bottom nv-tip-show";
            }else if(ps == "br"){
                _top = _top + _height;
                _left = _left - _tipWidth + _width;
                className = "nv-tip-bottom-right nv-tip-show";
            }
            //
            $tip.css({
                left:_left,
                top:_top
            }).addClass(className);

            $tip.off("click").on("click",function(ev){
                ev.stopPropagation();
            })
        }
    },
    ajax:{}
}


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
                    if($wrap.hasClass("nv-top-wrap")){
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

var _upload = {
    uid: 30900000,
    version: "1.0.0",
    init: function(domObject){
        this.options._obj = domObject;
        this.events.uploadEvent(domObject);
    },
    options: {
        _obj: {}//公共变量，永远不会变
    },
    events:{
        uploadEvent: function(opt){
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    var str   = "",
                        a     = "<a class='nv-btn nv-btn-default'></a>",
                        sDef = "Click to upload",
                        sDef2 = "Select File",
                        label = $("<label class='nv-upload-module'></label>");

                    if($(elem).hasClass(_upload.options._obj.options.avatarClassName)){    //头像上传
                        label.addClass(_upload.options._obj.options.avatarClassName);
                        str  += "<i class='nvicon-add'></i>";
                    }else if($(elem).hasClass(_upload.options._obj.options.pictureClassName)){   //多图片上传
                        label.addClass(_upload.options._obj.options.pictureClassName);
                        str  += "<i class='nvicon-add'></i>";
                    }else if($(elem).hasClass(_upload.options._obj.options.dragClassName)){   //拖拽上传
                        label.addClass(_upload.options._obj.options.dragClassName);
                        str  += "<i class='nvicon-upload-empty'></i><h4>" + $(elem).attr('title') +
                                "</h4><p>" + $(elem).attr('alt') + "</p>";
                    }else if($(elem).hasClass(_upload.options._obj.options.manualClassName)){   // 手动上传
                        label = label.append(a).addClass(_upload.options._obj.options.manualClassName);
                        str  += "<i class='nvicon-doc-empty'></i>";
                        $(elem).attr("title")== undefined ? str += sDef2 : str += $(elem).attr("title");
                    }else if($(elem).hasClass(_upload.options._obj.options.explainClassName)){   //带文字说明
                        var p = $('<p>' + $(elem).attr('alt') + '</p>');
                        label = label.append(a).addClass(_upload.options._obj.options.explainClassName).append(p);
                        str  += "<i class='nvicon-upload-1'></i>";
                        $(elem).attr("title")== undefined ? str += sDef : str += $(elem).attr("title");
                    }else{   //默认上传
                        label = label.append(a);
                        str  += "<i class='nvicon-upload-1'></i>";
                        $(elem).attr("title")== undefined ? str += sDef : str += $(elem).attr("title");
                    }
                    $(elem).addClass(_upload.options._obj.options.hideClassName).wrap(label);
                    $(elem).before(str);

                })
            }
        }
    },
    eventFn:{

    },
    ajax:{}

}

