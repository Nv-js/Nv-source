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
                            Zr.tools.later(function(){
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
                        Zr.tools.later(function(){
                            $(_this).removeData(_dropdown.options._obj.options.cacheName);
                            $(_this).removeClass(_dropdown.options._obj.options.showMenuClassName);
                        },300);
                    })

                })
                //点击其他地方取消相关样式
                zr.dom.clickQueen.push(function(){
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