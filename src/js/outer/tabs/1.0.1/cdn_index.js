Nv.add("./tabs/1.0.1/cdn_index",function(nv,$){
    var language = nv.baseConfig.language;
    nv.fn = nv.fn ? nv.fn :{};
    if(!nv.fn.tabs){
        nv.fn.tabs = {
            //menu items status, 0 => show ,1 => hide
            clickStatus:1,
            //menu item obj
            tab:{}
        }
    }
    var tabs = {
        init:function(config){
            var _this = this;
            var defaults = {
                //语言
                language:language,
                //tab type ,options: base、iframe、edit
                type:"base",
                //选中事件的样式
                target:".nv-tab",
                //事件名称，click 或者 hover
                eventName:"click",
                //是否开启关闭
                isClose:false,
                //是否开启tab选项卡菜单栏
                isMenu:false,
                //事件切换
                onChange:function(){},
                //
                _isMenuList:[
                    {
                        key:"关闭其他页签",
                        value:"closeOthers"
                    }
                ]
            }
            var options = $.extend(defaults,config);
            //存储配置信息
            $(options.target).data("options",options);
            //
            //
            return tabs.events.init(options);
        },
        options:{
            windowClickFlag:1
        },
        eventsFn:{
            //base init style
            styleInitFn:function(n){
                var $n = $(n),
                    options = $n.data("options"),
                    $header = $n.find("> .nv-tab-header"),
                    $content = $n.find(" > .nv-tab-content"),
                    $contentItems = $content.find("> .nv-tab-tabpane"),
                    $items = $header.find("> .nv-tab-item");
                var index = $items.index($header.find(".nv-tab-action"));
                if(index == -1){
                    index = 0;
                    $items.eq(index).addClass("nv-tab-action");
                }
                $contentItems.eq(index).addClass("nv-tab-show");
                if(options.type == "iframe"){
                    tabs.eventsFn.checkIframeSrcFn($contentItems.eq(index).find("iframe"));
                }

            },
            checkIframeSrcFn:function(item){
                var dataSrc = $(item).attr("data-src");
                if(dataSrc){
                    $(item).removeAttr("data-src").attr("src",dataSrc);
                }
            },
            //base type
            bindSimpleFn:function(){
                var $this = $(this);
                if($this.hasClass("nv-tab-disable")){
                    return false;
                }
                var $tab = $this.closest(".nv-tab"),
                    $header = $this.closest(".nv-tab-header"),
                    $content = $tab.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item"),
                    options = $tab.data("options"),
                    $contentItems = $content.find("> .nv-tab-tabpane");
                //simple model just find content by index
                var index = $items.index($this),
                    contentClassName = "nv-tab-show",
                    headerClassName = "nv-tab-action";
                $items.removeClass(headerClassName);
                $(this).addClass(headerClassName);
                $contentItems.removeClass(contentClassName);
                $contentItems.eq(index).addClass(contentClassName);
                //延迟加载onchange
                var _this = this;
                nv.tools.later(function(){
                    options.onChange.call(_this,options);
                },100)
            },
            bindIframeFn:function(){
                var $this = $(this);
                if($this.hasClass("nv-tab-disable")){
                    return false;
                }
                var $tab = $this.closest(".nv-tab"),
                    $header = $this.closest(".nv-tab-header"),
                    $content = $tab.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item"),
                    options = $tab.data("options"),
                    $contentItems = $content.find("> .nv-tab-tabpane");
                //simple model just find content by index
                var index = $items.index($this),
                    contentClassName = "nv-tab-show",
                    headerClassName = "nv-tab-action";
                $items.removeClass(headerClassName);
                $(this).addClass(headerClassName);
                $contentItems.removeClass(contentClassName);
                $contentItems.eq(index).addClass(contentClassName);
                //check iframe data-src
                tabs.eventsFn.checkIframeSrcFn($contentItems.eq(index).find("iframe"));
                //延迟加载onchange
                var _this = this;
                nv.tools.later(function(){
                    options.onChange.call(_this,options);
                },100)
            },
            bindEditFn:function(){
                var $this = $(this);
                if($this.hasClass("nv-tab-disable")){
                    return false;
                }
                var $tab = $this.closest(".nv-tab"),
                    $header = $this.closest(".nv-tab-header"),
                    $content = $tab.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item"),
                    options = $tab.data("options"),
                    $contentItems = $content.find("> .nv-tab-tabpane");
                //
                var xid = $(this).attr("xid");
                var tabClassName = "nv-tab-action",
                    contentClassName = "nv-tab-show";
                //
                $items.removeClass(tabClassName);
                $contentItems.removeClass(contentClassName);
                //
                var $c = "";
                if(xid){
                    $tab.data("tabOpts",{
                        id:xid
                    })
                    $items.filter("[xid='"+xid+"']").addClass(tabClassName);
                    $c = $contentItems.filter("[xid='"+xid+"']");
                    $c.addClass(contentClassName);
                    //

                    //
                }else{
                    var index = $items.index($this);
                    $this.addClass(tabClassName);
                    $c = $contentItems.eq(index);
                    $c.addClass(contentClassName);
                }
                //
                //查找是否需要切换iframe
                tabs.eventsFn.checkIframeSrcFn($c.find("iframe"));
                //延迟加载onchange
                var _this = this;
                nv.tools.later(function(){
                    options.onChange.call(_this,options);
                },100)


            },
            reChooseFn:function(){
                var $this = $(this),
                    $header = $this.find("> .nv-tab-overflow > .nv-tab-header"),
                    $content = $this.find("> .nv-tab-content");
                var id = $this.data("tabOpts")|| {};
                id = id.id || "";
                var $items = $header.find("> .nv-tab-item"),
                    $panes = $content.find("> .nv-tab-tabpane");
                var tabClassName = "nv-tab-action",
                    contentClassName = "nv-tab-show";
                $items.removeClass(tabClassName);
                $panes.removeClass(contentClassName);
                if(!id){
                    $items.eq(0).addClass(tabClassName);
                    $panes.eq(0).addClass(contentClassName);
                }
                $items.filter("[xid='"+id+"']").addClass(tabClassName);
                var $pan = $panes.filter("[xid='"+id+"']");
                $pan.addClass(contentClassName);
                //查找是否需要切换iframe
                tabs.eventsFn.checkIframeSrcFn($pan.find("iframe"));

            },
            /**
             * @Author: zhangjinglin
             * @Email: zhangjinglin@jd.com
             * @Date: Created in 2018/6/14 下午4:56
             * @Description:重绘html
             * @params <Object> config
             * @paramsDescription  配置 :
             */
            rebuildTabFn:function(config){
                var tabHtml = "";
                var contentHtml = "";
                var _this = this;
                //
                $.each(config,function(i,n){
                    tabHtml += "<li class=\"nv-tab-item \" xid=\""+n.id+"\">"+n.title+"</li>";
                    contentHtml += n.url ? "<div class=\"nv-tab-tabpane\" xid='"+n.id+"' style=\"width:100%;height:300px;\"><iframe data-src=\""+n.url+"\"></iframe></div>" : "<div class=\"nv-tab-tabpane\" xid='"+n.id+"'>"+n.content+"</div>"
                })
                //
                //
                var $this = $(this),
                    $header = $this.find("> .nv-tab-overflow > .nv-tab-header"),
                    $content = $this.find("> .nv-tab-content");
                //
                $header.append(tabHtml);
                $content.append(contentHtml);
                //
                //重载选中状态
                tabs.eventsFn.reChooseFn.call(_this);
                //重载事件
                tabs.events.reloadTabsEvent(_this);
                //重载menu方法
                tabs.eventsFn.menu(_this);
                //重载关闭方法
                tabs.eventsFn.closeBtnFn(_this);
                //
                nv.tools.later(function(){
                    tabs.eventsFn.checkScrollFn(_this);
                },300)
            },
            /**
             * @Author: zhangjinglin
             * @Email: zhangjinglin@jd.com
             * @Date: Created in 2018/6/14 下午5:27
             * @Description:检查Id
             * @params <Object> config
             * @paramsDescription  配置 :
             */
            checkIdStatusFn:function(config){
                var _this = this;
                var $header = $(_this).find("> .nv-tab-overflow > .nv-tab-header");
                var rets = [],
                    ret;
                if(!nv.tools.isArray(config)){
                    rets.push(config)
                }else{
                    rets = config;
                }
                var _array = [];

                $.each(rets,function(i,n){
                    ret = $header.find("> .nv-tab-item[xid='"+n.id+"']");
                    if(ret.length == 0){
                        _array.push(n);
                    }
                    if(n.isSelect){
                        $(_this).data("tabOpts",{
                            id:n.id
                        })
                    }
                })
                return _array;
            },
            /**
             * @Author: zhangjinglin
             * @Email: zhangjinglin@jd.com
             * @Date: Created in 2018/6/15 下午10:25
             * @Description:检查是否显示左右滚动按钮 => 同时判断是否需要左右显示
             */
            checkScrollFn:function(target){
                var $target = $(target),
                    options = $target.data("options"),
                    $overflow =  $target.find("> .nv-tab-overflow"),
                    $header = $overflow.find("> .nv-tab-header"),
                    $left = $overflow.find("> .nv-tab-left"),
                    $right = $overflow.find("> .nv-tab-right"),
                    $content = $target.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");
                //
                var ov_w = parseFloat($overflow.width()) - parseFloat($left.width()) * 3,
                    he_w = parseFloat($header.width());
                var _fixw = he_w - ov_w;
                //
                //
                // console.log("status == "+_fixw)
                //
                if(_fixw <= 0){
                    $left.removeClass("nv-tab-show").removeClass("nv-tab-disable");
                    $right.removeClass("nv-tab-show").removeClass("nv-tab-disable");
                    $header.removeClass("nv-tab-mid");
                    return false;
                }
                var _ml = parseFloat($header.css("marginLeft") || 0);
                if(_ml == 0){
                    // left disable
                    $left.addClass("nv-tab-show").addClass("nv-tab-disable");
                    $header.addClass("nv-tab-mid");
                    $right.addClass("nv-tab-show").removeClass("nv-tab-disable");
                }else if(Math.abs(_ml) == Math.abs(_fixw)){
                    //right disable
                    $right.addClass("nv-tab-show").addClass("nv-tab-disable");
                    $header.addClass("nv-tab-mid");
                    $left.addClass("nv-tab-show").removeClass("nv-tab-disable");
                }else{
                    //both side active
                    $right.addClass("nv-tab-show").removeClass("nv-tab-disable");
                    $header.addClass("nv-tab-mid");
                    $left.addClass("nv-tab-show").removeClass("nv-tab-disable");
                }
                //
            },
            scrollFn(direct){
                var $target = $(this),
                    options = $target.data("options"),
                    $overflow =  $target.find("> .nv-tab-overflow"),
                    $header = $overflow.find("> .nv-tab-header"),
                    $left = $overflow.find("> .nv-tab-left"),
                    $right = $overflow.find("> .nv-tab-right"),
                    $content = $target.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");
                var _ow = parseFloat($overflow.width()) - parseFloat($left.width()) * 3,
                    _hw = parseFloat($header.width()),
                    _fixw = _hw - _ow;
                // console.log("_hw="+_hw+"=======_ow="+_ow);
                if(_fixw < 0){
                    return false;
                }
                var _time = 300;
                var _sc = 0;
                if(_fixw > 0 && _fixw < 200){
                    _sc = _fixw;
                    _time = 100;
                }else if(_fixw >= 200 && _fixw < 400){
                    _sc = _fixw/2;
                    _time = 200;
                }else if(_fixw >= 400 && _fixw < 600){
                    _sc = _fixw/4;
                    _time = 300;
                }else if(_fixw >= 600){
                    _sc = _fixw/6;
                    _time = 400;
                }
                var $sw = parseFloat($header.css("marginLeft") || 0);
                $sw = $sw + direct * _sc;
                if(Math.abs($sw) - Math.abs(_fixw) > 0){
                    $sw = direct * _fixw;
                }
                if($sw > 0){
                    $sw = 0;
                }
                //
                var _this = this;
                //
                $header.animate({
                    marginLeft:$sw
                },_time,function(){
                    //检查滚动状态
                    nv.tools.later(function(){
                        tabs.eventsFn.checkScrollFn(_this);
                    },0)
                })


            },
            menu:function(target){
                var $target = $(target),
                    options = $target.data("options"),
                    $overflow =  $target.find("> .nv-tab-overflow"),
                    $header = $overflow.find("> .nv-tab-header"),
                    $left = $overflow.find("> .nv-tab-left"),
                    $right = $overflow.find("> .nv-tab-right"),
                    $content = $target.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");
                if(options.isMenu){
                    var $menu = $("#ev-menu");
                    if($menu.length == 0){
                        var html = "<div class=\"ev-menu\" id=\"ev-menu\" style=\"display: none\">";
                        html += "<ul>";
                        for(var i = 0;i < options._isMenuList.length;i++){
                            html += "<li class=\""+options._isMenuList[i].value+"\">";
                            html += options._isMenuList[i].key;
                            html += "</li>";
                        }
                        html += "</ul>";
                        html += "</div>";
                        $("body").append(html);
                    }
                    var $menu = $("#ev-menu");
                    $items.off("contextmenu").on("contextmenu",function(ev){
                        nv.fn.tabs.tab = this;
                        var _$items = $header.find("> .nv-tab-item");
                        if(ev.which == 3){
                            var x = ev.pageX,
                                y = ev.pageY;
                            var $menuLi = $("#ev-menu li.closeOthers");
                            if(_$items.length <= 1){
                                $menuLi.addClass("ev-disabled");
                            }else if($items.length > 1){
                                $menuLi.removeClass("ev-disabled");
                            }
                            $menu.css({
                                "left":x,
                                "top":y
                            }).show();
                            //modify global clickStatus
                            nv.fn.tabs.clickStatus = 1;
                            return false;
                        }
                    })
                    $("#ev-menu").unbind("mouseover").bind("mouseover",function(){
                        nv.fn.tabs.clickStatus = 0;
                    })
                    $("#ev-menu").unbind("mouseout").bind("mouseout",function(){
                        nv.fn.tabs.clickStatus = 1;
                    })
                    $("#ev-menu li").unbind("click").bind("click",function(){
                        var _this = this;
                        //关闭其他的选项卡
                        if($(_this).hasClass("closeOthers")&&!$(_this).hasClass("disabled")){
                            //关闭其他
                            var $item = $(nv.fn.tabs.tab),
                                $header = $item.parent(),
                                $tab = $item.closest(".nv-tab"),
                                op = $tab.data("options"),
                                $content = $tab.find("> .nv-tab-content"),
                                $tabpanes = $content.find("> .nv-tab-tabpane"),
                                $items = $header.children(".nv-tab-item");
                            var xid;
                            if($item.length > 0){
                                var $others = $item.siblings();
                                $others.each(function(){
                                    xid = $(this).attr("xid");
                                    if(xid){
                                        $items.filter("[xid='"+xid+"']").remove();
                                        $tabpanes.filter("[xid='"+xid+"']").remove();
                                    }else{
                                        var _$items = $header.children(".nv-tab-item"),
                                            _$tabpanes = $content.find("> .nv-tab-tabpane");
                                        var index = _$items.index($(this));
                                        _$items.eq(index).remove();
                                        _$tabpanes.eq(index).remove();
                                    }
                                })
                                //
                                $item.click();
                                //
                                $("#ev-menu").hide();
                                nv.fn.tabs.clickStatus = 1;
                                //重载关闭方法
                                //重载关闭方法
                                tabs.eventsFn.closeBtnFn($tab[0]);
                                //重载判断是否隐藏滚动状态
                                nv.tools.later(function(){
                                    tabs.eventsFn.checkScrollFn(op.target);
                                },0)
                            }
                        }
                    })
                }

                // <div class="ev-menu" id="ev-menu" style="display: none">
                //         <ul>
                //         <!--<li>-->
                //         <!--<a href="javascript:;">关闭右侧页签</a>-->
                //         <!--</li>-->
                //         <li class="closeOthers">
                //         <a href="javascript:;">关闭其他页签</a>
                //         </li>
                //         </ul>
                //         </div>
            },
            closeBtnFn:function(target){
                var $target = $(target),
                    options = $target.data("options"),
                    $overflow =  $target.find("> .nv-tab-overflow"),
                    $header = $overflow.find("> .nv-tab-header"),
                    $left = $overflow.find("> .nv-tab-left"),
                    $right = $overflow.find("> .nv-tab-right"),
                    $content = $target.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");
                if($items.length == 1){
                    $items.find(".nvicon-close").remove();
                    return false;
                }
                //查找并自动添加关闭按钮
                if(options.isClose){
                    $items.each(function(){
                        var $close = $(this).find(".nvicon-close");
                        if($close.length == 0){
                            $(this).append("<i class='nvicon-close'></i>");
                        }
                    })
                }
                //
                var $closes = $items.find(".nvicon-close");
                $closes.off("click").on("click",function(ev){
                    ev.stopPropagation();
                    var $p = $(this).parent(),
                        $target = $(this).closest(".nv-tab"),
                        $items = $(this).closest(".nv-tab-header").find(".nv-tab-item"),
                        xid = $p.attr("xid");
                    if(!xid){
                        xid = "x_"+(parseInt($items.index($p)) + 1);
                    }
                    tabs.events.deleteEditEvent.call({target:$target[0]},xid);
                })
            }

        },
        events:{
            init:function(options){
                var targets = nv.dom.find(options.target);
                if(options.type == "base"){
                    tabs.events.bindSimpleEvent(targets);
                }else if(options.type == "iframe"){
                    tabs.events.bindIframeEvent(targets);
                }else if(options.type == "edit"){
                    return tabs.events.bindEditEvent(targets);
                }

            },
            resizeEvent:function(target){
                nv.dom.resizeQueen.push(function(){
                    //
                    var $target = $(target),
                        options = $target.data("options"),
                        $overflow =  $target.find("> .nv-tab-overflow"),
                        $header = $overflow.find("> .nv-tab-header"),
                        $left = $overflow.find("> .nv-tab-left");
                    //
                    var ov_w = parseFloat($overflow.width()) - parseFloat($left.width()) * 3,
                        he_w = parseFloat($header.width());
                    var _fixw = he_w - ov_w;
                    if(_fixw < 0){
                        $header.animate({
                            marginLeft:0
                        },100)
                    }
                    //
                    //
                    tabs.eventsFn.checkScrollFn(target);
                })
            },
            bindEditEvent:function(targets){
                var target = targets[0];
                //直接预绑定事件
                tabs.events.scrollEvent(target);
                //动态调整
                tabs.events.resizeEvent(target);
                //判断是否添加对应的功能点
                tabs.eventsFn.menu(target);
                //判断是否需要加载关闭按钮
                tabs.eventsFn.closeBtnFn(target);
                //
                //重载选中状态
                tabs.eventsFn.reChooseFn.call(target);
                // 重载事件
                tabs.events.reloadTabsEvent(target);
                // //重载tab切换
                tabs.eventsFn.checkScrollFn(target);
                //重载menu方法
                tabs.eventsFn.menu(target);
                // //重载关闭方法
                tabs.eventsFn.closeBtnFn(target);
                //
                return{
                    target:target,
                    add:tabs.events.addEditEvent,
                    selected:tabs.events.updateEditEvent,
                    delete:tabs.events.deleteEditEvent
                }
            },
            reloadTabsEvent:function(target){
                var $n = $(target),
                    options = $n.data("options"),
                    $header = $n.find("> .nv-tab-overflow > .nv-tab-header"),
                    $content = $n.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");

                //
                $items.off(options.eventName).on(options.eventName,tabs.eventsFn.bindEditFn);
            },
            addEditEvent:function(config){
                //先检查是否有这个ID
                config = tabs.eventsFn.checkIdStatusFn.call(this.target,config);
                //新建
                tabs.eventsFn.rebuildTabFn.call(this.target,config);
            },
            /**
             * @Author: zhangjinglin
             * @Email: zhangjinglin@jd.com
             * @Date: Created in 2018/6/15 下午4:30
             * @Description:
             * @params <Object> config
             * @paramsDescription  id:1001,isReload:true:
             */
            updateEditEvent:function(config){
                var xid = config.id,
                    update = config.update;
                var $tab = $(this.target);
                var $header = $tab.find("> .nv-tab-overflow > .nv-tab-header"),
                    $item = $header.find("> .nv-tab-item[xid='"+xid+"']"),
                    $content = $tab.find(" > .nv-tab-content"),
                    _id = $item.attr("xid");
                if(!xid){
                    return false;
                }
                var sp = xid.toString().lastIndexOf("x_");
                if(sp > -1){
                    //按照位置去选中
                    sp = parseInt(xid.split("x_")[1]) - 1;
                    var $it = $header.find("> .nv-tab-item").eq(sp);
                    if($it.length > 0){
                        $it.click();
                    }
                }else{
                    $item.click();
                }
            },
            deleteEditEvent:function(xid){
                if(!xid){
                    return false;
                }
                var $tab = $(this.target);
                var $header = $tab.find("> .nv-tab-overflow > .nv-tab-header"),
                    $item = $header.find("> .nv-tab-item[xid='"+xid+"']"),
                    $content = $tab.find(" > .nv-tab-content"),
                    _id = $item.attr("xid");
                //
                var sp = xid.toString().lastIndexOf("x_");
                if(sp > -1){
                    sp = parseInt(xid.split("x_")[1]) - 1;
                    $item = $header.find("> .nv-tab-item").eq(sp);
                }
                var $target = $item.next();
                //
                //
                if($target.length == 0){
                    $target = $item.prev();
                }
                //
                //
                $target.click();
                //
                if(sp > -1){
                    //按照位置去删除
                    sp = parseInt(xid.split("x_")[1]) - 1;
                    $item = $header.find("> .nv-tab-item").eq(sp);
                    $item.remove();
                    $content.find("> .nv-tab-tabpane").eq(sp).remove();
                    //重载关闭方法
                    tabs.eventsFn.closeBtnFn(this.target);
                    return false;
                }
                //
                if(xid){
                    //删除对应id
                    $item.remove();
                    $content.find("> .nv-tab-tabpane[xid='"+xid+"']").remove();
                }
                //
                //
                //
                $tab.data("tabOpts",{
                    id:$target.attr("xid")
                })
                // //
                //重载tab切换
                tabs.eventsFn.checkScrollFn(this.target);
                //重载关闭方法
                tabs.eventsFn.closeBtnFn(this.target);
            },
            bindSimpleEvent:function(targets){
                $.each(targets,function(i,n){
                    var $n = $(n),
                        options = $n.data("options"),
                        $header = $n.find("> .nv-tab-header"),
                        $content = $n.find(" > .nv-tab-content"),
                        $items = $header.find("> .nv-tab-item");
                    tabs.eventsFn.styleInitFn(n);
                    $items.off(options.eventName).on(options.eventName,tabs.eventsFn.bindSimpleFn);
                })
            },
            bindIframeEvent:function(targets){
                $.each(targets,function(i,n){
                    var $n = $(n),
                        options = $n.data("options"),
                        $header = $n.find("> .nv-tab-header"),
                        $content = $n.find(" > .nv-tab-content"),
                        $items = $header.find("> .nv-tab-item");
                    tabs.eventsFn.styleInitFn(n);
                    $items.off(options.eventName).on(options.eventName,tabs.eventsFn.bindIframeFn);

                })
            },
            /**
             * @Author: zhangjinglin
             * @Email: zhangjinglin@jd.com
             * @Date: Created in 2018/6/17 下午12:14
             * @Description:滚动事件切换,初始化时候加载一次即可（多次加载影响效率）
             * @params <String> paramName
             * @paramsDescription  paramName :
             */
            scrollEvent:function(target){
                var $target = $(target),
                    options = $target.data("options"),
                    $overflow =  $target.find("> .nv-tab-overflow"),
                    $header = $overflow.find("> .nv-tab-header"),
                    $left = $overflow.find("> .nv-tab-left"),
                    $right = $overflow.find("> .nv-tab-right"),
                    $content = $target.find(" > .nv-tab-content"),
                    $items = $header.find("> .nv-tab-item");
                //
                var _w,_sw;
                $left.off("click").on("click",function(){
                    _w = parseFloat($overflow.width()) - parseFloat($left.width())*3;
                    _sw = parseFloat($header.width());
                    tabs.eventsFn.scrollFn.call(target,1);
                })
                $right.off("click").on("click",function(){
                    tabs.eventsFn.scrollFn.call(target,-1);
                })
                //
            }

        },
        ajax:{}
    }
    nv.dom.clickQueen.push(function(){
        var $menu = $("#ev-menu");
        if($menu.length > 0 && nv.fn.tabs.clickStatus){
            $menu.hide();
        }
    })
    return {
        init:tabs.init
    }
},{
    requires:["jquery","./css/cdn_index.css"],
    alias:'tab'
})