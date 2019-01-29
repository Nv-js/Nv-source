(function(){
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/28 下午9:00
     * @Description:默认模块配置
     */

    var config = {
        "jquery":{
            "path":"./jqplugins/jquery/@version/cdn_index",
            "version":'1.12.3'
        },
        "jquery3":{
            "path":"./jqplugins/jquery/@version/cdn_index",
            "version":'3.2.1'
        },
        "zepto":{
            "path":"./jqplugins/zepto/@version/cdn_index",
            "version":"1.0.1"
        },
        "perfectscrollbar":{
            "path":"./perfectscrollbar/@version/cdn_index",
            "version":"1.0.1"
        },
        "swiper":{
            "path":"./swiper/@version/cdn_index",
            "version":"1.0.1"
        },
        "echarts":{
            "path":"./echarts/@version/cdn_index",
            "version":"4.0.1"
        },
        "echartsSimple":{
            "path":"./echarts/@version/cdn_echarts-simple",
            "version":"4.0.1"
        },
        "echartsNormal":{
            "path":"./echarts/@version/cdn_echarts-normal",
            "version":"4.0.1"
        },
        "animate":{
            "path":"./animate/@version/cdn_index",
            "version":"1.0.1"
        },
        "compress":{
            "path":"./compress/@version/cdn_index",
            "version":"1.0.1"
        },
        "dragFloat":{
            "path":"./dragFloat/@version/cdn_index",
            "version":"1.0.1"
        },
        "message":{
            "path":"./message/@version/cdn_index",
            "version":"1.0.1"
        },
        "tab":{
            "path":"./tabs/@version/cdn_index",
            "version":"1.0.1"
        },
        "tmpl":{
            "path":"./tmpl/@version/cdn_index",
            "version":"1.0.1"
        },
        "datatables":{
            "path":"./datatables/@version/cdn_index",
            "version":"1.0.1"
        },
        "page":{
            "path":"./page/@version/cdn_index",
            "version":"1.0.1"
        },
        "modal":{
            "path":"./modal/@version/cdn_index",
            "version":"1.0.1"
        },
        "jstree":{
            "path":"./jstree/@version/cdn_index",
            "version":"3.3.5"
        },
        "ztree":{
            "path":"./ztree/@version/cdn_index",
            "version":"1.0.1"
        },
        "mock":{
            "path":"./mock/@version/cdn_index",
            "version":"1.0.1"
        },
        "datePicker":{
            "path":"./datePicker/@version/cdn_index",
            "version":"1.0.1"
        },
        "notification":{
            "path":"./notification/@version/cdn_index",
            "version":"1.0.1"
        },
        "affix":{
            "path":"./affix/@version/cdn_index",
            "version":"1.0.1"
        },
        "popover":{
            "path":"./popover/@version/cdn_index",
            "version":"1.0.1"
        },
        "tag":{
            "path":"./tag/@version/cdn_index",
            "version":"1.0.1"
        },
        "ajaxForm":{
            "path":"./jqplugins/jqueryForm/@version/cdn_index",
            "version":"3.50.0"
        },
        "progress":{
            "path":"./progress/@version/cdn_index",
            "version":"1.0.1"
        },
        "fixedColumns":{
            "path":"./datatables/@version/cdn_fixedColumns",
            "version":"1.0.1"
        }
    }
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:49
     * @Description:所有内置模块的集合，需要压缩后处理
     */
//all inner modules code DEMO


    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:47
     * @Description:各个模块的配置,包含选择器名称与模块名称
     */
    var prefix = "nv";
    var moduleSelectors = [
        {
            selectorName:"."+prefix+"-dropdown",
            prefix: prefix,
            moduleName:"_dropdown",
            options:{}
        },
        {
            selectorName:"."+prefix+"-alert",
            moduleName:"_alert",
            options:{
                closeSelector:"."+prefix+"-alert-close",//关闭的样式名称
                isRemove:true,//关闭后，是否是移除，默认是移除,否则是隐藏
            }
        },
        {
            selectorName:"."+prefix+"-input",
            moduleName:"_input",
            options:{
                clearSelector:"."+prefix+"-input-clear",
                clearClassName:prefix+"-input-clear",
                groupSelector:"."+prefix+"-input-group",
                groupClassName: prefix + '-input-group', // 多个组件外层盒子
                iconCloseCircle: prefix + 'icon-close-circle', // 关闭图标
                wapperClassName: prefix + '-input-wapper', // 组合时外包盒子
            }
        },
        {
            selectorName:"."+prefix+"-textarea",
            moduleName:"_input",
            options:{
                txtNumSelector:"."+prefix+"-input-num",
                groupSelector:"."+prefix+"-input-group",
                groupClassName: prefix + '-input-group', // 多个组件外层盒子
                textareaClassName: "." + prefix + '-textarea', // 区分input和textarea
                txtNumClassName: prefix + '-input-num', // textarea输入字数显示
            }
        },
        {
            selectorName:"."+prefix+"-radio",
            prefix: prefix,
            moduleName:"_radio",
            options:{}
        },
        {
            selectorName:"."+prefix+"-checkbox",
            prefix: prefix,
            moduleName:"_checkbox",
            options:{}
        },
        {
            selectorName:"."+prefix+"-select",
            moduleName:"_select",
            options:{
                hideClassName: prefix + "-select-hide",//隐藏
                disableClassName: prefix + "-select-disable",//禁用样式
                smClassName: prefix + "-select-sm",//sm
                lgClassName: prefix + "-select-lg",//lg
                menuClassName: prefix + '-select-menu', // 下拉框列表
                receptionClassName: prefix + "-select-reception",//显示选择项内容
                simulationClassName: prefix + "-simulation",  // 模拟出的最外层盒子
                arrowUpClassName: prefix + "icon-arrow-up",    // 箭头向上的图标
                arrowDownClassName: prefix + "icon-arrow-down",    // 箭头向下的图标
                iconClose: prefix + "icon-close",   // 关闭图标
                selectValues: prefix + "-select-values", // 当模拟框有选中值时带的class
                multipleClassName: prefix + '-select-multiple', // 多选样式
                checkboxChecked: prefix + '-select-checkbox-checked', // 是否选中
                checkboxUncheck: prefix + '-select-checkbox-uncheck',    // 部分选中
                checkboxNormal: prefix + '-select-checkbox-normal',     // checkbox盒子样式
            }
        },
        // {
        //     selectorName:"."+prefix+"-timeline",
        //     moduleName:"_timeline",
        //     options:{
        //     }
        // },
        {
            selectorName:"."+prefix+"-nav",
            moduleName:"_nav",
            options:{
                itemClassName:"."+prefix + "-nav-item", //item项
                treeClassName:prefix + "-nav-tree", //侧边导航
                disableClassName:prefix + "-nav-disable", //禁用效果
                showClassName:prefix + "-nav-show", //显示菜单
                selectedClassName:prefix + "-nav-selected", //选中
                shrinkClassName:prefix + "-nav-shrink", //收缩菜单
                buttonClassName:"." + prefix + "-nav-button", //控制收缩的button
                collapsedClassName:prefix + "-nav-collapsed" //展开菜单
            }
        },
        {
            selectorName: "." + prefix + "-upload",
            moduleName: "_upload",
            options: {
                moduleClassName: prefix + "-upload-module",
                explainClassName: prefix + "-upload-explain", //带说明文字
                avatarClassName: prefix + "-upload-avatar",  //上传头像
                pictureClassName: prefix + "-upload-picture",  //多图片上传
                photoClassName: prefix + "-upload-photo",  //图片列表
                verticalClassName: prefix + "-upload-list-vertical",  //图片列表垂直排列
                dragClassName: prefix + "-upload-drag",  //可拖拽上传
                manualClassName: prefix + "-upload-manual",  //手动上传
                listClassName: prefix + "-upload-list",  //默认列表
                pictureListClassName: prefix + "-upload-list-picture",  //多图片上传列表
                photoListClassName: prefix + "-upload-list-photo",  //图片列表
                hideClassName: prefix + "-upload-hide"
            }
        },
        {
            selectorName:"."+prefix+"-layout",
            moduleName:"_layout",
            options:{
                sideTriggerClassName:prefix + "-layout-side-trigger",
                sideClassName:prefix + "-layout-side",
                collapsedClassName:prefix + "-layout-collapsedClassName",
                collapsedNavClassName:prefix + "-nav-collapsed", //展开菜单
                navSelector:prefix+"-nav",
                trigger:prefix + "-layout-trigger",
                photo:prefix+"-layout-info-photo"
            }
        },
        {
            selectorName:"."+prefix+"-tooltip",
            moduleName:"_tip",
            options:{
            }
        },
        {
            selectorName:"."+prefix+"-top",
            moduleName:"_top",
            options:{
            }
        },
        {
            selectorName:"."+prefix+"-badge",
            moduleName:"_badge",
            options:{
                normalClassName:"."+prefix+"-badge-normal"
            }
        }
    ]


// hasOwnProperty   = ObjProto.hasOwnProperty;
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:46
     * @Description:nv的继承方法
     */
    Nv.config({
        modules:config,
        moduleSelectors:moduleSelectors,
        language:"zh_CN"
    })
})()

Nv.add("./init/1.0.1/cdn_index",function(nv,$) {
    //
    nv.global.init = nv.init = _init;
    nv.dom = {
        //初始化配置
        init: _init,
        //手动绑定组件到页面节点元素
        dispatch: _init_auto,
        //自动观察页面节点变化，并通知相应的组件进行相应
        autoDispatch: _init_observer,
        //手动查找页面节点元素
        find: _find,
        //所有ajax请求
        ajax: _ajax,
        //模版对象
        tmpl: tmpl,
        //滚动队列
        scrollQueen: [],
        //点击队列
        clickQueen: [],
        //resize队列
        resizeQueen: []
    }


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
    uid: 30400000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
    },
    events: {
        closeEvent: function (opt) {
            var PREFIX = _checkbox.options._obj.prefix;
            if (opt.array.length > 0) {
                $.each(opt.array, function (index, element) {
                    var $original = $(element);
                    var _checked = $original.prop('checked'),
                        _disabled = $original.prop('disabled'),
                        _id = $original.prop('id'),
                        _label = $original.attr('data-label') || '';

                    var uuid = function () {
                        var s = [];
                        var hexDigits = "0123456789abcdef";
                        for (var i = 0; i < 6; i++) {
                            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                        }
                        var uuid = s.join("");
                        return uuid;
                    }
                    var checkOnly = function () {
                        var id = uuid();
                        $(id).lenth > 0 ? checkOnly() : _id = id;
                    }
                    if (!_id) {
                        checkOnly();
                        $original.prop('id', _id);
                    }
                    var html = '<label class="' + PREFIX + '-checkbox-wrapper" for="' + _id + '">' +
                        '<span class="' + PREFIX + '-checkbox-clone">' +
                        '<span class="' + PREFIX + '-checkbox-inner"></span>' +
                        '</span>' +
                        '<span class="' + PREFIX + '-checkbox-label">' + _label +
                        '</span>' +
                        '</label>';
                    var $label = $(html);
                    $original.after($label);
                    $original.css('display', 'none');

                    var $clone = $label.children('.' + PREFIX + '-checkbox-clone'),
                        $text = $clone.siblings('.' + PREFIX + '-checkbox-label');

                    if (_label.length == 0) {
                        $text.css('display', 'none');
                    } else {
                        $text.css('display', 'inline');
                    }
                    //已选中
                    if (_checked) {
                        $clone.addClass(PREFIX + '-checkbox-checked');
                        $label.addClass(PREFIX + '-checkbox-wrapper-checked');
                    }
                    //已禁用
                    if (_disabled) {
                        $clone.addClass(PREFIX + '-checkbox-disabled');
                        $label.addClass(PREFIX + '-checkbox-wrapper-disabled');
                    }
                    _checkbox.eventFn.addClickEvent($label, element); //label绑定事件
                    _checkbox.eventFn.addEvent(element) //绑定事件
                })
            }

        }
    },
    eventFn: {
        addEvent: function (dom) {
            dom.onnvchange = function (option) {
                var PREFIX = _checkbox.options._obj.prefix;
                var $input = $(this),
                    input = this,
                    _name = $input.prop('name'),
                    _id = $input.prop('id'),
                    _all = $input.attr('data-all');

                var $label = $input.siblings('[for="' + _id + '"]'),
                    $clone = $label.children('.' + PREFIX + '-checkbox-clone'),
                    $text = $clone.siblings('.' + PREFIX + '-checkbox-label');

                //默认配置
                var settings = {}
                var opt = $.extend({}, settings, option);

                for (var name in opt) {
                    if (name === 'checked') $input.prop('checked', opt[name]);
                    if (name === 'disabled') $input.prop('disabled', opt[name]);
                    if (name === 'value') $input.prop('value', opt[name]);
                    if (name === 'label') {
                        if (opt[name].length == 0) {
                            $text.css('display', 'none');
                            $input.removeAttr('data-label');
                        } else {
                            $text.css('display', 'inline').html(opt[name]);
                            $input.attr('data-label', opt[name]);
                        }
                    };
                }
                if (opt.beforeFn) opt.beforeFn.call(this, opt);

                //选中
                if ($input.prop('checked')) {
                    $clone.addClass(PREFIX + '-checkbox-checked');
                    $label.addClass(PREFIX + '-checkbox-wrapper-checked');
                } else {
                    $clone.removeClass(PREFIX + '-checkbox-checked');
                    $label.removeClass(PREFIX + '-checkbox-wrapper-checked');
                }

                //禁用
                if ($input.prop('disabled')) {
                    $clone.addClass(PREFIX + '-checkbox-disabled');
                    $label.addClass(PREFIX + '-checkbox-wrapper-disabled');
                } else {
                    $clone.removeClass(PREFIX + '-checkbox-disabled');
                    $label.removeClass(PREFIX + '-checkbox-wrapper-disabled');
                }
                var $checkAll = $('input[name="' + _name + '"][data-all="true"]'),
                    $aCheckItems = $('input[name="' + _name + '"][data-all!="true"]'),
                    checkAll = $checkAll[0];

                //根据当前input状态决定选中或非选中
                var select = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        _checked = $element.prop('checked'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.' + PREFIX + '-checkbox-clone');
                    if (_checked) {
                        $clone.addClass(PREFIX + '-checkbox-checked');
                        $label.addClass(PREFIX + '-checkbox-wrapper-checked');
                    } else {
                        $clone.removeClass(PREFIX + '-checkbox-checked');
                        $label.removeClass(PREFIX + '-checkbox-wrapper-checked');
                    }
                }
                //取消半全选
                var cancelMidSelect = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.' + PREFIX + '-checkbox-clone');

                    $clone.removeClass(PREFIX + '-checkbox-mid-checked');
                }
                //半选中
                var midSelect = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.' + PREFIX + '-checkbox-clone');

                    $clone.addClass(PREFIX + '-checkbox-mid-checked');
                }

                cancelMidSelect(checkAll); //初始化全选按钮
                //全选条件判断,判断完退出
                for (var name in opt) {
                    if (name === 'checkedAll') {
                        if (opt[name]) {
                            //全选
                            $checkAll.prop('checked', true);
                            $aCheckItems.prop('checked', true);
                        } else {
                            //全部选
                            $checkAll.prop('checked', false);
                            $aCheckItems.prop('checked', false);
                        }
                        select($checkAll[0]);
                        $aCheckItems.each(function (index, element) {
                            select(element);
                        })
                        return false;
                    }
                }

                //当前操作为全选
                if (_all) {
                    $aCheckItems.prop('checked', $checkAll.prop('checked'));
                    $aCheckItems.each(function (index, element) {
                        select(element);
                    })
                } else {
                    var aCheckbox_len = $aCheckItems.length,
                        checked_len = $aCheckItems.filter(':checked').length;

                    if (aCheckbox_len == checked_len) {
                        //全选
                        $checkAll.prop('checked', true);
                        select(checkAll);
                    } else if (checked_len > 0) {
                        //半全选 时机并未选中
                        $checkAll.prop('checked', false);
                        midSelect(checkAll);
                    } else {
                        //全不选
                        $checkAll.prop('checked', false);
                        select(checkAll);
                    }
                }

                if (opt.afterFn) opt.afterFn.call(this);
            }
        },
        addClickEvent: function ($label, original) {
            $label.on('click', function () {
                setTimeout(function () {
                    original.onnvchange ? original.onnvchange() : '';
                }, 30)
            })
        }
    },
    ajax: {}

}
var _dropdown = {
    uid: 20300000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.eventList(domObject.array);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
    },
    events: {
        eventList: function (array) {
            var PREFIX = _dropdown.options._obj.prefix;
            console.log(PREFIX);
            //自动计算高度
            var autoHeight = function (element) {
                var $element = $(element),
                    $link = $element.children('.' + PREFIX + '-dropdown-link'),
                    $menu = $element.children('.' + PREFIX + '-dropdown-menu');
                /**
                 * 根据视窗距离屏幕上下距离,决定向上展示还是向下展示.
                 * 上下同时不够,向下展开
                 */
                var element_t = $element.offset().top,
                    element_h = $element.height(),
                    window_h = $(window).height(),
                    scroll_h = $(document).scrollTop(),
                    menu_pt_h = $menu.css('padding-top'),
                    menu_pb_h = $menu.css('padding-bottom'),
                    menu_h = $menu.height() + parseFloat(menu_pt_h) + parseFloat(menu_pb_h);
                //距离
                var bottom_h = window_h - (element_t - scroll_h) - element_h,
                    top_h = window_h - bottom_h - element_h;

                if (menu_h < bottom_h) {
                    $element.removeClass(PREFIX + '-dropdown-up'); //down
                } else if (menu_h < top_h) {
                    $element.addClass(PREFIX + '-dropdown-up'); //up
                } else {
                    $element.removeClass(PREFIX + '-dropdown-up'); //down
                }
            }
            $.each(array, function (index, element) {
                var $element = $(element),
                    $link = $element.children('.' + PREFIX + '-dropdown-link'),
                    $menu = $element.children('.' + PREFIX + '-dropdown-menu');

                var type = $element.attr('data-type'),
                    menuwidth = $element.attr('data-menuwidth'),
                    menuheight = $element.attr('data-menuheight'),
                    closeauto = $element.attr('data-close-auto');

                //整体禁用
                if ($element.hasClass(PREFIX + '-dropdown-disabled')) {
                    return;
                }

                //事件委托 阻止冒泡
                $element.on('click', '.' + PREFIX + '-dropdown-item-disabled', function (ev) {
                    ev.stopPropagation();
                    return false;
                })
                $element.on('click', '.' + PREFIX + '-dropdown-item', function (ev) {
                    ev.stopPropagation();
                })

                //自定义属性
                //展开框宽度限定
                if (menuwidth) {
                    $menu.css('width', menuwidth);
                }
                if (menuheight) {
                    $menu.css('height', menuheight);
                }

                $(window).on("scroll resize", function () {
                    if (!closeauto) autoHeight(element);
                })
                //初始化
                if (!closeauto) autoHeight(element);
                //展开方式
                if (type === 'click') {
                    $element.on('click', function (ev) {
                        ev.stopPropagation();
                        if (!closeauto) autoHeight(this);
                        $element.hasClass('open') ? $element.removeClass('open') : $element.addClass('open');
                    })
                } else {
                    $element.on('mouseenter', function (ev) {
                        ev.stopPropagation();
                        if (!closeauto) autoHeight(this);
                        $element.addClass('open');
                    })
                    $element.on('mouseleave', function (ev) {
                        ev.stopPropagation();
                        $element.removeClass('open');
                    })
                }
            })
            //点击其他地方取消相关样式
            var nv = Nv;
            nv.dom.clickQueen.push(function () {
                $.each(array, function (i, n) {
                    $(this).removeClass('open');
                })
            })
        }
    },
    eventFn: {},
    ajax: {}
}
var _input = {
    
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
    uid: 30300000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
    },
    events: {
        closeEvent: function (opt) {
            var PREFIX = _radio.options._obj.prefix;
            if (opt.array.length > 0) {
                $.each(opt.array, function (index, element) {
                    var $original = $(element);
                    var _checked = $original.prop('checked'),
                        _disabled = $original.prop('disabled'),
                        _id = $original.prop('id'),
                        _label = $original.attr('data-label') || '';

                    var uuid = function () {
                        var s = [];
                        var hexDigits = "0123456789abcdef";
                        for (var i = 0; i < 6; i++) {
                            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                        }
                        var uuid = s.join("");
                        return uuid;
                    }
                    var checkOnly = function () {
                        var id = uuid();
                        $(id).lenth > 0 ? checkOnly() : _id = id;
                    }
                    if (!_id) {
                        checkOnly();
                        $original.prop('id', _id);
                    }
                    var html = '<label class="' + PREFIX + '-radio-wrapper" for="' + _id + '">' +
                        '<span class="' + PREFIX + '-radio-clone">' +
                        '<span class="' + PREFIX + '-radio-inner"></span>' +
                        '</span>' +
                        '<span class="' + PREFIX + '-radio-label">' + _label +
                        '</span>' +
                        '</label>';
                    var $label = $(html);
                    $original.after($label);
                    $original.css('display', 'none');

                    var $clone = $label.children('.' + PREFIX + '-radio-clone'),
                        $text = $clone.siblings('.' + PREFIX + '-radio-label');

                    if (_label.length == 0) {
                        $text.css('display', 'none');
                    } else {
                        $text.css('display', 'inline');
                    }
                    //已选中
                    if (_checked) {
                        $clone.addClass(PREFIX + '-radio-checked');
                        $label.addClass(PREFIX + '-radio-wrapper-checked');
                    }
                    //已禁用
                    if (_disabled) {
                        $clone.addClass(PREFIX + '-radio-disabled');
                        $label.addClass(PREFIX + '-radio-wrapper-disabled');
                    }

                    _radio.eventFn.addClickEvent($label, element); //label绑定事件
                    _radio.eventFn.addEvent(element); //绑定事件
                })
            }

        }
    },
    eventFn: {
        addEvent: function (dom) {
            dom.onnvchange = function (option) {
                var PREFIX = _radio.options._obj.prefix;
                var $input = $(this),
                    input = this,
                    _name = $input.prop('name'),
                    _id = $input.prop('id');

                var $label = $input.siblings('[for="' + _id + '"]'),
                    $clone = $label.children('.' + PREFIX + '-radio-clone'),
                    $text = $clone.siblings('.' + PREFIX + '-radio-label');

                var opt = option || {};

                for (var name in opt) {
                    if (name === 'checked') $input.prop('checked', opt[name]);
                    if (name === 'disabled') $input.prop('disabled', opt[name]);
                    if (name === 'value') $input.prop('value', opt[name]);
                    if (name === 'label') {
                        if (opt[name].length == 0) {
                            $text.css('display', 'none');
                            $input.removeAttr('data-label');
                        } else {
                            $text.css('display', 'inline').html(opt[name]);
                            $input.attr('data-label', opt[name]);
                        }
                    };
                }
                if (opt.beforeFn) opt.beforeFn.call(this, opt);
                //选中
                if ($input.prop('checked')) {
                    $clone.addClass(PREFIX + '-radio-checked');
                    $label.addClass(PREFIX + '-radio-wrapper-checked');
                    //其他项目取消选中
                    var aInput = $('input[name=' + _name + ']');
                    aInput.each(function (i, element) {
                        if (input !== element) {
                            element.onnvchange ? element.onnvchange() : '';
                        }
                    })
                } else {
                    $clone.removeClass(PREFIX + '-radio-checked');
                    $label.removeClass(PREFIX + '-radio-wrapper-checked');
                }
                //禁用
                if ($input.prop('disabled')) {
                    $clone.addClass(PREFIX + '-radio-disabled');
                    $label.addClass(PREFIX + '-radio-wrapper-disabled');
                } else {
                    $clone.removeClass(PREFIX + '-radio-disabled');
                    $label.removeClass(PREFIX + '-radio-wrapper-disabled');
                }

                if (opt.afterFn) opt.afterFn.call(this);
            }
        },
        addClickEvent: function ($label, original) {
            $label.on('click', function () {
                setTimeout(function () {
                    original.onnvchange ? original.onnvchange() : '';
                }, 30)
            })
        }
    },
    ajax: {}

}
var _select = {
    uid: 30500000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.eventList(domObject);
    },
    options: {
        _obj: {},
    },
    events: {
        eventList: function (opt) {
            var options = _select.options._obj.options;
            $.each(opt.array, function (i, n) {
                // 缓存
                var $n = $(n),
                    optArr = [],
                    htmlArr = [],
                    receptionArr = [],
                    optionArr = [],
                    selectedItem = [],
                    selectedNumber = 0,
                    isHasMultipleClass = '';

                // 获取原生select的value、key、selected
                $n.children().each(function (idx) {
                    var $this = $(this),
                        val = $this.val(),
                        text = $this.text(),
                        selected = $this.prop('selected');

                    // 统计选中数量
                    if (selected) {
                        selectedNumber++;
                    }

                    selectedItem.push(
                        '<span>' + val + '<i class="' + options.iconClose + '"></i></span>'
                    );

                    optArr.push({
                        val: val,
                        text: text,
                        selected: selected
                    });
                });

                $n.addClass(options.hideClassName);

                if ($n.prop('multiple')) {
                    // 初始化前台展示框
                    var selectedArr = [],
                        valueSelected = [];

                    isHasMultipleClass = options.multipleClassName;

                    $.each(optArr, function (idx) {
                        if (optArr[idx].selected) {
                            selectedArr.push(
                                '<span data-value="' + optArr[idx].val + '">' + optArr[idx].text + ' <i class="' + options.iconClose + '"></i></span>'
                            );
                            valueSelected.push(optArr[idx].val);
                        }
                    });

                    // todo 多选的默认选中
                    // if (selectedArr.length === 0) {
                    //     selectedArr.push('请选择');
                    // }

                    receptionArr.push(
                        '<div class="' + options.receptionClassName + ' ' + options.multipleClassName + '">' +
                        selectedArr.join('') +
                        '<i class="' + options.arrowDownClassName + '"></i>' +
                        '</div>'
                    );

                    // 初始化全选标签
                    var dtClass = '',
                        spanClass = '';
                    if (selectedNumber === 0) {
                        dtClass = '';
                        spanClass = '';
                    } else if (selectedNumber === optArr.length) {
                        dtClass = options.checkboxChecked;
                        spanClass = '';
                    } else {
                        dtClass = options.checkboxChecked;
                        spanClass = options.checkboxUncheck;
                    }

                    optionArr.push(
                        '<dt class="' + dtClass + '">' +
                        '<span class="' + options.checkboxNormal + '">' +
                        '<span class="' + spanClass + '"></span>' +
                        '</span>' +
                        '<span>全选</span>' +
                        '</dt>'
                    );

                    // 初始化option框
                    $.each(optArr, function (idx) {
                        var ddClass = '',
                            item = optArr[idx];

                        if (item.selected) {
                            ddClass = options.checkboxChecked;
                        }

                        optionArr.push(
                            '<dd data-value="' + item.val + '" class="' + ddClass + '">' +
                            '<span class="' + options.checkboxNormal + '">' +
                            '<span></span>' +
                            '</span>' +
                            '<span>' + item.text + '</span>' +
                            '</dd>'
                        );
                    });
                } else {
                    var text = '',
                        val = '';

                    if (selectedNumber === 0) {
                        text = optArr[0].text;
                        val = optArr[0].val;
                    } else {
                        $.each(optArr, function (idx) {
                            if (optArr[idx].selected) {
                                text = optArr[idx].text;
                                val = optArr[idx].val;
                            }
                        });
                    }

                    // 初始化展示框
                    receptionArr.push(
                        '<div data-value="' + val + '" class="' + options.receptionClassName + '">' +
                        text +
                        '<i class="' + options.arrowDownClassName + '"></i>' +
                        '</div>'
                    );

                    // 初始化下拉框
                    $.each(optArr, function (idx) {
                        optionArr.push(
                            '<dd data-value="' + optArr[idx].val + '">' + optArr[idx].text + '</dd>'
                        );
                    });
                }

                // 初始化lg、sm样式
                var sizeClass = '',
                    disabledClass = '';
                if ($n.hasClass(options.smClassName)) {
                    sizeClass = options.smClassName;
                } else if ($n.hasClass(options.lgClassName)) {
                    sizeClass = options.lgClassName;
                }

                if ($n.prop('disabled')) {
                    disabledClass = options.disableClassName;
                }

                // 初始化模拟代码
                htmlArr.push(
                    '<div class="' + options.simulationClassName + ' ' + sizeClass + ' ' + disabledClass + '">' +
                    receptionArr.join('') +
                    '<dl class="' + options.menuClassName + ' ' + isHasMultipleClass + ' ' + options.hideClassName + '">' +
                    optionArr.join('') +
                    '</dl>' +
                    '</div>'
                );

                $n.after(htmlArr.join(''));

                // 多选时赋值
                if ($n.prop('multiple')) {
                    $n.next('.' + options.simulationClassName).children('.' + options.receptionClassName).data('data-value', valueSelected);
                }

                // onnvchange触发函数
                _select.eventFn.addEvent(n);
            });

            // 下拉框切换
            _select.eventFn.taggleMenu();

            // 点击选中操作
            _select.eventFn.selectOption();

            // 点击展示框删除相应选中项
            _select.eventFn.delSelected();
        }
    },
    eventFn: {
        addEvent: function (el) {
            el.onnvchange = function (opt) {
                var opts = {
                        disabled: false,
                        selected: false,
                        remove: false,
                        // change: function () {
                        // },
                        beforeFn: function () {
                        },
                        afterFn: function () {
                        },
                    },
                    option = $.extend(opts, opt || {}),
                    options = _select.options._obj.options,
                    $this = $(this),
                    $simulation = $this.next('.' + options.simulationClassName);

                // 执行前回调
                option.beforeFn();

                if (option.disabled) {
                    $simulation.addClass(options.disableClassName);
                }

                if (option.selected) {
                    let $selector = $simulation.find('dd[data-value=' + option.selected + ']');
                    if ($selector.length !== 0) {
                        $selector.click();
                    } else {
                        alert('未找到您输入value值的option！');
                    }
                }

                if (option.remove) {
                    let $selector = $simulation.find('dd[data-value=' + option.remove + ']');
                    if ($selector.length !== 0) {
                        $selector.remove();
                    } else {
                        alert('未找到您输入value值的option！');
                    }
                }

                // 回调函数
                // option.change();

                // 执行后回调
                option.afterFn();

                // opts.eventFn.call(this, opts);
                opts.beforeFn.call(this, opts);
                opts.afterFn.call(this, opts);
            }
        },

        // 下拉框切换
        taggleMenu: function () {
            // 显示下拉框
            var opt = _select.options._obj.options,
                arrowUpClassName = opt.arrowUpClassName,
                hideClassName = opt.hideClassName,
                menuClassName = opt.menuClassName,
                receptionClassName = '.' + opt.receptionClassName;

            $(receptionClassName).off('click').on('click', function (e) {
                e.stopPropagation();

                var $this = $(this),
                    $icon = $this.children('i'),
                    $menu = $this.next('.' + menuClassName);
                if (!$this.closest('.' + opt.simulationClassName).hasClass(opt.disableClassName)) {
                    // 当前打开
                    if ($menu.hasClass(hideClassName)) {
                        $icon.addClass(arrowUpClassName);
                        $menu.removeClass(hideClassName);
                    } else {
                        $icon.removeClass(arrowUpClassName);
                        $menu.addClass(hideClassName);
                    }
                }
            });

            // 隐藏下拉框
            Nv.dom.clickQueen.push(function(){
                $(receptionClassName).children('i').removeClass(arrowUpClassName);
                $('.' + menuClassName).addClass(hideClassName);
            });
        },

        // 点击选中操作
        selectOption: function () {
            var options = _select.options._obj.options;

            // 点击非全选标签
            $('.nv-select-menu dd').on('click', function (e) {
                e.stopPropagation();
                var $this = $(this),
                    $simulation = $this.closest('.' + options.simulationClassName),
                    $reception = $simulation.children('.' + options.receptionClassName),
                    $menu = $this.closest('.' + options.menuClassName);

                // 多选时
                if ($this.parent().prev().hasClass(options.multipleClassName)) {
                    var val = $this.attr('data-value');

                    // 是否选中切换，删减展示框内容
                    if ($this.hasClass(options.checkboxChecked)) {
                        $this.removeClass(options.checkboxChecked);

                        $reception.children('span[data-value=' + val + ']').remove();

                        var valueSelected = $.grep($reception.data('data-value'), function (n, i) {
                            return n !== val;
                        });

                        // 更新value值
                        $reception.data('data-value', valueSelected);

                        // 数据绑定原生select
                        _select.eventFn.bindSelect($simulation.prev(_select.options._obj.selector), valueSelected);
                    } else {
                        $this.addClass(options.checkboxChecked);

                        $this.closest('.' + options.simulationClassName).children('.' + options.receptionClassName).prepend(
                            '<span data-value="' + val + '">' + $this.children('span:last-child').text() + ' <i class="' + options.iconClose + '"></i></span>'
                        );

                        // 更新value值
                        var valueSelected = $reception.data('data-value');
                        valueSelected.push(val);
                        $reception.data('data-value', valueSelected);

                        // 重新绑定监听
                        _select.eventFn.delSelected();

                        // 数据绑定原生select
                        _select.eventFn.bindSelect($simulation.prev(_select.options._obj.selector), valueSelected);
                    }

                    // 全选框做相应更新
                    var $dd = $menu.children('dd'),
                        ddLength = $dd.length,
                        selectedNumber = 0;
                    $dd.each(function (idx) {
                        var $this = $(this);
                        if ($this.hasClass(options.checkboxChecked)) {
                            selectedNumber++;
                        }
                    });

                    var $dt = $this.prevAll('dt');
                    if (selectedNumber === 0) {
                        $dt.removeClass(options.checkboxChecked).children().children().removeClass(options.checkboxUncheck);
                    } else if (selectedNumber === ddLength) {
                        $dt.addClass(options.checkboxChecked).children().children().removeClass(options.checkboxUncheck);
                    } else {
                        $dt.addClass(options.checkboxChecked).children().children().addClass(options.checkboxUncheck);
                    }

                    _select.eventFn.dealMenuTop($menu);

                } else {
                    var obj = {
                        val: $this.attr('data-value'),
                        text: $this.text()
                    };

                    // 更新选中数据
                    $reception.attr('data-value', obj.val);
                    // 数据绑定原生select
                    _select.eventFn.bindSelect($simulation.prev(_select.options._obj.selector), obj.val);

                    $reception.html(obj.text + ' <i class="' + options.arrowDownClassName + '"></i>');
                    $this.parent().addClass(options.hideClassName);
                }
            });

            // 点击全选标签
            $('.nv-select-menu dt').on('click', function (e) {
                e.stopPropagation();
                var $this = $(this),
                    $menu = $this.closest('.' + options.menuClassName),
                    $simulation = $menu.closest('.' + options.simulationClassName);

                if ($this.hasClass(options.checkboxChecked)) {
                    $this.removeClass(options.checkboxChecked);
                    $this.nextAll('dd').removeClass(options.checkboxChecked);

                    var $span = $this.children().eq(0).children();
                    if ($span.hasClass(options.checkboxUncheck)) {
                        $span.removeClass(options.checkboxUncheck);
                    }
                    // 展示框展示和赋值
                    $this.closest('.' + options.simulationClassName).children('.' + options.receptionClassName).html('<i class="' + options.arrowDownClassName + ' ' + options.arrowUpClassName + '"></i>').data('data-value', []);

                    // 更新下拉框高度Top
                    _select.eventFn.dealMenuTop($menu);

                    // 数据绑定原生select
                    _select.eventFn.bindSelect($simulation.prev(_select.options._obj.selector), []);
                } else {
                    $this.addClass(options.checkboxChecked);
                    $this.nextAll('dd').addClass(options.checkboxChecked);

                    var receptionChecked = [],
                        valueChecked = [];
                    $this.nextAll().each(function () {
                        var $this = $(this);
                        receptionChecked.push(
                            '<span data-value="' + $this.attr('data-value') + '">' + $this.children('span:last-child').text() + ' <i class="' + options.iconClose + '"></i></span>'
                        );
                        valueChecked.push($this.attr('data-value'));
                    });

                    // 添加角标
                    receptionChecked.push('<i class="' + options.arrowUpClassName + '"></i>');

                    // 展示框展示和赋值
                    $this.closest('.' + options.simulationClassName).children('.' + options.receptionClassName).html(receptionChecked.join('')).data('data-value', valueChecked);

                    // 数据绑定原生select
                    _select.eventFn.bindSelect($simulation.prev(_select.options._obj.selector), valueChecked);

                    // 更新下拉框高度Top
                    _select.eventFn.dealMenuTop($menu);

                    // 重新绑定监听
                    _select.eventFn.delSelected();
                }
            });
        },

        delSelected: function () {
            var options = _select.options._obj.options;

            $('.' + options.receptionClassName).find('.' + options.iconClose).off('click').on('click', function (e) {
                e.stopPropagation();

                var $this = $(this),
                    $span = $this.closest('span'),
                    $reception = $this.closest('.' + options.receptionClassName),
                    $menu = $reception.next(),
                    val = $span.attr('data-value'),
                    valueSelected = $reception.data('data-value'),
                    selectedNumber = 0,
                    optionsNumber = 0;

                // 删除当前选中项
                $span.remove();

                // 更新缓存
                $.grep(valueSelected, function (n, i) {
                    return n !== val;
                });
                $reception.data('data-value', valueSelected);

                // 更新下拉框
                $reception.next().children('dd').each(function (i) {
                    var $this = $(this);
                    if ($this.attr('data-value') === val) {
                        $this.removeClass(options.checkboxChecked);
                    }

                    if ($this.hasClass(options.checkboxChecked)) {
                        selectedNumber++;
                    }

                    // option数量
                    optionsNumber++;
                });

                // 更新全选
                var $dt = $menu.children('dt');

                if (selectedNumber === 0) {
                    $dt.removeClass(options.checkboxChecked).children().children().removeClass(options.checkboxUncheck);
                } else if (selectedNumber === optionsNumber) {
                    $dt.addClass(options.checkboxChecked).children().children().removeClass(options.checkboxUncheck);
                } else {
                    $dt.addClass(options.checkboxChecked).children().children().addClass(options.checkboxUncheck);
                }

                // 更新下拉框高度
                _select.eventFn.dealMenuTop($menu);
            });
        },

        bindSelect: function (selectDom, valueSelected) {
            selectDom.val(valueSelected);
            selectDom.trigger("change");
        },

        // 调整下拉框相对位置-top
        dealMenuTop: function ($menu) {
            $menu.css('top', $menu.prev('.' + _select.options._obj.options.receptionClassName).height() + 4);
        }
    },
    ajax: {}
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




var _allModules = {
    _alert:_alert,
    _input:_input,
    _dropdown:_dropdown,
    _radio:_radio,
    _checkbox:_checkbox,
    _select:_select,
    // _timeline:_timeline,
    // _list:_list,
    _nav:_nav,
    _upload:_upload,
    _layout:_layout,
    _tip:_tip,
    _top:_top,
    _badge:_badge
}
var ArrayProto = Array.prototype, ObjProto = Object.prototype;// FuncProto = Function.prototype;
var
    // push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    // concat           = ArrayProto.concat,
    toString         = ObjProto.toString;

var _ms = nv.baseConfig.moduleSelectors,
    _tools = nv.tools;
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/23 上午10:37
 * @Description:统一管理内置组件的公共方法
 * @params <String> paramName
 * @paramsDescription  paramName :
 */
function _init(){

}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/2 下午9:48
 * @Description:查找模块名称
 */
function _autoFindMoudle(selectorName){
    var _m = "";
    $.each(_ms,function(i,n){
        if(n.selectorName == selectorName){
            _m = n.moduleName;
            return false;
        }
    })
    return _m;
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/1 下午5:08
 * @Description:自动初始化各个模块
 * @params <Number> type
 * @paramsDescription  初始化哪种标记类型: 1,默认，表示返回未标示（选择后将被标示）,2表示返回已标示的，3表示返回所有类别:
 * @params return <Array>
 * @paramsDescription  返回已选的数组与对应的模块名称
 */
function _init_auto(type){
    type = type ? type : 1;
    var _q = [],
        _retSelector = [],
        _selector = "",
        _prefix = "",
        _options = "",
        _module = "";
    //
    $.each(_ms,function(i,n){
        _selector = n.selectorName;
        _prefix = n.prefix;
        _options = n.options;
        _module = n.moduleName;
        _retSelector = _find(_selector,type);
        _q = [];
        if(_retSelector.length > 0){
            _retSelector = slice.call(_retSelector)
            _q = {
                selector:_selector,
                prefix:_prefix,
                module:_module,
                options:_options,
                array:_retSelector
            }
            //
            //
            // _allModules[_module].init(_retSelector);
            _allModules[_module].init(_q);
        }
    })
    //
    return _q;
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/3 下午8:02
 * @Description:自动监听页面变化
 */
function _init_observer(){
    $(function(){
        $(document).on("DOMNodeInserted",function () {
            _tools.later(function(){
                _init_auto()
            },0)
        })
        $(document).on("DOMNodeRemoved",function () {
            _tools.later(function(){
                _init_auto()
            },0)
        })
    })
}



/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/23 上午10:41
 * @Description:查找所需的节点
 * @params <String> selectors
 * @paramsDescription  选择器
 * @params <Number> type
 * @paramsDescription  返回的类型:1,默认，表示返回未标示（选择后将被标示）,2表示返回已标示的，3表示返回所有类别
 */
function _find(selector,type){
    var _s = $(selector),
        _cacheName = "data-nv-cache",
        _r1 = [],
        _r2 = [],
        _r3 = [];
    type = type ? type : 1;
    if(_s.length > 0){
        // _s.data(_cacheName,_cacheName);
        $.each(_s,function(i,n){
            //如果是代码code则排除
            if($(this).closest(".c-code-inner").length > 0){
                return;
            }
            if($(this).attr(_cacheName) == ""){
                _r2.push(this);
            }else{
                _r1.push(this);
                $(this).attr(_cacheName,"");
            }

            _r3.push(this);
        })
        if(type == 2){
            return _r2;
        }else if(type == 1){
            return _r1;
        }else{
            return _r3;
        }
    }
    return [];
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/30 下午9:45
 * @Description:ajax提交方法
 * @params <Object> options
 * @paramsDescription  jquery的配置入参 :
 */
function _ajax(options){
    var defaults = {

    }
    options = $.extend(defaults,options);
    $.ajax(options);
}

/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/4/7 下午7:43
 * @Description:模版替换
 * @params html <Dom Object> html elements
 * @paramsDescription  html片段，这里面是已经装载好的tmpl模版语言
 * @params html <Data Object> 数据对象
 * @paramsDescription  用于替换模版内容的数据对象，可以是任意类型
 */
function tmpl(str, data) {
    var f = !/[^\w\-.:]/.test(str)
        ? (tmpl.cache[str] = tmpl.cache[str] || tmpl(str))
        : new Function( // eslint-disable-line no-new-func
            tmpl.arg + ',tmpl',
            'var _e=tmpl.encode' +
            tmpl.helper +
            ",_s='" +
            str.replace(tmpl.regexp, tmpl.func) +
            "';return _s;"
        )
    return data
        ? f(data, tmpl)
        : function (data) {
            return f(data, tmpl)
        }
}
tmpl.cache = {}
tmpl.load = function (id) {
    return document.getElementById(id).innerHTML
}
tmpl.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g
tmpl.func = function (s, p1, p2, p3, p4, p5) {
    if (p1) {
        // whitespace, quote and backspace in HTML context
        return (
            {
                '\n': '\\n',
                '\r': '\\r',
                '\t': '\\t',
                ' ': ' '
            }[p1] || '\\' + p1
        )
    }
    if (p2) {
        // interpolation: {%=prop%}, or unescaped: {%#prop%}
        if (p2 === '=') {
            return "'+_e(" + p3 + ")+'"
        }
        return "'+(" + p3 + "==null?'':" + p3 + ")+'"
    }
    if (p4) {
        // evaluation start tag: {%
        return "';"
    }
    if (p5) {
        // evaluation end tag: %}
        return "_s+='"
    }
}
tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
tmpl.encMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
}
tmpl.encode = function (s) {
    return (s == null ? '' : '' + s).replace(tmpl.encReg, function (c) {
        return tmpl.encMap[c] || ''
    })
}
tmpl.arg = 'o'
tmpl.helper =
    ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}" +
    ',include=function(s,d){_s+=tmpl(s,d);}'

// //手动触发一次
$(function(){
    //页面初始化主动触发一次加载内置元素
    _init_auto();
    _init_observer();
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/21 下午9:37
 * @Description:添加滚动事件
 */
$(window).off("scroll").on("scroll",function(){
    var top = $(this).scrollTop();
    $.each(nv.dom.scrollQueen,function(i,n){
        n(top);
    })
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/4/11 下午2:59
 * @Description:尺寸改变事件
 */
$(window).off("resize").on("resize",function(){
    var width = $(this).width();
    $.each(nv.dom.resizeQueen,function(i,n){
        n(width);
    })
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/21 下午9:40
 * @Description:添加点击事件
 */
$(window).off("click").on("click",function(){
    $.each(nv.dom.clickQueen,function(i,n){
        n();
    })
})

return nv;
},{requires:["jquery"]})