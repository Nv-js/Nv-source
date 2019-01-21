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
